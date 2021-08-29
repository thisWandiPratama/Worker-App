import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Button } from 'react-native';
import MapView from 'react-native-maps';
import { Marker, AnimatedRegion, Animated } from 'react-native-maps';
import { DrawerActions } from '@react-navigation/native';



const Map = ({ navigation }) => {
    return (
        <View style={styles.MainContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.menu} source={{ uri: 'https://i.ibb.co/bmkkJPh/arrow.png' }} />
                </TouchableOpacity>
                <Text style={styles.titleHeader}>Address</Text>
            </View>
            <MapView
                style={styles.mapStyle}
                showsUserLocation={false}
                zoomEnabled={true}
                zoomControlEnabled={true}
                initialRegion={{
                    latitude: -7.797068,
                    longitude: 110.370529,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>

                <Marker
                    coordinate={{ latitude: -7.797068, longitude: 110.370529 }}
                    title={"Marker Title"}
                    description={"Marker Description Text"}
                    pinColor="blue"
                />

            </MapView>

            <View style={styles.footer}>
                <Text style={styles.titleFooter}>Send Address</Text>
            </View>
        </View >
    );
}
export default Map
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
    },
    mapStyle: {
        flex: 1
    },
    header: {
        width: '100%',
        height: 50,
        backgroundColor: '#155ED5',
        flexDirection: 'row',
        alignItems: 'center'
    },
    footer: {
        width: '100%',
        height: 50,
        backgroundColor: '#155ED5',
        alignItems: 'center',
        justifyContent:'center'
    },
    menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginLeft: 10
    },
    titleHeader: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "#ffffff",
        marginLeft: 10,
        marginLeft: "35%",
    },
    titleFooter: {
        fontSize: 19,
        fontWeight: 'bold',
        color: "#ffffff",
    },
    address: {
        position: 'absolute',
        height: 500,
        width: '100%',
        bottom: 0,
        top: 0
    }
});