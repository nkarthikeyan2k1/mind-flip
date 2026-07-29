import Header from '@/components/GamesComponents/NumberMemory/Header';
import { useThemeContext } from '@/context/ThemeContext';
import { Stack } from 'expo-router'
import { View } from 'lucide-react-native';

const GamesLayout = () => {
    const { theme } = useThemeContext()

    const { background, primaryText } = theme;
  return (
    <Stack
    screenOptions={{
            animation: "ios_from_right",
            gestureDirection: "horizontal",
            headerTitleAlign: "center",
            headerBackButtonDisplayMode: "minimal",
            headerStyle: {
              backgroundColor: background,
            },
            headerTitleStyle: { color: primaryText, fontSize: 14 },
            headerTintColor: primaryText,   
            statusBarStyle: 'dark',
          }}
    >
        <Stack.Screen 
            name="number-memory"
            options={{
                header: () => <Header showBack={true} />
            }}
         />
    </Stack>
  )
}

export default GamesLayout