import {Button, Text} from '@/components';
import {AppStackParamList} from '@/navigators';
import {colors, spacing} from '@/theme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Image, Pressable, View, ViewStyle} from 'react-native';

export const BookingSuccessScreen = ({
  navigation,
}: NativeStackScreenProps<AppStackParamList>) => {
  return (
    <View style={$container}>
      <View style={$imageWrapper}>
        <Image
          source={require('assets/images/success.png')}
          style={{width: '100%', height: '100%'}}
          resizeMode="contain"
        />
      </View>
      <Text
        size="xxl"
        fontFamily="syne"
        weight="bold"
        style={{textAlign: 'center'}}>
        Congratulation
      </Text>
      <Text style={{textAlign: 'center'}}>Your table book successfully</Text>
      <Pressable
        style={$detailsButton}
        onPress={() => navigation.navigate('BookingDetails')}>
        <Text size="xs" preset="secondaryText" weight="semiBold">
          View booking details
        </Text>
      </Pressable>
      <Button
        style={{marginTop: spacing.xxl}}
        onPress={() => navigation.navigate('BottomTab')}>
        Go to Home Page
      </Button>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: spacing.md,
};
const $imageWrapper: ViewStyle = {
  width: 100,
  height: 100,
};
const $detailsButton: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.xs,
  marginTop: spacing.xxl,
  // backgroundColor: 'lightgray',
  borderRadius: spacing.xs,
  borderWidth: 0.5,
  borderColor: colors.gray1,
};
