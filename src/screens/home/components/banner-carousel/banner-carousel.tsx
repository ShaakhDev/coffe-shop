import {spacing} from '@/theme';
import {useState} from 'react';
import {Dimensions, FlatList, View, ViewStyle} from 'react-native';
import {BannerCard} from './components';

const {width} = Dimensions.get('screen');

const carouselData = [
  {
    id: 1,
    image: require('assets/images/banner.webp'),
    link: 'https://google.com',
  },
  {
    id: 2,
    image: require('assets/images/banner.webp'),
    link: 'https://google.com',
  },
  {
    id: 3,
    image: require('assets/images/banner.webp'),
    link: 'https://google.com',
  },
  {
    id: 4,
    image: require('assets/images/banner.webp'),
    link: 'https://google.com',
  },
];

export const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View>
      <FlatList
        onScroll={event => {
          const contentOffsetX = event.nativeEvent.contentOffset.x;
          const index = Math.floor(
            Math.floor(contentOffsetX) / Math.floor(width),
          );
          setCurrentIndex(index);
        }}
        pagingEnabled
        data={carouselData}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={$bannerContainer}
        renderItem={({item}) => (
          <BannerCard image={item.image} link={item.link} />
        )}
      />
    </View>
  );
};

const $bannerContainer: ViewStyle = {
  width: width * 4,
  paddingHorizontal: spacing.md,
  gap: spacing.md * 2,
};
