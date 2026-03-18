import CategoryItem from '@/components/category-item';
import { categoryData } from '@/constants/mockData';
import { BagIcon, ChevronDownIcon, SearchIcon } from '@assets/icons';
import BottomSheet, {
	BottomSheetModal,
	BottomSheetModalProvider,
	BottomSheetView,
} from '@gorhom/bottom-sheet';
import { useRouter } from 'expo-router';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
	const bottomSheetRef = useRef<BottomSheet>(null);
	const [activeCategories, setActiveCategories] = useState('');
	const router = useRouter();

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
							<TouchableOpacity onPress={() => router.navigate('/profile')}>
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
						{/* Categories */}
						<View>
							<View className='mt-6 flex flex-row items-center justify-between'>
								<Text className='font-second font-bold text-base text-black-100'>Categories</Text>
								<TouchableOpacity>
									<Text className='font-[450] text-base text-black-100'>See All</Text>
								</TouchableOpacity>
							</View>
							<View className='mt-4'>
								<FlatList
									data={categoryData}
									renderItem={({ item }) => (
										<CategoryItem
											item={item}
											setActiveCategories={setActiveCategories}
											activeCategories={activeCategories}
										/>
									)}
									keyExtractor={item => item.id}
									horizontal={true}
									contentContainerClassName='gap-3.5'
									showsHorizontalScrollIndicator={false}
								/>
							</View>
						</View>
						<View>
							<View className='mt-6 flex flex-row items-center justify-between'>
								<Text className='font-second font-bold text-base text-black-100'>Top Selling</Text>
								<TouchableOpacity>
									<Text className='font-[450] text-base text-black-100'>See All</Text>
								</TouchableOpacity>
							</View>
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
