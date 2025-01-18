import {TextField} from '@/components';
import {colors, spacing} from '@/theme';
import {Pressable, View, ViewStyle} from 'react-native';
import {hexToRgb} from '@/utils';
import Icon from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';

export const HomeSearch = () => {
  return (
    <View style={{paddingHorizontal: spacing.md}}>
      <TextField
        LeftAccessory={() => (
          // @ts-ignore
          <Icon
            name="search1"
            size={20}
            color={colors.gray1}
            style={{marginLeft: spacing.sm}}
          />
        )}
        RightAccessory={() => (
          <Pressable style={$filterButton}>
            {/* @ts-ignore */}
            <IonIcons name="options" size={20} color={colors.white} />
          </Pressable>
        )}
        placeholder="Search for coffee"
        inputWrapperStyle={$searchWrapper}
      />
    </View>
  );
};
const $searchWrapper: ViewStyle = {
  backgroundColor: hexToRgb(colors.white, 0.6),
  borderWidth: 0.5,
  borderColor: colors.commonBorder,
  alignItems: 'center',
  marginVertical: spacing.md,
  borderRadius: spacing.md,
};
const $filterButton: ViewStyle = {
  padding: spacing.xs,
  backgroundColor: colors.brown,
  borderRadius: spacing.xs,
  marginRight: spacing.sm,
};
