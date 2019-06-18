import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import RegisterScreen from '../screens/RegisterScreen';

export default createAppContainer(createSwitchNavigator({
  Main: MainTabNavigator,
  Auth: SignInScreen, 
  SignUp : SignUpScreen,
  Reg : RegisterScreen
}));
