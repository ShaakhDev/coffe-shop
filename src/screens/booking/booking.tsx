import {useMemo, useState} from 'react';
import {ScrollView, ViewStyle} from 'react-native';
import {FirstStep, SecondStep, ThirdStep} from './components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from '@/navigators';

export const BookingScreen = ({
  navigation,
}: NativeStackScreenProps<AppStackParamList>) => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step === 3) {
      return;
    }

    setStep(step + 1);
  };

  const handleFinish = () => {
    navigation.navigate('BookingSuccess');
  };

  const screenContents: {[key: number]: React.ReactNode} = useMemo(() => {
    return {
      1: <FirstStep onNext={handleNext} />,
      2: <SecondStep onNext={handleNext} />,
      3: <ThirdStep onFinish={handleFinish} />,
    };
  }, [step]);

  return <ScrollView style={$container}>{screenContents[step]}</ScrollView>;
};
const $container: ViewStyle = {
  flex: 1,
};
