import React from 'react';
import { Image } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import CustomSidebarMenu from './CustomSidebarMenu';
import SettingScreen from '../screens/SettingScreen';
import WelcomeScreen from '../screens/Home';
import FeedBackScreen from '../screens/FeedBackScreen';
import MoreAboutUs from '../screens/MoreAboutUs'
import { Icon } from 'react-native-elements';
import News from '../screens/News';

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home : {
      screen: AppTabNavigator,
       navigationOptions:{
      drawerIcon : <Icon name="home" type ="fontawesome5" />
    }
    },
    News : {
      screen: News,
       navigationOptions: {
        drawerIcon: (
          <Image
            source={{uri : 'http://cdn.onlinewebfonts.com/svg/img_224040.png'}}
            style={{ width: 20, height: 20 }}
          />
        ),
        drawerLabel: 'News',
      },
    },
    Settings : {
      screen: SettingScreen,
       navigationOptions: {
        drawerIcon: (
          <Image
            source={{uri : 'https://image.flaticon.com/icons/svg/23/23408.svg'}}
            style={{ width: 20, height: 20 }}
          />
        ),
        drawerLabel: 'Settings',
      },
    },
    MoreAboutUs: {
      screen: MoreAboutUs,
      navigationOptions: {
        drawerIcon: (
          <Image
            source={{uri : 'https://www.freeiconspng.com/uploads/information-icon-27.png'}}
            style={{ width: 20, height: 20 }}
          />
        ),
        drawerLabel: 'More About Us',
      },
    },
   FeedBack: {
      screen: FeedBackScreen,
      navigationOptions:{
      drawerIcon : <Icon name="feedback" type ="fontawesome5" />,
      drawerLabel : "FeedBack"
    }
    },
  },
  {
    contentComponent: CustomSidebarMenu,
  },
  {
    initialRouteName: 'Home',
  }
);
