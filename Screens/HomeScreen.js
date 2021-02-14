import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';

export default class HomeScreen extends React.Component {
  LikePressed(){
    var like=db.ref('+')
    like.update({
      'likePressed': 1
    })
  }

  DisLikePressed(){
    var dislike=db.ref('+')
    dislike.update({
      'dislikePressed': 1
    })
  }
  
  render() {
    return (
      <View>
        <AppHeader />
        <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Joke')}>
          <Text style={styles.buttonText}>Daily Joke</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('News')}>
          <Text style={styles.buttonText}>News</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Weather')}>
          <Text style={styles.buttonText}>Weather</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Horoscope')}>
          <Text style={styles.buttonText}>Horoscope</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress ={this.DislikePressed}>
        <Image
          style={{
            width: 80,
            height: 80,
            marginLeft: 200,
            marginTop: 50
          }}
          source={require('../assets/thumbsdown.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress ={this.LikePressed}>
        <Image
          style={{
            width: 80,
            height: 80,
            marginLeft: 45,
            marginTop: -100
          }}
          source={require('../assets/thumbsup.png')}
        />
        </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 305,
    height: 50,
    backgroundColor: 'red',
    margin: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'yellow',
  }
});

