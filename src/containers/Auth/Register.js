import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image
} from 'react-native'

import {
  COLOR_PINK_LIGHT, COLOR_PINK_MEDIUM
}
  from '../components/myColors'


export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      phone: 831493023,
      password: '12345678'
    }
  }

  register() {
    console.log('register')
  }

  render() {
    return (
      //Donot dismis Keyboard when click outside of TextInput
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image style={styles.menu} source={{ uri: 'https://i.ibb.co/1LGxzZq/arrow-1.png' }} />
          </TouchableOpacity>
          <Text style={styles.titleHeader}>Address</Text>
        </View>
          <View style={styles.up}>
            <Image style={{ height: 50, width: 50 }} source={{ uri: 'https://i.ibb.co/Twd1kx8/photo-camera.png' }} />
          </View>
          <View style={styles.down}>
            <View>
              <Text style={{ color: '#000', fontWeight: 'bold', paddingLeft: 0 }}>Name</Text>
              <View style={styles.textInputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Ex: Taylor eyemen"
                  onChangeText={(nama) => this.setState({ nama })}
                >
                </TextInput>
              </View>
            </View>
            <View>
              <Text style={{ color: '#000', fontWeight: 'bold', paddingLeft: 0 }}>Phone</Text>
              <View style={styles.textInputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Ex: 8392382932"
                  onChangeText={(phone) => this.setState({ phone })}
                >
                </TextInput>
              </View>
            </View>
            <View>
              <Text style={{ color: '#000', fontWeight: 'bold' }}>Password</Text>
              <View style={styles.textInputContainer1}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter your password"
                  secureTextEntry={true}
                  onChangeText={(password) => this.setState({ password })}
                >
                </TextInput>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ height: 20, width: 20, marginRight: 5 }} source={{ uri: 'https://i.ibb.co/J518RGB/checked-box-1.png' }} />
                <Text style={{ fontWeight: 'bold', marginBottom: 20, marginTop: 20, textAlign: 'left' }}>I aggree <Text style={{ color: '#1E82D5', }}>Terms & Condition</Text> </Text>
              </View>
            </View>
            <View>
              <TouchableOpacity style={styles.loginButton} onPress={() => this.register()}>
                <Text style={styles.loginButtonTitle}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ fontWeight: 'bold', marginBottom: 20, marginTop: 20, textAlign: 'left' }}>I have <Text onPress={() => this.props.navigation.goBack()} style={{ color: '#1E82D5', }}>an account</Text></Text>
          </View>
        </View>
      </TouchableWithoutFeedback>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  up: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  down: {
    flex: 7,//70% of column
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    color: COLOR_PINK_MEDIUM,
    textAlign: 'center',
    width: 400,
    fontSize: 23
  },
  textInputContainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 20,
    backgroundColor: 'white'//a = alpha = opacity
  },
  textInputContainer1: {
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: 'white'//a = alpha = opacity
  },
  textInput: {
    width: 280,
    height: 45,
    color: '#000',
    borderBottomWidth: 2
  },
  loginButton: {
    width: 250,
    height: 45,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(23, 84, 141)'
  },
  loginButtonTitle: {
    fontSize: 18,
    color: 'white'
  },
  line: {
    height: 1,
    flex: 2,
    backgroundColor: 'black'
  },
  textOR: {
    flex: 1,
    textAlign: 'center'
  },
  divider: {
    flexDirection: 'row',
    height: 40,
    width: 298,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
},
menu: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginLeft: 10,
    marginRight: 6
},
titleHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: "#000"
},
})
