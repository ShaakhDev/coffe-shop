import {BaseBottomSheet, Text} from '@/components';
import {colors, spacing} from '@/theme';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {RefObject} from 'react';
import {Pressable, View, ViewStyle} from 'react-native';

type ParticipantsBottomSheetProps = {
  bottomSheetRef: RefObject<BottomSheetModal>;
  onSelect: (count: string) => void;
  selectedValue: string;
};

export const ParticipantsBottomSheet = ({
  bottomSheetRef,
  onSelect,
  selectedValue,
}: ParticipantsBottomSheetProps) => {
  return (
    <BaseBottomSheet bottomSheetRef={bottomSheetRef} snap={['50%']}>
      <View style={$container}>
        {Array.from({length: 5})?.map((_, index) => (
          <Pressable
            onPress={() => onSelect((index + 1).toString())}
            key={index}
            style={[
              $item,
              selectedValue === `${index + 1}` ? $selectedValueBg : {},
            ]}>
            <Text>{index + 1} person</Text>
          </Pressable>
        ))}
      </View>
    </BaseBottomSheet>
  );
};

const $container: ViewStyle = {
  padding: spacing.md,
};

const $item: ViewStyle = {
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.sm,
};
const $selectedValueBg: ViewStyle = {
  borderRadius: spacing.xs,
  backgroundColor: colors.gray4,
};
