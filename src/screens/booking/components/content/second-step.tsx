import {
  Button,
  DatePickerComponent,
  DatePickerTrigger,
  SelectTrigger,
  Text,
} from '@/components';
import {colors, spacing} from '@/theme';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useRef, useState} from 'react';
import {ScrollView, View, ViewStyle} from 'react-native';
import {ParticipantsBottomSheet} from '../participants-bottom-sheet';
import {Timebox} from '../time-box';
import {Controller, FieldValues, SubmitHandler, useForm} from 'react-hook-form';

type SecondStepProps = {
  onNext: () => void;
};
// each time item should be an object with time and id
const availableTimes = [
  {time: '10:00 AM', id: '1'},
  {time: '11:00 AM', id: '2'},
  {time: '12:00 PM', id: '3'},
  {time: '01:00 PM', id: '4'},
  {time: '02:00 PM', id: '5'},
  {time: '03:00 PM', id: '6'},
  {time: '04:00 PM', id: '7'},
  {time: '05:00 PM', id: '8'},
  {time: '06:00 PM', id: '9'},
  {time: '07:00 PM', id: '10'},
];
export const SecondStep = ({onNext}: SecondStepProps) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const {
    control,
    setValue,
    watch,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSelectPress = () => {
    bottomSheetRef.current?.present();
  };

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    console.log(data);
  };

  const handleNextPress = () => {
    handleSubmit(onSubmit)();
    // onNext();
  };
  console.log(errors);
  return (
    <>
      <DatePickerComponent
        onConfirm={date => {
          setValue('date', date);
          setShowDatePicker(false);
        }}
        showDatePicker={showDatePicker}
        value={watch('date')}
        onCancel={() => setShowDatePicker(false)}
      />
      <ParticipantsBottomSheet
        bottomSheetRef={bottomSheetRef}
        onSelect={value => setValue('participants', value)}
        selectedValue={watch('participants')}
      />
      <View>
        <View style={$container}>
          <Text
            style={{textAlign: 'left'}}
            size="lg"
            weight="bold"
            fontFamily="syne">
            Billing info
          </Text>
          <Text size="xs" preset="secondaryText">
            Please enter your booking date & time
          </Text>

          <View style={{gap: spacing.md, marginTop: spacing.xxl}}>
            <Controller
              rules={{required: 'Participants is required'}}
              control={control}
              name="participants"
              render={({field: {value}}) => (
                <SelectTrigger
                  label="Participants"
                  onSelectPress={handleSelectPress}>
                  <Text
                    style={{
                      color: !value ? colors.textDim : colors.text,
                    }}>
                    {value || 'Participants'}
                    {value && ' person'}
                  </Text>
                </SelectTrigger>
              )}
            />
            <Text weight="semiBold" preset="secondaryText">
              Time
            </Text>
            <ScrollView horizontal>
              {availableTimes?.map(time => (
                <Timebox
                  time={time.time}
                  isActive={watch('time') === time.time}
                  onSelect={() => setValue('time', time.time)}
                />
              ))}
            </ScrollView>
            <Controller
              name="date"
              control={control}
              render={({field: {value}}) => (
                <DatePickerTrigger
                  label="Date"
                  dateString={value}
                  onPress={() => setShowDatePicker(true)}
                  error=""
                  onClear={() => setValue('date', undefined)}
                  required={false}
                />
              )}
            />
          </View>

          <Button style={{marginTop: spacing.xxl}} onPress={handleNextPress}>
            Next
          </Button>
        </View>
      </View>
    </>
  );
};

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  padding: spacing.md,
};
