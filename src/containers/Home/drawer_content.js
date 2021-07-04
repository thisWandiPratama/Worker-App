import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const DrawerContent = (props) => {
    return (
        <View style={styles.container}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={{ margin: 10, flexDirection: 'row' , alignItems:'center'}}>
                    <Image source={{ uri: 'https://i.ibb.co/vHZxrV2/home.png' }} style={styles.icon} />
                    <Text style={{marginLeft: 10}}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('About_us')} style={{ margin: 10, flexDirection: 'row' , alignItems:'center'}}>
                    <Image source={{ uri: 'https://i.ibb.co/DYZCTyK/user.png' }} style={styles.icon} />
                    <Text style={{marginLeft: 10}}>About US</Text>
                </TouchableOpacity>
        </View>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    icon: {
        height: 20,
        width: 20
    }
})