import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import MyHeader from '../components/MyHeader';

export default class WelcomeScreen extends React.Component {
  showReason1 = () => {
    alert(
      'THIS IS A INFO PROVIDER APP WHICH IS GOING TO HELP YOU TO INCREASE YOUR KNOWLEDGE AND ALSO HELP YOU WITH THE NEWS ALL AROUND THE WORLD.SO IF YOU WANT TO CHECK THE NEWS PLEASE GO TO  THE NEWS SCREEN , AND SELECT THE REQUIRED CATEGORY.PLEASE ALSO DONT FORGET TO GIVE FEEDBACK.. ALWAYS UPDATE YOURSELF WITH THE PROFILE IN DRAWER MENU AND YOUR INFORMATION IN SETTINGS SCREEN. DISCOVER MORE ABOUT US IN "More About Us" SCREEN.. THANK U.🤗🤗🤗'
    );
  };
  render() {
    return (
      <View style={styles.allData}>
  <MyHeader title="HOME" style={styles.headerText} navigation={this.props.navigation} />
        <TouchableOpacity onPress={this.showReason1}>
          <Image
            style={styles.imageIcon}
            source={{
              uri:
                'http://www.netanimations.net/Animated-gif-spinning-question-mark-picture-moving.gif',
            }}
          />
        </TouchableOpacity>
        <Text style={styles.intro}>
          In the age of the internet, everyone is connected with each other
          using internet and it is easy to share information with everyone. What
          if we could share our physical belongings just as easily as we share
          information! So, I am making an Info Prvider App in which till now I
          have created some tabs in which users can get some news information
          or they can give me feedback. Click on different tabs to see the app.
          Don't forgot to give me the feedback.
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  allData: {
    backgroundColor: '#f1602e',
    flex: 1,
  },
  intro: {
    backgroundColor: '#B1FB17',
    fontFamily: 'cursive',
    margin: 10,
    padding: 5,
    fontSize: 18
  },
  imageIcon: {
    width: 25,
    height: 45,
    marginLeft: 280,
    marginTop: -42,
  },
});