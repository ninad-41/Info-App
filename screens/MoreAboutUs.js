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
import MyHeader from '../components/MyHeader'

export default class MoreAboutUs extends React.Component {
  showReason1 = () => {
    alert(
      'THIS IS AN INFO PROVIDER APP WHICH IS GOING TO HELP YOU TO INCREASE YOUR KNOWLEDGE AND ALSO HELP YOU WITH THE NEWS ALL AROUND THE WORLD.SO IF YOU WANT TO CHECK THE NEWS PLEASE GO TO THE NEWS SCREEN , AND SELECT THE REQUIRED CATEGORY.PLEASE ALSO DONT FORGET TO GIVE FEEDBACK.. ALWAYS UPDATE YOURSELF WITH THE PROFILE IN DRAWER MENU AND YOUR INFORMATION IN SETTINGS SCREEN. DISCOVER MORE ABOUT US IN "More About Us" SCREEN.. THANK U.🤗🤗🤗'
    );
  };
  render() {
    return (
      <View style={styles.allData}>
          <MyHeader title="More About Us" style={styles.headerText} navigation={this.props.navigation}/>
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
        My Name is Ninad gugale. Age-14 ,And i have been a Coder since 6 months. i have happily and honestly decoded many applications. if you want you can visit my whitehat.jr profile too...
        My teacher 'Priya Mam' has taught me coding from a small game to big application. She teaches in a perfect manner such that anyone will shine like me..I am desperately trying to be a young and the best coder.......Please give FEEDBACK(good or bad doesn't matters..🤗🤗🤗)
          So, I am making an Info-Provider App in which one can get all the in information in the form of texts, images, and links too. so you can explore all the information world-wide.It is requested by you to use all the parts of the app. 

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
    fontSize: 15
  },
  imageIcon: {
    width: 25,
    height: 45,
    marginLeft: 280,
    marginTop: -42,
  },
});
