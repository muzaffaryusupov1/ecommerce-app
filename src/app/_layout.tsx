import { useEffect } from 'react';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import '../styles/global.css';

export const unstable_settings = {
	anchor: '(tabs)',
};

void SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const isDark = colorScheme === 'dark';

	const [fontsLoaded] = useFonts({
		Manrope: require('@assets/fonts/Manrope/static/Manrope-Regular.ttf'),
		'Manrope-Bold': require('@assets/fonts/Manrope/static/Manrope-Bold.ttf'),
		Gabarito: require('@assets/fonts/Gabarito/static/Gabarito-Regular.ttf'),
		'Gabarito-Bold': require('@assets/fonts/Gabarito/static/Gabarito-Bold.ttf'),
	});

	useEffect(() => {
		if (fontsLoaded) {
			void SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
			<GestureHandlerRootView className='flex-1'>
				<BottomSheetModalProvider>
					<Stack>
						<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
						<Stack.Screen name='modal' options={{ presentation: 'modal', title: 'Modal' }} />
					</Stack>
				</BottomSheetModalProvider>
				<StatusBar style={isDark ? 'light' : 'dark'} />
			</GestureHandlerRootView>
		</ThemeProvider>
	);
}
