import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';

export default class FeedbackScreen extends React.Component {
  increaseLikes = () => {
    db.collection('Review')
      .doc(this.state.likes)
      .update({
        Likes: firebase.firestore.FieldValue.increment(1),
      });
    alert('Thank you for submitting your feedback.');
  };
  increaseDislikes = () => {
    db.collection('Review')
      .doc(this.state.dislikes)
      .update({
        Dislikes: firebase.firestore.FieldValue.increment(1),
      });
    alert('Thank you for submitting your feedback.');
  };
  constructor(props) {
    super(props);
    this.state = {
      feedbackBox: '',
      name: '',
      email: '',
      likes: 'No_Of_Likes',
      dislikes: 'No_Of_Dislikes',
    };
  }
  showReason1 = () => {
    alert(
      'In this screen, you can give me some feedback or opinion. In the first field, you can write your feedback or opinion and if I will love your opinion then I will definitely use your idea in the app. In the second field, you have to write your email so that if I will love your opinion, then I can inform you that I will use your idea in the app.If you want, you can skip it. In the third field, you have to write your name. None of your personal data used by the app will be misused or exported somewhere. Hope you will love the app.'
    );
  };
  submitFeedback = () => {
    db.collection('Feedback').add({
      feedbackBox: this.state.feedbackBox,
      name: this.state.name,
      email: this.state.email,
      date: firebase.firestore.Timestamp.now().toDate(),
    });
    this.setState({
      feedbackBox: '',
      name: '',
      email: '',
    });
    alert('Thank you for submitting your feedback.');
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.allText} behavior="padding" enabled>
      <MyHeader title="Feedback" style={styles.headerText} navigation={this.props.navigation} />
        <TouchableOpacity onPress={this.showReason1}>
          <Image
            style={styles.imageIcon}
            source={{
              uri:
                'http://www.netanimations.net/Animated-gif-spinning-question-mark-picture-moving.gif',
            }}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.feedbackBox}
          placeholder="Write your feedback or opinion here."
          placeholderTextColor="black"
          value={this.state.feedbackBox}
          onChangeText={(text) => this.setState({ feedbackBox: text })}
        />

        <TextInput
          style={styles.authorBox}
          placeholder="Write your e-mail id here."
          placeholderTextColor="black"
          keyboardType="email-address"
          value={this.state.email}
          onChangeText={(text) => this.setState({ email: text })}
        />

        <TextInput
          style={styles.authorBox}
          placeholder="Write your name here."
          placeholderTextColor="black"
          value={this.state.name}
          onChangeText={(text) => this.setState({ name: text })}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submitFeedback}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.increaseLikes}>
          <Image
            style={styles.likeButton}
            source={require('../assets/like.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.increaseDislikes}>
          <Image
            style={styles.dislikeButton}
            source={require('../assets/dislike.png')}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    flex: 1,
    backgroundColor: '#E0B0FF',
  },
  headerText: {
    fontFamily: 'britannic',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
    fontWeight : 'bold',
    color : 'white'
  },
  feedbackBox: {
    width: '90%',
    height: '40%',
    backgroundColor: 'white',
    fontFamily: 'kristen itc',
    padding: 17,
    marginLeft: 20,
    marginTop: 5,
    color: 'black',
    fontSize: 18,
    borderRadius : 10
  },
  authorBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'white',
    fontFamily: 'kristen itc',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 18,
    borderRadius : 10
  },
  submitButton: {
    backgroundColor: '#461B7E',
    width: '54%',
    height: 40,
    marginTop: 20,
    padding: 5,
    marginLeft: 80,
  },
  buttonText: {
    fontFamily: 'britannic',
    textAlign: 'center',
    fontSize: 25,
    color : 'white'
  },
  imageIcon: {
    width: 25,
    height: 45,
    marginLeft: 280,
    marginTop: -40,
  },
  likeButton: {
    width: 70,
    height: 70,
    marginTop: -40,
    marginLeft: 5,
  },
  dislikeButton: {
    width: 70,
    height: 70,
    marginTop: -40,
    marginLeft: 255,
  },
});
