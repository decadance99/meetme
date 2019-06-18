import React from "react";
import styles from "../assets/styles";

import {
	ScrollView,
	View,
	Text,
	ImageBackground,
	TouchableOpacity
} from "react-native";
import ProfileItem from "../components/ProfileItem";
import Demo from "../assets/data/demo.js";

const Profile = (props) => {
	const { navigate } = props.navigation;
	const {
		age,
		image,
		info1,
		info2,
		info3,
		info4,
		location,
		match,
		name
	} = Demo[0];

	return (
		<ImageBackground
			source={require("../assets/images/bg.png")}
			style={styles.bg}
		>
			<ScrollView style={styles.containerProfile}>
				<ImageBackground source={image} style={styles.photo}>
				</ImageBackground>

				<ProfileItem
					matches={match}
					name={name}
					age={age}
					location={location}
					info1={info1}
					info2={info2}
					info3={info3}
					info4={info4}
				/>

				<View style={styles.actionsProfile}>
					<TouchableOpacity style={styles.roundedButton}>
						<Text style={styles.textButton}>Start chatting</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</ImageBackground>
	);
};

export default Profile;
