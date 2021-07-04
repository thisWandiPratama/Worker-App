import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import { App_Drawer } from "../routes/Drawer";
import Detail_Product from "../containers/Home/detail_product"
import About_us from '../containers/Home/about_us'

const Stack = createStackNavigator();

export default createHomeStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Home" component={App_Drawer} />
    <Stack.Screen name="Detail_Product" component={Detail_Product} />
    <Stack.Screen name="About_us" component={About_us} />
  </Stack.Navigator>
);