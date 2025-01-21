import {Text} from '@/components';
import {spacing} from '@/theme';
import {Image, ImageStyle, View, ViewStyle} from 'react-native';

type TCartItem = {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
  size: string;
  roasting: string;
};

type CartItemProps = {
  item: TCartItem;
};

export const CartItem = ({item}: CartItemProps) => {
  const image = typeof item.image === 'string' ? {uri: item.image} : item.image;
  return (
    <View style={$cartItem}>
      <Image source={image} resizeMode="cover" style={$cartItemImage} />
      <View style={$content}>
        <View>
          <Text weight="semiBold">{item.title}</Text>
          <Text size="xxs" preset="secondaryText">
            Size:{item.size} | Roasting: {item.roasting}
          </Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text weight="semiBold">${item.price}</Text>
          <Text size="xxs" preset="secondaryText">
            {item.quantity} cups
          </Text>
        </View>
      </View>
    </View>
  );
};

const $cartItem: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'flex-start',
  paddingVertical: spacing.sm,
  borderBottomWidth: 0.5,
  borderBottomColor: 'rgba(0,0,0,0.1)',
  gap: spacing.sm,
};
const $cartItemImage: ImageStyle = {
  width: 66,
  height: 66,
  borderRadius: spacing.xs,
};
const $content: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
};
