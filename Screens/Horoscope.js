import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class Horoscope extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          If You Know What Is Horoscope Please Do Let Me Know
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('HomeScreen')}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text:{
    color: 'red',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
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