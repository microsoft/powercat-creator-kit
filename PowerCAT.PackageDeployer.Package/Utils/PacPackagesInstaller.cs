using Microsoft.Xrm.Tooling.PackageDeployment.CrmPackageExtentionBase;
using System;
using System.Collections.ObjectModel;
using System.Management.Automation;

/// <summary>
/// Utility class for installing packages
/// </summary>
public class PacPackagesInstaller
{
    private string EnvironmentId;

    private TraceLogger Logger;

    /// <summary>
    /// Initializes a new instance of the <see cref="PacPackagesInstaller"/> class.
    /// </summary>
    /// <param name="organizationService">The CRM organization service.</param>
    public PacPackagesInstaller(string environmentId, TraceLogger packageLog)
    {
        EnvironmentId = environmentId;
        Logger = packageLog;
    }

    /// <summary>
    /// Installs a package using the Power Platform CLI (pac) for the specified environment and package name.
    /// </summary>
    /// <param name="packageName">The name of the package to install.</param>
    public void InstallPackage(string packageName)
    {
        string pacCommand = $"pac application install --environment {EnvironmentId} --application-name {packageName}";
        Console.WriteLine($"Triggering command {pacCommand}");
        Logger.Log($"Triggering command {pacCommand}");
        RunPowerShellCommand(pacCommand);
    }

    /// <summary>
    /// Executes a PowerShell command and logs the output or errors.
    /// </summary>
    /// <param name="command">The PowerShell command to execute.</param>
    public void RunPowerShellCommand(string command)
    {
        try
        {
            using (PowerShell PowerShellInstance = PowerShell.Create())
            {
                // use "AddScript" to add the PowerShell command
                PowerShellInstance.AddScript(command);

                // invoke execution on the pipeline (collecting output)
                Collection<PSObject> PSOutput = PowerShellInstance.Invoke();

                // check for errors
                if (PowerShellInstance.HadErrors)
                {
                    foreach (ErrorRecord error in PowerShellInstance.Streams.Error)
                    {
                        Console.WriteLine($"PowerShell Error: {error}");
                        Logger.Log($"PowerShell Error while executing command : {command} Error : {error}");
                    }
                }
                else
                {
                    // loop through each output object item
                    foreach (PSObject outputItem in PSOutput)
                    {
                        // if null was dumped to the pipeline during the script, then a null object was added here
                        if (outputItem != null)
                        {
                            // to get the .NET type of the output item
                            Console.WriteLine(outputItem.BaseObject.GetType().FullName);

                            // to get the string representation of the output item
                            Console.WriteLine(outputItem.BaseObject.ToString() + "\n");
                        }
                    }
                }
            }
        }
        catch (Exception ex)
        {
            // Handle other exceptions
            Console.WriteLine($"An error occurred: {ex.Message}");
            Logger.Log($"PowerShell Error while executing command : {command} Error : {ex.Message}");
        }
    }
}