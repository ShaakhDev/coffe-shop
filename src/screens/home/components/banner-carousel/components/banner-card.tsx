import {Button, Text} from '@/components';
import {colors, spacing} from '@/theme';
import {
  Dimensions,
  Image,
  Pressable,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

const {width} = Dimensions.get('screen');

export const BannerCard = () => {
  return (
    <View style={$card}>
      <View style={{alignItems: 'flex-start'}}>
        <Text weight="extraBold" fontFamily="syne" size="xl" style={$whiteText}>
          20%
        </Text>
        <Text weight="extraBold" fontFamily="syne" size="xl" style={$whiteText}>
          Discount
        </Text>
        <Text size="xs" style={$whiteText}>
          On your first purchase
        </Text>
        <Pressable style={$showNowButton}>
          <Text size="xxs" style={$whiteText} weight="semiBold">
            Shop now
          </Text>
        </Pressable>
      </View>
      <View style={$imageWrapper}>
        <Image
          resizeMode="cover"
          source={require('assets/images/banner-card-image.webp')}
          style={{width: '100%', height: '100%'}}
        />
      </View>
    </View>
  );
};

const $card: ViewStyle = {
  width: width - 32,
  padding: spacing.md,
  borderRadius: spacing.md,
  alignItems: 'center',
  backgroundColor: colors.lightGreen,
  flexDirection: 'row',
};

const $whiteText: TextStyle = {
  color: colors.white,
};
const $showNowButton: ViewStyle = {
  backgroundColor: colors.darkGreen,
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: spacing.xs,
  paddingHorizontal: spacing.md,
  marginTop: spacing.sm,
  borderRadius: spacing.sm,
};
const $imageWrapper: ViewStyle = {
  position: 'absolute',
  right: 0,
  flex: 1,
  width: width / 3.5,
  height: width / 2,
  overflow: 'hidden',
  borderRadius: spacing.md,
};
