import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native';
import StyledButton from "../components/StyledButton/StyledButton";
import { DrawerActions } from '@react-navigation/native';
import Cars from '../components/CarsList/cars'

const CarItem = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={Cars}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                renderItem={({ item, index }) => {
                    console.log(item)
                    const { name, tagline, taglineCTA, image } = item;
                    return (
                        <View>
                            <View style={styles.carContainer} key={1}>
                                <View style={styles.floating}>
                                    <Image style={styles.logo} source={require('../../assets/logo.png')} />
                                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                                        <Image style={styles.menu} source={require('../../assets/images/menu.png')} />
                                    </TouchableOpacity>
                                </View>
                                <ImageBackground
                                    source={image}
                                    style={styles.image}
                                />

                                <View style={styles.titles}>
                                    <Text style={styles.title}>{name}</Text>
                                    <Text style={styles.subtitle}>
                                        {/* </View> */}
                                        {tagline}
                                        {' '}
                                        <Text style={styles.subtitleCTA}>
                                            {taglineCTA}
                                        </Text>
                                    </Text>
                                </View>

                                <View style={styles.buttonsContainer}>
                                    <StyledButton
                                        type="primary"
                                        content={"DETAILS"}
                                        onPress={() => navigation.navigate('Detail_Product', { image: image, name: name, tagline: tagline, taglineCTA: taglineCTA })}
                                    />

                                    <StyledButton
                                        type="secondary"
                                        content={"Existing Inventory"}
                                        onPress={() => {
                                            console.warn("Existing Inventory was pressed");
                                        }}
                                    />
                                </View>

                            </View>
                        </View>
                    )
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: '500',
    },
    subtitleCTA: {
        textDecorationLine: 'underline',
    },
    subtitle: {
        fontSize: 16,
        color: '#5c5e62'
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },

    buttonsContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
    },
    floating: {
        position: 'absolute',
        top: 15,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    logo: {
        width: 25,
        height: 35,
        resizeMode: 'contain',
        alignSelf: 'flex-start',
        paddingRight: 40,
        alignContent: 'flex-start',
    },
    menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    }
});
export default CarItem;
