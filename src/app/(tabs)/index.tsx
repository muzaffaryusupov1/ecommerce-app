import { BagIcon, ChevronDownIcon, SearchIcon } from '@assets/icons';
import BottomSheet, {
	BottomSheetModal,
	BottomSheetModalProvider,
	BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
	const bottomSheetRef = useRef<BottomSheet>(null);

	const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

	const handlePresentModalPress = useCallback(() => {
		bottomSheetRef.current?.present();
	}, []);

	return (
		<SafeAreaView className='flex-1 bg-bg-light-1 px-6 pt-3'>
			<GestureHandlerRootView>
				<BottomSheetModalProvider>
					<ScrollView>
						<View className='flex flex-row justify-between items-center'>
							<TouchableOpacity>
								<Image
									source={require('@assets/images/avatar.jpg')}
									width={40}
									height={40}
									alt='avatar'
									className='w-10 h-10 rounded-full'
								/>
							</TouchableOpacity>
							<TouchableOpacity
								className='rounded-full py-3 px-3.5 bg-bg-light-2 flex flex-row gap-1'
								onPress={handlePresentModalPress}
							>
								<Text className='font-second font-bold text-sm text-black-100'>Men</Text>
								<ChevronDownIcon size={16} />
							</TouchableOpacity>

							<TouchableOpacity className='w-10 h-10 bg-primary-100 justify-center items-center rounded-full'>
								<BagIcon size={18} color='#fff' strokeWidth={1.5} />
							</TouchableOpacity>
						</View>
						<View className='rounded-full bg-bg-light-2 flex flex-row items-center gap-3 px-5 mt-6'>
							<SearchIcon size={18} />
							<TextInput
								placeholder='Search'
								className='placeholder:font-second placeholder:text-base placeholder:font-normal placeholder:leading-[160%] placeholder:text-black-100 flex-1'
							/>
						</View>
					</ScrollView>
					<BottomSheetModal
						ref={bottomSheetRef}
						index={0} // Start at the first snap point (25% height)
						snapPoints={snapPoints}
					>
						<BottomSheetView>
							<View className='flex-1 w-full bg-bg-light-2 rounded-2xl'>
								<Text>Men</Text>
							</View>
							<View>
								<Text>Men</Text>
							</View>
						</BottomSheetView>
					</BottomSheetModal>
				</BottomSheetModalProvider>
			</GestureHandlerRootView>
		</SafeAreaView>
	);
}
