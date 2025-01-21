import {$shadow, colors, spacing} from '@/theme';
import {ScrollView, View, ViewStyle} from 'react-native';
import {CartItem} from './components';
import {Button, Text} from '@/components';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {TabParamList} from 'src/navigators/tab-navigator';
import {AppStackParamList} from '@/navigators';

const cartData = [
  /// items count 4
  {
    id: 1,
    title: 'Cappucino',
    price: 12.99,
    quantity: 1,
    size: 'M',
    roasting: 'Medium',
    image: require('assets/images/item.webp'),
  },
  {
    id: 2,
    title: 'Espresso',
    price: 10.99,
    quantity: 1,
    size: 'M',
    roasting: 'Medium',
    image: require('assets/images/item.webp'),
  },
  {
    id: 3,
    title: 'Latte',
    price: 14.99,
    quantity: 1,
    size: 'M',
    roasting: 'Medium',
    image: require('assets/images/item.webp'),
  },
  {
    id: 4,
    title: 'Americano',
    price: 9.99,
    quantity: 1,
    size: 'M',
    roasting: 'Medium',
    image: require('assets/images/item.webp'),
  },
];

export const CartScreen = ({
  navigation,
}: BottomTabScreenProps<TabParamList & AppStackParamList>) => {
  const handleContinue = () => {
    navigation.navigate('Booking');
  };
  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={$container}>
      {cartData?.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <View style={$bottomContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text preset="secondaryText" weight="medium">
            Promo code
          </Text>
          <Text weight="semiBold">Apply on order</Text>
        </View>
        <View style={$separator} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text preset="secondaryText" weight="medium">
            Total amount
          </Text>
          <Text weight="semiBold">$210</Text>
        </View>
        <Button onPress={handleContinue} style={{marginTop: spacing.md}}>
          Continue
        </Button>
      </View>
    </ScrollView>
  );
};

const $container: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.md,
};
const $bottomContainer: ViewStyle = {
  marginTop: 100,
  padding: spacing.md,
  borderRadius: spacing.xs,
  marginBottom: spacing.md,
  backgroundColor: colors.white,
  ...$shadow,
};
const $separator: ViewStyle = {
  height: 1,
  backgroundColor: 'rgba(0,0,0,0.2)',
  marginVertical: spacing.sm,
};
