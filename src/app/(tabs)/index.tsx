import React from 'react';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
	return (
		<SafeAreaView>
			<Image source={require('@assets/images/avatar.jpg')} width={40} height={40} alt='avatar' />
		</SafeAreaView>
	);
}
