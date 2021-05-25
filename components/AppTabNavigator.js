import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FeedBackScreen from '../screens/FeedBackScreen';
import WelcomeScreen from '../screens/Home';
import MoreAboutUs from '../screens/MoreAboutUs';
import News from '../screens/News'

export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/Home-icon.png')}
          style={{ width: 35, height: 35 }}
        />
      ),
      tabBarLabel: 'HomeScreen',
    },
  },
  FeedBackScreen: {
    screen: FeedBackScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={{uri : 'http://pmru.kp.gov.pk/svg-icons/feedback.svg'}}
          style={{ width: 35, height: 35}}
        />
      ),
      tabBarLabel: 'FeedBack',
    },
  },
  MoreAboutUs: {
    screen: MoreAboutUs,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/img_115995.png')}
          style={{ width: 35, height: 35}}
        />
      ),
      tabBarLabel:'MoreAboutUs',
    },
  },
   News: {
    screen: News,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/news-icon-43.png')}
          style={{ width: 37, height: 36 }}
        />
      ),
      tabBarLabel: 'News',
    },
  },
});
