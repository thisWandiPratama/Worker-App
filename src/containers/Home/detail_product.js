import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Dashboard = ({ route, navigation }) => {
    const { image, name, tagline, taglineCTA } = route.params;
    return (
        <View style={styles.container}>
            <Image source={image} style={{
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
            }} />
            <View style={{ flex: 1, position: 'absolute' }}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={{ uri: 'https://i.ibb.co/M76ZYhZ/left-arrow.png' }} style={styles.back} />
                    </TouchableOpacity>
                    <Text style={styles.about}>Details</Text>
                </View>
                <Text style={{ color: 'white', fontSize: 50, margin: 10, fontWeight: 'bold' }}>{name}</Text>
                <View style={{ paddingTop: '80%', width: '100%', marginLeft: 20, marginRight: 20, flexDirection: 'row' }}>
                    <View style={{
                        height: 80, width: 80, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'white', borderRadius: 20, shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.20,
                        shadowRadius: 1.41,

                        elevation: 2,
                        marginRight: 5
                    }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color:'white'}}>Speed</Text>
                        <Text style={{ fontSize: 8,color:'white'  }}>0 - 100 kph 3.2s</Text>
                    </View>
                    <View style={{
                        height: 80, width: 80, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'white', borderRadius: 20, shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.20,
                        shadowRadius: 1.41,
                        elevation: 2,
                        marginRight: 5
                    }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 12,color:'white' }}>Seat</Text>
                        <Text style={{ fontSize: 8,color:'white' }}>2 seats</Text>
                    </View>
                    <View style={{
                        height: 80, width: 80, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'white', borderRadius: 20, shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.20,
                        shadowRadius: 1.41,
                        elevation: 2,
                        marginRight: 5
                    }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 12,color:'white' }}>Manual</Text>
                        <Text style={{ fontSize: 8,color:'white' }}>Yes</Text>
                    </View>
                    <View style={{
                        height: 80, width: 80, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'white', borderRadius: 20, shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.20,
                        shadowRadius: 1.41,
                        elevation: 2,
                        marginRight: 5
                    }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 12,color:'white' }}>Fuel</Text>
                        <Text style={{ fontSize: 8,color:'white' }}>Gas</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center', width: '95%' }}>
                    <View style={{
                        height: 80, width: "80%", padding: 10, borderWidth: 1, borderColor: 'white', borderRadius: 20, shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.20,
                        shadowRadius: 1.41,
                        elevation: 2,
                        // marginRight: 5,
                        marginTop: 10,

                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ height: 40, width: 40, backgroundColor: '#FCD037', alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginRight: 5 }}>
                                <Text>Herts</Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Herts</Text>
                                <Text style={{ fontSize: 8, color:'white' }}>Milami Beach - South Beach</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 12, color:'white' }}>Mon - Sun 8:00PM (786) 276-1121</Text>
                    </View>
                </View>
                <TouchableOpacity style={{
                    marginTop: 20, marginLeft: 20, height: 50, width: "90%", shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,
                    elevation: 2,
                }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold',color:'white' }}>{tagline}, Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
    },
    back: {
        height: 30,
        width: 25,
        marginRight: 5,
        marginLeft: 5
    },
    about: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
})