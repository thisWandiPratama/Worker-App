import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplahScreen from '../containers/Auth/Splash';
import SignInScreen from '../containers/Auth/Login';
import Dashboard from '../routes/Dashboard';

const Stack = createStackNavigator();

const createAuthStack = ({ navigation }) => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="SplahScreen" component={SplahScreen} />
    <Stack.Screen name="SignInScreen" component={SignInScreen} />
    <Stack.Screen name="Dashboard" component={Dashboard} />
  </Stack.Navigator>
);
export default createAuthStack;