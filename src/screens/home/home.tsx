import {spacing} from '@/theme';
import {ScrollView, ViewStyle} from 'react-native';
import {
  BannerCard,
  BannerCarousel,
  CategoriedItems,
  Favorites,
  HomeHeader,
  HomeSearch,
  RecommendedItems,
  SectionTitle,
} from './components';

export const HomeScreen = () => {
  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={[$container]}>
      <HomeHeader />
      <HomeSearch />
      <BannerCarousel />
      <CategoriedItems />
      <BannerCard
        image={require('assets/images/discount-banner.webp')}
        link="https://google.com"
      />
      <SectionTitle title="Customer favourite" onPress={() => {}} />
      <Favorites />
      <BannerCard
        image={require('assets/images/discount-banner.webp')}
        link="https://google.com"
      />
      <SectionTitle title="Recommended for you" onPress={() => {}} />
      <RecommendedItems />
    </ScrollView>
  );
};

const $container: ViewStyle = {
  paddingVertical: spacing.md,
};
