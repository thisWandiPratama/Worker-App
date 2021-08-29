import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import { App_Drawer } from "../routes/Drawer";
import MapView from'../containers/Home/mapView'
import ProfileWorker from'../containers/Home/profileWorker'
import Booking from '../containers/Home/booking'

const Stack = createStackNavigator();

export default createHomeStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Home" component={App_Drawer} />
    <Stack.Screen name="mapView" component={MapView} />
    <Stack.Screen name="profileWorker" component={ProfileWorker} />
    <Stack.Screen name="booking" component={Booking} />
  </Stack.Navigator>
);