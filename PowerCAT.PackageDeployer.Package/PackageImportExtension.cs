using System;
using System.ComponentModel.Composition;
using Microsoft.Xrm.Tooling.PackageDeployment.CrmPackageExtentionBase;
using PowerCAT.PackageDeployer.Package.Resources;

namespace PowerCAT.PackageDeployer.Package
{
    /// <summary>
    /// Import package starter frame.
    /// </summary>
    [Export(typeof(IImportExtensions))]
    public class PackageImportExtension : ImportExtension
    {
        #region Metadata

        /// <summary>
        /// Folder name where package assets are located in the final output package zip.
        /// </summary>
        public override string GetImportPackageDataFolderName => "PkgAssets";

        /// <summary>
        /// Name of the Import Package to Use
        /// </summary>
        /// <param name="plural">if true, return plural version</param>
        public override string GetNameOfImport(bool plural) => "powercat-creator-kit";

        /// <summary>
        /// Long name of the Import Package.
        /// </summary>
        public override string GetLongNameOfImport => "PowerCATPackage";

        /// <summary>
        /// Description of the package, used in the package selection UI
        /// </summary>
        public override string GetImportPackageDescriptionText => "PowerCATPackage";

        #endregion

        #region Props
        public string ProjectName { get; set; }
        public string ProjectConfigsettings { get; set; }
        #endregion Props

        /// <summary>
        /// Called to Initialize any functions in the Custom Extension.
        /// </summary>
        /// <see cref="ImportExtension.InitializeCustomExtension"/>
        public override void InitializeCustomExtension()
        {
            ProjectName = GetImportName(false);
            Console.WriteLine($"Current Package Name : {ProjectName}");
            Console.WriteLine($"Reading project settings from resx file");
            ProjectConfigsettings = ConfigSettings.ResourceManager.GetString(ProjectName);

            if (string.IsNullOrEmpty(ProjectConfigsettings))
            {
                Console.WriteLine($"Project Config settings not found for {ProjectName}");
                return;
            }
            else
            {
                Console.WriteLine($"Project Config settings found for {ProjectName}");
            }

            Console.WriteLine("Installing packages, if specified any...");
            InstallPreReqPackages();
            Console.WriteLine("Updating pre deployment settings, if specified any...");
            ProcessPreDeploymentSettings();
        }

        /// <summary>
        /// Called before the Main Import process begins, after solutions and data.
        /// </summary>
        /// <see cref="ImportExtension.BeforeImportStage"/>
        /// <returns></returns>
        public override bool BeforeImportStage()
        {
            return true;
        }

        /// <summary>
        /// Raised before the named solution is imported to allow for any configuration settings to be made to the import process
        /// </summary>
        /// <see cref="ImportExtension.PreSolutionImport"/>
        /// <param name="solutionName">name of the solution about to be imported</param>
        /// <param name="solutionOverwriteUnmanagedCustomizations">Value of this field from the solution configuration entry</param>
        /// <param name="solutionPublishWorkflowsAndActivatePlugins">Value of this field from the solution configuration entry</param>
        /// <param name="overwriteUnmanagedCustomizations">If set to true, imports the Solution with Override Customizations enabled</param>
        /// <param name="publishWorkflowsAndActivatePlugins">If set to true, attempts to auto publish workflows and activities as part of solution deployment</param>
        public override void PreSolutionImport(string solutionName, bool solutionOverwriteUnmanagedCustomizations, bool solutionPublishWorkflowsAndActivatePlugins, out bool overwriteUnmanagedCustomizations, out bool publishWorkflowsAndActivatePlugins)
        {
            Console.WriteLine($"PreSolutionImport : {solutionName}");
            Console.WriteLine($"Project Name : {ProjectName}");
            base.PreSolutionImport(solutionName, solutionOverwriteUnmanagedCustomizations, solutionPublishWorkflowsAndActivatePlugins, out overwriteUnmanagedCustomizations, out publishWorkflowsAndActivatePlugins);
        }

        /// <summary>
        /// Called during a solution upgrade when both solutions, old and new, are present in the system.
        /// This function can be used to provide a means to do data transformation or upgrade while a solution update is occurring.
        /// </summary>
        /// <see cref="ImportExtension.RunSolutionUpgradeMigrationStep"/>
        /// <param name="solutionName">Name of the solution</param>
        /// <param name="oldVersion">version number of the old solution</param>
        /// <param name="newVersion">Version number of the new solution</param>
        /// <param name="oldSolutionId">Solution ID of the old solution</param>
        /// <param name="newSolutionId">Solution ID of the new solution</param>
        public override void RunSolutionUpgradeMigrationStep(string solutionName, string oldVersion, string newVersion, Guid oldSolutionId, Guid newSolutionId)
        {
            base.RunSolutionUpgradeMigrationStep(solutionName, oldVersion, newVersion, oldSolutionId, newSolutionId);
        }

        /// <summary>
        /// Called After all Import steps are complete, allowing for final customizations or tweaking of the instance.
        /// </summary>
        /// <see cref="ImportExtension.AfterPrimaryImport"/>
        /// <returns></returns>
        public override bool AfterPrimaryImport()
        {
            Console.WriteLine("AfterPrimaryImport");
            Console.WriteLine("Updating post deployment settings, if specified any...");
            ProcessPostDeploymentSettings();
            Console.WriteLine("Updating flow settings, if specified any...");
            ProcessFlows();
            return true;
        }

        /// <summary>
        /// Installs packages using the Power Platform CLI (pac) for the specified environment and package names.
        /// </summary>
        private void InstallPreReqPackages()
        {
            var packageNames = JsonUtility.ReadPackages(ProjectConfigsettings);

            if (packageNames != null)
            {
                var environmentId = CrmSvc.EnvironmentId;

                Console.WriteLine($"environmentId - {environmentId}");

                if (!string.IsNullOrEmpty(environmentId))
                {
                    var installer = new PacPackagesInstaller(environmentId, PackageLog);

                    foreach (var packageName in packageNames)
                    {
                        Console.WriteLine($"Installing package - {packageName}");
                        installer.InstallPackage(packageName);
                    }
                }
                else
                {
                    Console.WriteLine("EnvironmentId is null. Skipping package installation.");
                    PackageLog.Log("EnvironmentId is null. Skipping package installation.");
                }
            }
            else
            {
                Console.WriteLine("No packages to install");
                PackageLog.Log("No packages to install");
            }
        }

        /// <summary>
        /// Processes PostDeploymentSettings from a JSON file for a given project and updates organization settings.
        /// </summary>
        private void ProcessPostDeploymentSettings()
        {
            var preDeploymentSettings = JsonUtility.ReadPostDeploymentSettings(ProjectConfigsettings);

            if (preDeploymentSettings != null)
            {
                Console.WriteLine($"PostDeploymentSettings for {ProjectName}:");

                var organizationSettingsUpdater = new OrganizationSettingsUpdater(CrmSvc);

                foreach (var setting in preDeploymentSettings)
                {
                    Console.WriteLine($"Updating Key : {setting.Key} Value: {setting.Value}");
                    organizationSettingsUpdater.UpdateOrganizationSettings(setting.Key, setting.Value);
                }
            }
            else
            {
                Console.WriteLine($"Project with name '{ProjectName}' or PostDeploymentSettings not found.");
            }
        }

        /// <summary>
        /// Processes PostDeploymentSettings from a JSON file for a given project and updates organization settings.
        /// </summary>
        private void ProcessFlows()
        {
            try
            {
                JsonUtility.UpdateFlowConfigurations(ProjectConfigsettings, CrmSvc);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error while processing flows: {ex.Message}");
            }
        }

        /// <summary>
        /// Processes PreDeploymentSettings from a JSON file for a given project and updates organization settings.
        /// </summary>
        private void ProcessPreDeploymentSettings()
        {
            var preDeploymentSettings = JsonUtility.ReadPreDeploymentSettings(ProjectConfigsettings);

            if (preDeploymentSettings != null)
            {
                Console.WriteLine($"PreDeploymentSettings for {ProjectName}:");

                var organizationSettingsUpdater = new OrganizationSettingsUpdater(CrmSvc);

                foreach (var setting in preDeploymentSettings)
                {
                    Console.WriteLine($"Updating Key : {setting.Key} Value: {setting.Value}");
                    organizationSettingsUpdater.UpdateOrganizationSettings(setting.Key, setting.Value);
                }
            }
            else
            {
                Console.WriteLine($"Project with name '{ProjectName}' or PreDeploymentSettings not found.");
            }
        }
    }
}
