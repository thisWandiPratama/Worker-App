import React from "react"
import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import DrawerContent from "../containers/Home/drawer_content"
import Home from "../containers/Home/"


const Drawer = createDrawerNavigator()
const App_Drawer = ({}) => {
    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" children={Home} />
        </Drawer.Navigator>
    )
}
export { App_Drawer }