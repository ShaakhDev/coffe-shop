import {spacing} from '@/theme';
import {useState} from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import {BannerCard} from './components';

const {width, height} = Dimensions.get('screen');

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
        data={[1, 2, 4, 5]}
        keyExtractor={item => item.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          width: width * 4,
          paddingHorizontal: spacing.md,
          gap: spacing.md * 2,
        }}
        renderItem={({item}) => <BannerCard />}
      />
    </View>
  );
};
