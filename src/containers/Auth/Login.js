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

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password : ''
    }
  }

  login = () => {
    const {email, password} = this.state
    if(email=='carsale@gmail.com' && password==12345678){
      this.props.navigation.replace('Dashboard')
    }else{
     alert('Email dan Password Salah!')
   }
  }

  render() {
    return (
      //Donot dismis Keyboard when click outside of TextInput
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.up}>
            <Image source={require('../../assets/logo.png')} style={{ height: 100, width: 100 }} />
          </View>
          <View style={styles.down}>
            <View>
              <Text style={{ color: 'white', fontWeight: 'bold', paddingLeft: 0 }}>Email/Username</Text>
              <View style={styles.textInputContainer}>
                <TextInput
                  style={styles.textInput}
                  textContentType='emailAddress'
                  keyboardType='email-address'
                  placeholder="Enter your email"
                  onChangeText = {(email) => this.setState({email})}
                >
                </TextInput>
              </View>

            </View>
            <View>
              <Text style={{color: 'white', fontWeight: 'bold' }}>Password</Text>
              <View style={styles.textInputContainer1}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter your password"
                  secureTextEntry={true}
                  onChangeText = {(password) => this.setState({password})}
                >
                </TextInput>
              </View>
              <Text style={{color: 'white', fontWeight: 'bold', marginBottom: 20}}>Forgot Password?</Text>
            </View>
            <View>

            <TouchableOpacity style={styles.loginButton} onPress = {() => this.login()}>
              <Text style={styles.loginButtonTitle}>LOGIN</Text>
            </TouchableOpacity>
            <View>
            <Text style={{color:'#7E4216'}}>You are not a member?</Text>
            </View>
            <TouchableOpacity onPress={() => console.log('Register was Pressed')} style={[styles.loginButton,{backgroundColor:'#7E4216'}]}>
              <Text style={styles.loginButtonTitle}>REGISTER</Text>
            </TouchableOpacity>
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
    backgroundColor: COLOR_PINK_LIGHT
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
    color: '#000'
  },
  loginButton: {
    width: 300,
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
