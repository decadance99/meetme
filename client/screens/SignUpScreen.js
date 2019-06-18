import React from 'react'
import {
  View,
  TouchableOpacity,
	TextInput,
	Text,
} from 'react-native'
import styles from "../assets/styles";

export default class SignUpScreen extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      username: '',
			password: '',
			email: '',
			phone_number: ''
    };
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
		this.props.navigation.navigate('Reg');
  }
 
  render() {
    return (
      <View style={styles.sign}>
        <TextInput
          style={styles.defForm}
          placeholder='Username'
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.defForm}
          placeholder='Password'
          secureTextEntry={true}
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.defForm}
          placeholder='Email'
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.defForm}
          placeholder='Phone Number'
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
        <TouchableOpacity style={styles.signButton} onPress={this.signUp}>
            <Text style={styles.textButton}>Next</Text>
          </TouchableOpacity>
      </View>
    )
  }
}