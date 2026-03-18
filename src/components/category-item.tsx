import { Image, Text, View } from 'react-native';

const CategoryItem = item => {
	const data = item.item;
	return (
		<View className='flexm flex-col max-w-20 gap-1.5 items-center'>
			<Image
				source={data.imagePath}
				width={60}
				height={60}
				alt='category-image'
				className='w-[60px] h-[60px] object-cover'
			/>
			<Text className='text-black-100 font-normal leading-[160%] text-xs text-center'>
				{data.title}
			</Text>
		</View>
	);
};

export default CategoryItem;
