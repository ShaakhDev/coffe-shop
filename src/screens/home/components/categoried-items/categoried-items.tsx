import {categoriedItems} from '@/constants';
import {FlatList, View} from 'react-native';
import {Item} from './item';
import {spacing} from '@/theme';

export const CategoriedItems = () => {
  return (
    <View>
      <FlatList
        data={categoriedItems}
        contentContainerStyle={{
          paddingHorizontal: spacing.md,
          // marginVertical: spacing.md,
          gap: spacing.md,
        }}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Item {...item} />}
      />
    </View>
  );
};
