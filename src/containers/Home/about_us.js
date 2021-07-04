import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

const Dashboard = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={{ uri: 'https://i.ibb.co/M76ZYhZ/left-arrow.png' }} style={styles.back} />
                </TouchableOpacity>
                <Text style={styles.about}>About US</Text>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>Our Company</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.txtContent}>Carsale Ltd (ASX: CAR) is the largest online automotive, motorcycle and marine classifieds business in Australia. Attracting more Australians interested in buying or selling cars, motorcycles, trucks, caravans and boats than any other classified group of websites. Together with its subsidiaries employing over 600 people in Australia, carsales develops world leading technology and advertising solutions that drive its business around the world. carsales.com Ltd has operations across the Asia Pacific region and has interests in leading online automotive classified businesses in Brazil, South Korea, Malaysia, Indonesia, Thailand and Mexico.</Text>
                    </View>
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>The Carsales Vision</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.txtContent}>Our vision is to provide a smooth car buying and selling journey for all Australians. At carsales, everything we do from product development to marketing & communications aims to empower our customers and give them greater confidence when it comes to trading cars – regardless of how much they know about cars or how engaged they might be in the process.</Text>
                    </View>
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>Our Products & Services</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.txtContent}>Our product portfolio continues to expand and diversify, allowing us to grow with the evolving needs of our customers and provide support during every step of their journey.</Text>
                        <View style={{ marginLeft: 10 }}>
                            <View style={styles.containerTitle}>
                                <Text style={[styles.title, { fontSize: 18 }]}>Buying</Text>
                            </View>
                            <View style={styles.content}>
                                <Text style={styles.txtContent}>Over 200,000 new and used cars to choose from on carsales.com. Tools to help you find, compare and decide.The latest new car deals and special offers from manufacturers</Text>
                            </View>
                            <View style={styles.containerTitle}>
                                <Text style={[styles.title, { fontSize: 18 }]}>Selling</Text>
                            </View>
                            <View style={styles.content}>
                                <Text style={styles.txtContent}>Choose from Lite, Standard, Premium or Ultimate ad types.Sell in a snap by listing your car straight from your mobile
                                    .Tools to help you sell with confidence.PrivacyProtect for anonymity and added security</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>Careers</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.txtContent}>As Australia’s leading online automotive classifieds business the main driver behind our success and continued growth is our employees. We are committed to providing training and career development opportunities, programs and online learning to help our staff excel. Passion, innovation, creativity and collaboration are just some of the words that best describe the carsales culture.</Text>
                    </View>
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>Advertise with us</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.txtContent}>We provide online advertising solutions to media agencies and their clients, dealers (in all industries), industry organisations and many other businesses throughout Australia.</Text>
                        <View style={{ marginLeft: 5 }}>
                            <View style={{ height: 30, flexDirection: 'row', margin: 5, alignItems: 'center' }}>
                                <Image source={{ uri: 'https://i.ibb.co/MVsJXwh/Vector.png' }} style={{ height: 25, width: 25 }} />
                                <Text style={{ marginLeft: 5 }}>+61 3 9093 8600</Text>
                            </View>
                            <View style={{ height: 30, flexDirection: 'row', margin: 5, alignItems: 'center' }}>
                                <Image source={{ uri: 'https://i.ibb.co/CsK1Fzq/email.png' }} style={{ height: 25, width: 25 }} />
                                <Text style={{ marginLeft: 5 }}>carsale@gmail.com</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#5c5e62'
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
    containerTitle: {
        height: 30,
        margin: 5,
        marginBottom: 0
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    content: {
        marginLeft: 5,
        marginRight: 5
    },
    txtContent: {
        textAlign: 'justify'
    }
})