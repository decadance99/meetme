import React, { Component } from "react";
import styles from "../assets/styles";

import {
	ScrollView,
	TouchableOpacity,
	ImageBackground,
	View,
	FlatList
} from "react-native";
import Message from "../components/Message";
import Demo from "../assets/data/demo.js";


class MessagesScreen extends Component {
  static navigationOptions = {
    title: 'Messages',
  }
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<ImageBackground
				source={require("../assets/images/bg.png")}
				style={styles.bg}
			>
				<View style={styles.containerMessages}>
					<ScrollView>
						<FlatList
							data={Demo}
							keyExtractor={(item, index) => index.toString()}
							renderItem={({ item }) => (
								<TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
									<Message
										image={item.image}
										name={item.name}
										lastMessage={item.message}
									/>
								</TouchableOpacity>
							)}
						/>
					</ScrollView>
				</View>
			</ImageBackground>
		);
	}
}


export default MessagesScreen;
