import {Text} from '@/components';
import {colors, spacing} from '@/theme';
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
      <View style={{paddingHorizontal: spacing.sm, paddingBottom: spacing.sm}}>
        <Text weight="bold" fontFamily="syne">
          {title}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text weight="medium">${price}</Text>
          <Pressable style={$arrowButton}>
            {/* @ts-ignore */}
            <Icon name="arrowright" color={colors.black} size={16} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const $itemCard: ViewStyle = {
  borderRadius: spacing.md,
  backgroundColor: colors.white,
  width: 170,
  overflow: 'hidden',
  marginHorizontal: spacing.xs,
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
  borderWidth: 0.5,
  borderColor: colors.gray3,
};
