import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Auth from "./src/routes/Auth"

const App = () => {
  return (
   <NavigationContainer>
     <Auth/>
   </NavigationContainer>
  )
}
export default App
