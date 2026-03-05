import { useColorScheme } from '@/hooks/use-color-scheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import '../styles/global.css';

export const unstable_settings = {
	anchor: '(tabs)',
};

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const isDark = colorScheme === 'dark';

	return (
		<ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
			<Stack>
				<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
				<Stack.Screen name='modal' options={{ presentation: 'modal', title: 'Modal' }} />
			</Stack>
			<StatusBar style={isDark ? 'light' : 'dark'} />
		</ThemeProvider>
	);
}
