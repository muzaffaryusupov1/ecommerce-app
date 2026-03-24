import CategoryItem from '@/components/category-item';
import { categoryData } from '@/constants/mockData';
import { BagIcon, ChevronDownIcon, SearchIcon } from '@assets/icons';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { useRouter } from 'expo-router';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const genderOptions = [
	{
		id: 'men',
		label: 'Men',
		description: 'Products and styles for men',
	},
	{
		id: 'women',
		label: 'Women',
		description: 'Products and styles for women',
	},
] as const;

type GenderOptionId = (typeof genderOptions)[number]['id'];

export default function HomeScreen() {
	const bottomSheetRef = useRef<BottomSheetModal>(null);
	const [activeCategories, setActiveCategories] = useState('');
	const [selectedGender, setSelectedGender] = useState<GenderOptionId>('men');
	const router = useRouter();

	const snapPoints = useMemo(() => ['34%'], []);
	const selectedLabel = genderOptions.find(option => option.id === selectedGender)?.label ?? 'Men';

	const toggleBottomSheet = useCallback(() => {
		bottomSheetRef.current?.present();
	}, []);

	const handleSelectGender = useCallback((value: GenderOptionId) => {
		setSelectedGender(value);
		bottomSheetRef.current?.close();
	}, []);

	const renderBackdrop = useCallback(
		props => (
			<BottomSheetBackdrop
				{...props}
				disappearsOnIndex={-1}
				appearsOnIndex={0}
				opacity={0.35}
				pressBehavior='close'
			/>
		),
		[],
	);

	return (
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
						className='rounded-full py-3 px-3.5 bg-bg-light-2 flex flex-row gap-1 items-center'
						onPress={toggleBottomSheet}
					>
						<Text className='font-second font-bold text-sm text-black-100'>{selectedLabel}</Text>
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
				index={0}
				snapPoints={snapPoints}
				enablePanDownToClose={true}
				backdropComponent={renderBackdrop}
				handleIndicatorStyle={{ backgroundColor: '#D4D4D8', width: 44 }}
				backgroundStyle={{
					backgroundColor: '#FFFFFF',
					borderTopLeftRadius: 32,
					borderTopRightRadius: 32,
				}}
			>
				<BottomSheetView style={{ paddingHorizontal: 24, paddingTop: 12, paddingBottom: 28 }}>
					<Text className='font-second font-bold text-lg text-black-100'>Choose style</Text>
					<Text className='font-second text-sm text-black-100 mt-1 opacity-60'>
						Select the section you want to explore.
					</Text>
					<View className='mt-5 gap-3'>
						{genderOptions.map(option => {
							const isSelected = option.id === selectedGender;

							return (
								<TouchableOpacity
									key={option.id}
									onPress={() => handleSelectGender(option.id)}
									className={`rounded-[24px] border px-4 py-4 flex-row items-center justify-between ${
										isSelected
											? 'border-primary-100 bg-primary-100/10'
											: 'border-black/10 bg-bg-light-2'
									}`}
								>
									<View>
										<Text className='font-second font-bold text-base text-black-100'>
											{option.label}
										</Text>
										<Text className='font-second text-sm text-black-100 opacity-60 mt-1'>
											{option.description}
										</Text>
									</View>
									<View
										className={`w-6 h-6 rounded-full border items-center justify-center ${
											isSelected ? 'border-primary-100' : 'border-black/20'
										}`}
									>
										{isSelected ? <View className='w-3 h-3 rounded-full bg-primary-100' /> : null}
									</View>
								</TouchableOpacity>
							);
						})}
					</View>
				</BottomSheetView>
			</BottomSheetModal>
		</SafeAreaView>
	);
}
