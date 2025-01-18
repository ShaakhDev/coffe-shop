import {Text} from '@/components';
import {colors, spacing} from '@/theme';
import {hexToRgb} from '@/utils';
import {Pressable} from 'react-native';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

type ItemProps = {
  id: number;
  title: string;
  image: ImageSourcePropType;
  price: number;
};

export const Item = ({id, image, price, title}: ItemProps) => {
  return (
    <View style={$itemCard}>
      <View style={$imageWrapper}>
        <Image source={image} style={$image} />
      </View>
      <Text weight="bold" fontFamily="syne">
        {title}
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text weight="medium" style={{color: colors.error}}>
          ${price}
        </Text>
        <Pressable style={$arrowButton}>
          {/* @ts-ignore */}
          <Icon name="arrowright" color={colors.black} size={20} />
        </Pressable>
      </View>
    </View>
  );
};
const $itemCard: ViewStyle = {
  borderRadius: spacing.md,
  padding: spacing.md,
  backgroundColor: hexToRgb(colors.lightGreen, 0.2),
  width: 170,
};
const $imageWrapper: ViewStyle = {
  height: 140,
  backgroundColor: colors.white,
  borderRadius: spacing.md,
  marginBottom: spacing.md,
};
const $image: ImageStyle = {
  width: '100%',
  height: '100%',
};
const $arrowButton: ViewStyle = {
  padding: spacing.xxs,
  backgroundColor: colors.white,
  borderRadius: spacing.xs,
  justifyContent: 'center',
  alignItems: 'center',
};
