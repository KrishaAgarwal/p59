import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import Joke from './Screens/Joke';
import Horoscope from './Screens/Horoscope';
import Weather from './Screens/Weather';
import News from './Screens/News';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Horoscope: Horoscope,
  Joke: Joke,
  Weather: Weather,
  News: News,
});

const AppContainer = createAppContainer(AppNavigator);
