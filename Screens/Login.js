import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity, handlePress, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import { useState, useEffect } from 'react';

// const {data, setData} = React.useState({
//   Login: '',
//   // password: '',
//   check_textInputChange: false,
//   // secureTextEntry: true
// })

// const textInputChange = (val) => {
//   if(val.lenght != 0){
//     setData({
//       ...data,
//       email: val,
//       check_textInputChange:true
//     })
//   } else{
//     setData({
//       ...data,
//       email: val,
//       check_textInputChange:false
//     })
//   }
// }

const Login = ({ navigation }) => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState("")
  const [showEmailIcon, setShowEmailIcon] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(true)

  const handlePassword = () => {
    setPasswordVisible(!passwordVisible)
  }

  // useEffect(() => {
  //   console.log("Password:: ", password)
  // }, [password])

  useEffect(() => {
    // console.log("Email Value is: ", email)
    if (email !== "" && email !== undefined) {
      setShowEmailIcon(true)
    } else {
      setShowEmailIcon(false)
    }
  }, [email])
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Image
              source={require('../assets/login.png')}
              style={{ width: '90%', height: 360, alignSelf: 'center' }}
            />
          </View>

          <View style={{ marginHorizontal: 22 }}>
            <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#154354', }}>Login</Text>


            <View style={styles.TextInput}>
              <Feather name="at-sign" size={18} color="gray" />
              <TextInput
                placeholder='Email ID'
                style={{flex:1, paddingLeft: 10, color: '#05375a' }}
                autoCapitalize='none'
                onChangeText={(val) => setEmail(val)} />
               
              {showEmailIcon && (
                <Feather name="check-circle" size={24} color="black"
                  style={styles.got}
                />
              )}

            </View>


            <View style={styles.TextInput}>
              <Ionicons name="md-lock-closed-outline" size={18} color="gray" />

              <TextInput
                placeholder='Password'
                style={{ flex: 1, paddingLeft: 10, color: '#05375a' }}
                autoCapitalize='none'
                secureTextEntry={passwordVisible}
                onChangeText={(val) => setPassword(val)}
              />

              <TouchableOpacity onPress={handlePassword}>
              {passwordVisible ?
                <Feather name="eye-off" size={24} color="gray"
                style={styles.got} />
                :
                <Feather name="eye" size={24} color="gray"
                style={styles.got} />
              }
              </TouchableOpacity>
            </View>

            <View style={{ alignSelf: 'flex-end', marginTop: 25 }}>
              <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <View >
                  <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 15, left: 2 }}>Forgot Password?</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 10, }} >
              <TouchableOpacity onPress={handlePress}>
                <View style={styles.btn}>
                  <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
              <View>
                <Text style={{ width: 50, textAlign: 'center', color: 'gray' }}>OR</Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
            </View>

            <View style={{ marginTop: 10 }}>
              <TouchableOpacity onPress={handlePress}>
                <View style={styles.bt}>
                  <AntDesign name="google" size={24} color="#A9CCE3" right={10}
                    style={{ right: 70 }} />
                  <Text style={{ color: '#85929E', fontWeight: 'bold', fontSize: 15 }}>Login with Google</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', marginVertical: 15, alignSelf: 'center' }}>
              <Text style={{ color: 'gray' }}>New to Logistics?</Text>
              <TouchableOpacity onPress={handlePress}>
                <Text style={{ color: 'blue', left: 5 }}>Register</Text>
              </TouchableOpacity>
            </View>


          </View>
        </ScrollView>
    </SafeAreaView>

  )
}

export default Login

const styles = StyleSheet.create({
  footer: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 45,
    bottom: 50

  },
  btn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  bt: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBEDEF',
    borderRadius: 10,
    flexDirection: 'row',
  },
  got: {
    color: 'gray',
    fontSize: 20,
    marginHorizontal: 8
  },
  TextInput: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    paddingVertical: 25,
    alignItems: 'center',
  }
})