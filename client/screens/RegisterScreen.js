import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
	TouchableOpacity,
	TextInput
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import styles from "../assets/styles";

export default class RegisterScreen extends Component {
	constructor(props) {
		super(props);
    this.state = {
      age: '',
			gender: '',
			description: '',
			location: '',
			info1 : '',
			info2: '',
			info3: ''
    };
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  _reg = async () => {
		this.props.navigation.navigate('Main');
	}

  render() {
    return (
      <View style={styles.sign}>
        <TextInput
          style={styles.defForm}
          placeholder='Age'
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.defForm}
          placeholder='Password'
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.defForm}
          placeholder='Description'
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('description', val)}
        />
        <TextInput
          style={styles.defForm}
          placeholder='Location'
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('location', val)}
        />
				<TextInput
          style={styles.defForm}
          placeholder='Sexuality, Height'
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('info1', val)}
        />
				<TextInput
          style={styles.defForm}
          placeholder='Status'
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('info2', val)}
        />
				<TextInput
          style={styles.defForm}
          placeholder='Likes'
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('info3', val)}
        />
        <TouchableOpacity style={styles.signButton} onPress={this._reg}>
            <Text style={styles.textButton}>Sign Up</Text>
          </TouchableOpacity>
      </View>
    );
  }
}