import {Button, Text} from '@/components';
import {AppStackParamList} from '@/navigators';
import {colors, spacing} from '@/theme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Pressable, Share, View, ViewStyle} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

export const BookingDetailsScreen = ({
  navigation,
}: NativeStackScreenProps<AppStackParamList>) => {
  const handleShare = async () => {
    try {
      await Share.share({
        message: 'Your table booking is confirmed',
      });
    } catch (error) {
      console.log(error);
    }
  };
  // Share
  return (
    <View style={$container}>
      <View style={$tableContainer}>
        <View style={$tableHeader}>
          <Text size="lg" weight="semiBold" fontFamily="syne">
            Table Book
          </Text>
          <Text preset="secondaryText">Booked on 20th Dec, 2023</Text>
        </View>
        <View style={$tableBody}>
          <Row label="Participants:" value="4 person" />
          <View style={$separator} />
          <Row label="Time:" value="1:00 pm" />
          <View style={$separator} />
          <Row label="Date:" value="10th Jan, 2024" />
          <View style={$separator} />
          <Row label="Table NO:" value="23" />
          <View style={$separator} />
          {/* <View style={$separator} /> */}
          <Row label="Booking Status:" value="Confirmed" />
        </View>
      </View>
      <Pressable style={$detailsButton} onPress={handleShare}>
        {/* @ts-ignore */}
        <IonIcons
          name="share-social-outline"
          size={18}
          color={colors.textDim}
        />
        <Text size="xs" preset="secondaryText" weight="semiBold">
          Share status
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

const Row = ({label, value}: {label: string; value: string}) => {
  return (
    <View style={$row}>
      <Text>{label}</Text>
      <Text weight="semiBold">{value}</Text>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: spacing.md,
};

const $detailsButton: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.xs,
  marginTop: spacing.xxl,
  borderRadius: spacing.xs,
  borderWidth: 0.5,
  borderColor: colors.gray1,
  flexDirection: 'row',
  alignItems: 'center',
  gap: spacing.sm,
};
const $tableContainer: ViewStyle = {
  width: '100%',
  borderWidth: 0.5,
  borderColor: 'rgba(0,0,0,0.3)',
  borderRadius: spacing.xs,
  marginBottom: spacing.xl,
  overflow: 'hidden',
};
const $tableHeader: ViewStyle = {
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.1)',
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.md,
};
const $tableBody: ViewStyle = {
  padding: spacing.md,
};
const $row: ViewStyle = {
  flexDirection: 'row',
  paddingVertical: spacing.md,
  justifyContent: 'space-between',
};

const $separator: ViewStyle = {
  height: 1,
  backgroundColor: 'rgba(0,0,0,0.2)',
};
