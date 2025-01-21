import {categoriedItems} from '@/constants';
import {FlatList, ViewStyle} from 'react-native';
import {Item} from './item';
import {spacing} from '@/theme';

export const FavoriteList = () => {
  return (
    <FlatList
      numColumns={2}
      data={categoriedItems}
      contentContainerStyle={$container}
      keyExtractor={item => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <Item {...item} />}
    />
  );
};
const $container: ViewStyle = {
  marginVertical: spacing.xs,
  alignItems: 'center',
  gap: spacing.md,
};
