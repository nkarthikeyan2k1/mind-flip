import { ConfigContext, ExpoConfig } from "expo/config";

const APP_ENV = process.env.app_env ?? "development";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "mind-flip",
  slug: "mind-flip",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "mindflip",
  userInterfaceStyle: "automatic",
  ios: {
    deploymentTarget: "16.4",
    icon: "./assets/expo.icon",
    bundleIdentifier: "com.karthikeyan.mindflip",
    infoPlist: {
      UIViewControllerBasedStatusBarAppearance: true,
      LSApplicationQueriesSchemes: ["whatsapp", "tel"],
      ITSAppUsesNonExemptEncryption: false,
      NSAppTransportSecurity: {
        NSExceptionDomains: {
          "local.com": {
            NSIncludesSubdomains: true,
            NSExceptionAllowsInsecureHTTPLoads: true,
          },
        },
      },
    },
  },
  android: {
    adaptiveIcon: {
      backgroundColor: "#E6F4FE",
      foregroundImage: "./assets/images/android-icon-foreground.png",
      backgroundImage: "./assets/images/android-icon-background.png",
      monochromeImage: "./assets/images/android-icon-monochrome.png",
    },
    package: "com.karthikeyan.mindflip",
    predictiveBackGestureEnabled: false,
  },
  web: {
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    "expo-audio",
    [
      "expo-splash-screen",
      {
        backgroundColor: "#09090B",
        image: "./assets/mind-flip.png",
        imageWidth: 170,
        resizeMode: "contain",
        dark: {
          backgroundColor: "#09090B",
        },
      },
    ],
    // Ensures all pods meet the minimum iOS 15.0 deployment target (required by react-native-svg 15+)
    ["./plugins/withMinDeploymentTarget", { minVersion: "15.0" }],
  ],
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
  extra: {
    router: {},
    appEnv: APP_ENV,
    eas: {
      owner: "ig_karthi",
      projectId: "01802571-a568-4e12-83c1-5da71ca3fe4d",
    },
  },
});
