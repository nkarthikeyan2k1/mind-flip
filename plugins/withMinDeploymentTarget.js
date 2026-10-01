const { withDangerousMod } = require("expo/config-plugins");
const fs = require("fs");
const path = require("path");

/**
 * Config plugin: enforce a minimum iOS deployment target on ALL pods.
 * This is needed because react-native-svg 15+ requires iOS 15.0+,
 * but some transitive pods may declare a lower minimum (e.g. 12.4).
 *
 * This fix survives `npx expo prebuild --clean` because it is applied
 * by Expo's plugin system during every prebuild.
 */
const withMinDeploymentTarget = (config, { minVersion = "16.4" } = {}) => {
  return withDangerousMod(config, [
    "ios",
    async (config) => {
      const podfilePath = path.join(
        config.modRequest.platformProjectRoot,
        "Podfile"
      );

      let contents = fs.readFileSync(podfilePath, "utf-8");

      const patch = `
    # [withMinDeploymentTarget plugin] Enforce minimum iOS deployment target for all pods
    installer.pods_project.targets.each do |target|
      target.build_configurations.each do |config|
        current = config.build_settings['IPHONEOS_DEPLOYMENT_TARGET']
        if current && current.to_f < ${minVersion}
          config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = '${minVersion}'
        end
      end
    end`;

      // Only patch once — avoid duplicating on repeated prebuilds
      if (!contents.includes("[withMinDeploymentTarget plugin]")) {
        // Insert the patch just before the closing of post_install block
        contents = contents.replace(
          /(\s*react_native_post_install\([^)]+\)\s*\n)/,
          `$1${patch}\n`
        );
        fs.writeFileSync(podfilePath, contents);
      }

      return config;
    },
  ]);
};

module.exports = withMinDeploymentTarget;
