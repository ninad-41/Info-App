import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
  Linking
} from 'react-native';
import firebase from 'firebase';
import * as WebBrowser from 'expo-web-browser';
import MyHeader from '../components/MyHeader'

export default class News extends Component {
    _handleOpenWithWebBrowser1 = () => {
    WebBrowser.openBrowserAsync('https://www.bbc.com/news/world');
  };
_handleOpenWithWebBrowser2 = () => {
    WebBrowser.openBrowserAsync('https://www.lyrarc.com/');
  };
  _handleOpenWithWebBrowser3 = () => {
    WebBrowser.openBrowserAsync(' https://indianexpress.com/d');
  };
  _handleOpenWithWebBrowser4 = () => {
    WebBrowser.openBrowserAsync('https://www.covid19india.org/');
  };
_handleOpenWithWebBrowser5 = () => {
    WebBrowser.openBrowserAsync('https://sports.ndtv.com');
  };
_handleOpenWithWebBrowser6 = () => {
    WebBrowser.openBrowserAsync('https://zeenews.india.com/international-business');
  };
  _handleOpenWithWebBrowser7 = () => {
    WebBrowser.openBrowserAsync('https://timesofindia.indiatimes.com/life-style/books/reviews');
  };
  _handleOpenWithWebBrowser8 = () => {
    WebBrowser.openBrowserAsync('https://www.primevideo.com/?ref_=dvm_pds_gen_in_as_s_g_movie1|m_O3nOigQ9c_c475408224377');
  };

  showReason1 = () => {
    alert(
      'HI GUYS THIS IS THE MAIN SCREEN WHICH IS GOING TO PROVIDE YOU THE NEWS AND USE IT NEATLY. YOU CAN ALSO FIND THE SAME IN THE SIDE DRAWER. HERE YOU MUST CLICK ON THE CATEGORY OF THE NEWS REQUIRED.JUST CLICK ON IT AND IT WILL NAVIGATE YOU TO A WINDOW. HOPE YOU ALL LOVED THIS APPLICATION.SO ENJOY AND DONT FORGET TO GIVE THE FEEDBACK..THANK U.🤗🤗🤗'
    );
  };

  render() {
    return (
      <View style={{flex : 1, backgroundColor : '#625D5D'}}>
      <ScrollView>
      <MyHeader navigation={this.props.navigation} title="NEWS" />
      <TouchableOpacity onPress={this.showReason1}>
          <Image
            style={styles.imageIcon}
            source={{
              uri:
                'http://www.netanimations.net/Animated-gif-spinning-question-mark-picture-moving.gif',
            }}
          />
        </TouchableOpacity>

      <Image 
     source={{uri : 'https://www.gifmania.co.uk/Messages-Animated-Gifs/Animated-News/Gold-News-84532.gif'}}
     style={{marginTop : 30,marginLeft : 12,width : '100%', height : 140}}
     />
      <Text style={{fontWeight : 'bold', fontSize : 23, fontFamily : 'sans-serif'}}>  Please Select A Category :~</Text>
      <TouchableOpacity style={{borderRadius : 20,alignItems : 'center',alignContent :'center',justifyContent : 'center',
      alignSelf : 'center', height : 60, width : 200, backgroundColor:'#82CAFF', marginTop:25}}
      onPress={()=>{this._handleOpenWithWebBrowser1()}}
      >
  <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:'bold'}}>International News</Text>
      </TouchableOpacity>

 <TouchableOpacity style={{borderRadius : 20,alignItems : 'center',alignContent :'center',justifyContent : 'center',
      alignSelf : 'center', height : 60, width : 200, backgroundColor:'#82CAFF', marginTop:25}}
      onPress={()=>{this._handleOpenWithWebBrowser2()}}
      >
  <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:'bold'}}>Political News</Text>
      </TouchableOpacity>

       <TouchableOpacity style={{borderRadius : 20,alignItems : 'center',alignContent :'center',justifyContent : 'center',
      alignSelf : 'center', height : 60, width : 200, backgroundColor:'#82CAFF', marginTop:25}}
      onPress={()=>{this._handleOpenWithWebBrowser3()}}
      >
  <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:'bold'}}>National News</Text>
      </TouchableOpacity>

       <TouchableOpacity style={{borderRadius : 20,alignItems : 'center',alignContent :'center',justifyContent : 'center',
      alignSelf : 'center', height : 60, width : 200, backgroundColor:'#82CAFF', marginTop:25}}
      onPress={()=>{this._handleOpenWithWebBrowser4()}}
      >
  <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:'bold'}}>Covid 19 News</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{borderRadius : 20,alignItems : 'center',alignContent :'center',justifyContent : 'center',
      alignSelf : 'center', height : 60, width : 200, backgroundColor:'#82CAFF', marginTop:25}}
      onPress={()=>{this._handleOpenWithWebBrowser5()}}
      >
  <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:'bold'}}>Sports News</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{borderRadius : 20,alignItems : 'center',alignContent :'center',justifyContent : 'center',
      alignSelf : 'center', height : 60, width : 200, backgroundColor:'#82CAFF', marginTop:25}}
      onPress={()=>{this._handleOpenWithWebBrowser6()}}
      >
  <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:'bold'}}>Business News</Text>
      </TouchableOpacity>

<TouchableOpacity style={{borderRadius : 20,alignItems : 'center',alignContent :'center',justifyContent : 'center',
      alignSelf : 'center', height : 60, width : 200, backgroundColor:'#82CAFF', marginTop:25}}
      onPress={()=>{this._handleOpenWithWebBrowser7()}}
      >
  <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:'bold'}}>Book Reviews </Text>
      </TouchableOpacity>

<TouchableOpacity style={{borderRadius : 20,alignItems : 'center',alignContent :'center',justifyContent : 'center',
      alignSelf : 'center', height : 60, width : 200, backgroundColor:'#82CAFF', marginTop:25}}
      onPress={()=>{this._handleOpenWithWebBrowser8()}}
      >
  <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:'bold'}}>Movie Reviews</Text>
      </TouchableOpacity>



      </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  imageIcon: {
    width: 25,
    height: 45,
    marginLeft: 280,
    marginTop: -42,
  },
});
