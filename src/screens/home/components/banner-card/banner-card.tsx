import {spacing} from '@/theme';
import {
  Dimensions,
  Image,
  ImageStyle,
  Linking,
  Pressable,
  ViewStyle,
} from 'react-native';

const {width} = Dimensions.get('screen');

type BannerCardProps = {
  image: any;
  link: string;
};

export const BannerCard = ({image, link}: BannerCardProps) => {
  const handlePress = async () => {
    try {
      await Linking.openURL(link);
    } catch (err) {
      console.log('Error opening link', err);
    }
  };
  return (
    <Pressable style={$card} onPress={handlePress}>
      <Image source={image} style={$image} resizeMode="contain" />
    </Pressable>
  );
};

const $card: ViewStyle = {
  width: width - spacing.md * 2,
  borderRadius: spacing.md,
  marginHorizontal: 'auto',
  alignItems: 'center',
  flexDirection: 'row',
  marginVertical: spacing.md,
};

const $image: ImageStyle = {
  width: '100%',
  height: 120,
};
