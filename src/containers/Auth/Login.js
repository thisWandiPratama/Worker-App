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
      phone: '831493023',
      password: '12345678'
    }
  }

  login = () => {
    const { phone, password } = this.state
    if (phone == 831493023 && password == 12345678) {
      this.props.navigation.replace('Dashboard')
    } else {
      alert('Phone dan Password Salah!')
    }
  }


  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.up}>
            <Text style={{ color: '#1E82D5', fontSize: 50, fontWeight: 'bold' }}>SIGN IN</Text>
            <Text style={{ fontSize: 18 }}>Enter your data</Text>
          </View>
          <View style={styles.down}>
            <View>
              <Text style={{ color: '#000', fontWeight: 'bold', paddingLeft: 0 }}>Phone</Text>
              <View style={styles.textInputContainer}>
                <TextInput
                  style={styles.textInput}
                  value={this.state.phone}
                  placeholder="Enter your phone"
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
                  value={this.state.password}
                  placeholder="Enter your password"
                  secureTextEntry={true}
                  onChangeText={(password) => this.setState({ password })}
                >
                </TextInput>
              </View>
              <Text style={{ color: '#1E82D5', fontWeight: 'bold', marginBottom: 20, marginTop: 20, textAlign: 'right' }}>Forgot Password?</Text>
            </View>
            <View>

              <TouchableOpacity style={styles.loginButton} onPress={() => this.login()}>
                <Text style={styles.loginButtonTitle}>LOGIN</Text>
              </TouchableOpacity>
              <View style={{ height: 100, marginTop: 40 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <Text>OR</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderRadius: 15, padding: 5 }}>
                    <Image style={{ height: 18, width: 18, resizeMode: 'contain', marginRight: 5 }} source={{ uri: 'https://i.ibb.co/Ctc1WG2/facebook.png' }} />
                    <Text>Facebook</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderRadius: 15, padding: 5, paddingRight: 20 }}>
                    <Image style={{ height: 18, width: 18, resizeMode: 'contain', marginRight: 5 }} source={{ uri: 'https://i.ibb.co/jypvnwF/google.png' }} />
                    <Text>Google</Text>
                  </View>
                </View>
                <View style={{ alignItems: 'center', width: '100%', marginTop: 50}}>
                  <Text>New here ? <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Register')} style={{ alignItems: 'center', borderBottomWidth: 1 }}><Text style={{ color: '#1E82D5', fontWeight: 'bold' }}>Sign Up</Text></TouchableOpacity></Text>
                </View>
              </View>
            </View>
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
  }
})
