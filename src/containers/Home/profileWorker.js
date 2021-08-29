import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Button } from 'react-native';
import MapView from 'react-native-maps';
import { Marker, AnimatedRegion, Animated } from 'react-native-maps';
import { DrawerActions } from '@react-navigation/native';



const Profile = ({ navigation }) => {
    return (
        <View style={styles.MainContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.menu} source={{ uri: 'https://i.ibb.co/bmkkJPh/arrow.png' }} />
                </TouchableOpacity>
                <Text style={styles.titleHeader}>Worker Profile</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: '#ffffff', alignItems: 'center' }}>
                <View style={{ height: '50%', width: '90%' }}>
                    <View style={{ alignItems: 'center', paddingTop: '15%' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Surtano</Text>
                        <Image style={{ height: 150, width: 150, resizeMode: 'contain' }} source={{ uri: 'data:image/jpeg;base64,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' }} />
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Ahli Tukang Beton</Text>
                        <Text style={{ fontSize: 12, fontWeight: '500' }}>Edit Profile</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('booking')} style={{ height: 40, width: '40%', backgroundColor: '#1E82D5', alignItems: 'center', justifyContent: 'center', marginTop: 20, borderRadius: 10 }}>
                            <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: 'bold' }}>Booking</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: '30%', width: '90%', alignItems: 'center' }}>
                    <View style={{ height: 40, width: '90%', backgroundColor: '#1E82D5', alignItems: 'center', justifyContent: 'space-around', marginTop: 20, borderRadius: 10, flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', width: '80%' }}>
                            <Image style={{ height: 20, width: 20, resizeMode: 'contain', marginRight: 10 }} source={{ uri: 'https://i.ibb.co/vQLSVrJ/user.png' }} />
                            <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: 'bold' }}>Personal Information</Text>
                        </View>
                        <Image style={{ height: 20, width: 20, resizeMode: 'contain', marginRight: 10 }} source={{ uri: 'https://i.ibb.co/KjTFJg5/next.png' }} />
                    </View>
                    <View style={{ height: 40, width: '90%', backgroundColor: '#1E82D5', alignItems: 'center', justifyContent: 'space-around', marginTop: 20, borderRadius: 10, flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', width: '80%' }}>
                            <Image style={{ height: 20, width: 20, resizeMode: 'contain', marginRight: 10 }} source={{ uri: 'https://i.ibb.co/McKG6JW/bag.png' }} />
                            <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: 'bold' }}>Worker Address</Text>
                        </View>
                        <Image style={{ height: 20, width: 20, resizeMode: 'contain', marginRight: 10 }} source={{ uri: 'https://i.ibb.co/KjTFJg5/next.png' }} />
                    </View>
                    <View style={{ height: 40, width: '90%', backgroundColor: '#1E82D5', alignItems: 'center', justifyContent: 'space-around', marginTop: 20, borderRadius: 10, flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', width: '80%' }}>
                            <Image style={{ height: 20, width: 20, resizeMode: 'contain', marginRight: 10 }} source={{ uri: 'https://i.ibb.co/W2xKdVg/star-color-hitam.png' }} />
                            <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: 'bold' }}>Worker Address</Text>
                        </View>
                        <Image style={{ height: 20, width: 20, resizeMode: 'contain', marginRight: 10 }} source={{ uri: 'https://i.ibb.co/KjTFJg5/next.png' }} />
                    </View>
                </View>

            </View>
        </View >
    );
}
export default Profile
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
        marginLeft: "30%",
    },
    worker: {
        position: 'absolute',
        bottom: 30,
        height: 200,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    boxWorker: {
        height: 200,
        backgroundColor: '#ffffff',
        width: '40%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});