import {spacing} from '@/theme';
import {Platform, ScrollView, ViewStyle} from 'react-native';
import {
  BannerCard,
  BannerCarousel,
  CategoriedItems,
  HomeHeader,
  HomeSearch,
} from './components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  return (
    <ScrollView
      style={{flex: 1}}
      contentContainerStyle={[
        $container,
        Platform.OS === 'ios' && {paddingTop: top},
      ]}>
      {/* Home header */}
      <HomeHeader />
      {/* Search bar */}
      <HomeSearch />
      {/* Banner carousel */}
      <BannerCarousel />
      <CategoriedItems />
      {/* BAnner */}
      <BannerCard />
      {/* Favorite coffes */}
      {/* BAnner */}
      <BannerCard />
      {/* Recommended items */}
    </ScrollView>
  );
};

const $container: ViewStyle = {
  // paddingHorizontal: spacing.md,
  paddingVertical: spacing.md,
};
