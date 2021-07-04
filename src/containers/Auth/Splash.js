import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, Animated, Dimensions, Image } from 'react-native'

import {
    COLOR_PINK, COLOR_PINK_LIGHT,
    COLOR_FACEBOOK, COLOR_PINK_MEDIUM
}
    from './myColors'
const { height, width } = Dimensions.get('window')

const Splash = ({ navigation }) => {
    const [logoOpacity, setlogoOpacity] = useState(new Animated.Value(0))
    const [titleMarginTop, settitleMarginTop] = useState(new Animated.Value(height / 2))

    useEffect(() => {
        Animated.sequence([
            //animations by sequence
            Animated.timing(logoOpacity, {
                toValue: 1,
                duration: 1500,
            useNativeDriver: true, // <-- Add this

            }),
            //Animate Text ?
            Animated.timing(titleMarginTop, {
                toValue: 10,
                duration: 1000, //1000 miliseconds = 1 second

            })
        ]).start(() => {
            //End of animations
            //How to navigate to Login ? => Use StackNavigation
            navigation.replace("SignInScreen")
        })
    }, [])

    return (
        <View style={styles.container}>
            <Animated.View>
                <Image source={require('../../assets/logo.png')} style={{ ...styles.logo }} />
            </Animated.View>
            <Animated.Text style={{
                ...styles.title,
                marginTop: titleMarginTop,
            }}>
            </Animated.Text>
        </View>
    )
}
export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#164977'
    },
    logo: {
        width: 130,
        height: 130,
        // borderRadius: 130 / 2,
    },
    title: {
        color: 'pink',
        marginTop: 10,
        textAlign: 'center',
        width: 400,
        fontSize: 21
    }
})
