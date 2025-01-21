import {categoriedItems} from '@/constants';
import {FlatList, ViewStyle} from 'react-native';
import {Item} from './item';
import {spacing} from '@/theme';

export const RecommendedItems = () => {
  return (
    <FlatList
      data={categoriedItems}
      contentContainerStyle={$container}
      keyExtractor={item => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <Item {...item} />}
    />
  );
};
const $container: ViewStyle = {
  paddingHorizontal: spacing.md,
  marginVertical: spacing.xs,
  gap: spacing.md,
};
