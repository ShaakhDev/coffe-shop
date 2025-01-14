import {Button, Text} from '@/components';
import {colors, spacing} from '@/theme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageStyle,
  Pressable,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {FlatList} from 'react-native';
import {AuthStackParamList} from 'src/navigators/auth-navigator';

const carouselData = [
  {
    id: 1,
    title: 'Awaken your\nSenses',
    image: require('assets/images/onboarding-1.webp'),
    description:
      "Whether you're a fan of classic espresso, creamy lattes, or adventurous with our special blends.",
  },
  {
    id: 2,
    title: 'Elevating Coffee Culture',
    image: require('assets/images/onboarding-2.webp'),
    description:
      "Whether you're a fan of classic espresso, creamy lattes, or adventurous with our special blends.",
  },
  {
    id: 3,
    title: 'Brewing Happiness',
    image: require('assets/images/onboarding-3.webp'),
    description:
      "Whether you're a fan of classic espresso, creamy lattes, or adventurous with our special blends.",
  },
];

const {width, height} = Dimensions.get('screen');

export const OnboardingScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList>) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigate = () => {
    navigation.replace('Login');
  };
  return (
    <View style={$container}>
      <FlatList
        onScroll={event => {
          const contentOffsetX = event.nativeEvent.contentOffset.x;
          const index = Math.floor(
            Math.floor(contentOffsetX) / Math.floor(width),
          );
          setCurrentIndex(index);
        }}
        pagingEnabled
        data={carouselData}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{width: width * carouselData.length}}
        renderItem={({item}) => (
          <View style={$carouselItem}>
            <View style={$imageWrapper}>
              <Image source={item.image} resizeMode="cover" style={$image} />
            </View>
            <Text fontFamily="syne" weight="bold" style={$title}>
              {item.title}
            </Text>
            <Text style={$description}>{item.description}</Text>
          </View>
        )}
      />

      {currentIndex === carouselData.length - 1 ? (
        <Button style={$startButton} preset="gold" onPress={handleNavigate}>
          Take a sip!
        </Button>
      ) : (
        <View style={$buttonsContainer}>
          <Pressable>
            <Text style={{color: colors.lightGreen}}>Skip</Text>
          </Pressable>
          <Pressable style={$nextButton}>
            <Text style={{color: colors.white}}>Next</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.welcomeBackground,
  position: 'relative',
};

const $image: ImageStyle = {
  width: '100%',
  height: '100%',
};

const $imageWrapper: ViewStyle = {
  width: 267,
  height: 237,
  overflow: 'hidden',
  borderRadius: spacing.xs,
};
const $carouselItem: ViewStyle = {
  width,
  height,
  justifyContent: 'center',
  alignItems: 'center',
};
const $title: TextStyle = {
  color: colors.white,
  fontSize: 40,
  lineHeight: 44,
  textAlign: 'center',
  marginTop: spacing.xxl,
  marginBottom: spacing.sm,
};
const $description: TextStyle = {
  color: colors.gold,
  textAlign: 'center',
};
const $buttonsContainer: ViewStyle = {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  padding: spacing.lg,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};
const $nextButton: ViewStyle = {
  backgroundColor: colors.defaultButton,
  borderRadius: 35,
  width: 70,
  height: 70,
  justifyContent: 'center',
  alignItems: 'center',
};
const $startButton: ViewStyle = {
  position: 'absolute',
  bottom: spacing.xl,
  alignItems: 'center',
  width: '95%',
};
