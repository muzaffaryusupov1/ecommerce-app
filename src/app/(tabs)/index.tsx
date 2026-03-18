import CategoryItem from '@/components/category-item';
import { categoryData } from '@/constants/mockData';
import { BagIcon, ChevronDownIcon, SearchIcon } from '@assets/icons';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import { useRouter } from 'expo-router';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RadioGroup from 'react-native-radio-buttons-group';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
	const bottomSheetRef = useRef<BottomSheet>(null);
	const [activeCategories, setActiveCategories] = useState('');
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	const [selectedId, setSelectedId] = useState();

	const snapPoints = useMemo(() => ['25%', '60%'], []);

	const toggleBottomSheet = useCallback(() => {
		if (isOpen) {
			bottomSheetRef.current?.close(); // Closes the sheet
		} else {
			bottomSheetRef.current?.expand(); // Opens the sheet
		}
	}, [isOpen]);

	const handleSheetChange = useCallback((index: number) => {
		// index is -1 when closed, 0 or higher when open
		setIsOpen(index !== -1);
	}, []);

	const renderBackdrop = useCallback(
		props => <BottomSheetBackdrop {...props} disappearsOnIndex={1} appearsOnIndex={2} />,
		[],
	);

	const radioButtons = useMemo(
		() => [
			{
				id: '1',
				label: 'Men',
				value: 'men',
			},
			{
				id: '2',
				label: 'Women',
				value: 'women',
			},
		],
		[],
	);

	return (
		<GestureHandlerRootView className='flex-1'>
			<SafeAreaView className='flex-1 bg-bg-light-1 px-6 pt-3'>
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
							onPress={toggleBottomSheet}
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
				<BottomSheet
					ref={bottomSheetRef}
					index={-1}
					snapPoints={snapPoints}
					enablePanDownToClose={true}
					onChange={handleSheetChange}
					backdropComponent={renderBackdrop}
				>
					<BottomSheetView style={{ flex: 1, padding: 36, alignItems: 'center' }}>
						<RadioGroup
							radioButtons={radioButtons}
							onPress={setSelectedId}
							selectedId={selectedId}
						/>
					</BottomSheetView>
				</BottomSheet>
			</SafeAreaView>
		</GestureHandlerRootView>
	);
}
