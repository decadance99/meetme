import React, { Component } from 'react';
import { View, TextInput, ImageBackground, AsyncStorage, TouchableOpacity, Text } from 'react-native';
import styles from "../assets/styles";
import apiService from '../services/ApiService';

class SignInScreen extends Component {
  static navigationOptions = {
    title: 'SignIn',
  }
	constructor(props) {
		super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  };
  _signUp = async () => {
    this.props.navigation.navigate('SignUp');
  };

  render(){
    return (
      <ImageBackground
        source={require("../assets/images/bg.png")}
        style={styles.bg}
      >
        <View style={styles.sign}>
          <TextInput placeholder="Username" style={styles.defForm}
            onChangeText={(username) => this.setState({ username })}
            />
          <TextInput placeholder="Password" style={styles.defForm}
            onChangeText={(password) => this.setState({ password })}
            secureTextEntry={true} />
          <TouchableOpacity style={styles.signButton2} onPress={this._signInAsync}>
            <Text style={styles.textButton}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signButton} onPress={this._signUp}>
            <Text style={styles.textButton}>Sign Up</Text>
          </TouchableOpacity>
        </View>
    </ImageBackground>
    );
  }
}

export default SignInScreen;