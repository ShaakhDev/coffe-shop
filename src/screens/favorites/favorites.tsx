import {View, ViewStyle} from 'react-native';
import {FavoriteList} from './components';

export const FavoritesScreen = () => {
  return (
    <View style={$container}>
      <FavoriteList />
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
};
