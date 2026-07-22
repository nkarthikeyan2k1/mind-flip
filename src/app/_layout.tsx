import { ThemeContextProvider, useThemeContext } from "@/context/ThemeContext";
import { Slot } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeContextProvider>
        <SafeAreaView style={{flex: 1, backgroundColor: "#09090B"}}>
          <Slot />
        </SafeAreaView>
      </ThemeContextProvider>
    </SafeAreaProvider>
  );
}
