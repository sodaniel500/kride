import { View, Text, Image, ScrollView, SafeAreaView, StyleSheet, Pressable, TouchableOpacity, TextInput, handlePress } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = ({ navigation }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onHandLeSignup = () => {
    if (email != "" && password !== "") {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => console.log('Signup Success'))
        .catch((err) => Alert.alert("SignIn error", err.message))
    }
  }

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            source={require('../assets/signUp.png')}
            resizeMode="cover"
            style={{ width: '100%', height: 360, alignSelf: 'center' }}
          />
        </View>
        <View style={{ marginHorizontal: 22 }}>
          <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#154354' }}>Sign Up</Text>

          <View style={styles.textInput}>
            <Feather name="at-sign" size={18} color="gray" />
            <TextInput
              placeholder='Email'
              style={{ paddingLeft: 10, color: '#05375a' }}
              autoCapitalize='none'
              keyboardType='email-address'
              // textContentType='emaillAddress'
              autoFocus={true}
              value={email}
              onChangeText={(text) => setEmail(text)} />

          </View>

          <View style={styles.textInput}>
            <Ionicons name="person-circle-outline" size={18} color="gray" />
            <TextInput
              placeholder='Full Name'
              style={{ paddingLeft: 10, color: '#05375a' }}
              autoCapitalize='none'
              />


          </View>


          <View style={styles.textInput}>
          <Ionicons name="md-lock-closed-outline" size={18} color="gray" />
            <TextInput
              placeholder='Password'
              style={{ paddingLeft: 10, color: '#05375a' }}
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry={true}
              textContentType='password'
              // value='password'h
              onChangeText={(text) => setPassword(text)} />


          </View>

          <View style={{ marginVertical: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
            <Text style={{ color: 'gray', right: 4 }}>
              By signing up, you agree to our
            </Text>
            <TouchableOpacity onPress={handlePress} >
              <Text style={{ color: 'blue', left: 1 }}>
                Terms & Conditions
              </Text>
            </TouchableOpacity>
            <Text style={{ color: 'gray', marginLeft: 6 }}>
              and
            </Text>
            <TouchableOpacity onPress={handlePress} >
              <Text style={{ color: 'blue', left: 1 }}>
                Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={onHandLeSignup}>
            <View style={styles.btn}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Continue</Text>
            </View>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', alignSelf: 'center', paddingVertical: 10 }}>
            <Text style={{ color: 'gray', right: 4 }}>
              Joined us before?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View >
                <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 15, }}>Login</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}
export default SignUp

const styles = StyleSheet.create({
  container: {
    // flex: 1
  },
  footer: {
    // backgroundColor: '#00FFFF',
    flex: 3,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    bottom: 85,
    paddingVertical: 45

  },
  btn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 10,
    marginVertical: 20,
  },
  textInput: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    alignItems: 'center'
  }
})