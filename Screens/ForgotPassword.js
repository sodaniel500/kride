import { View, Text, SafeAreaView, TextInput, StyleSheet, Image, TouchableOpacity,  handlePress, ScrollView } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { useState,useEffect } from 'react';


const ForgotPassword = ({ navigation }) => {

const [email, setEmail] = useState()
const [showEmailIcon, setShowEmailIcon] = useState(false)

useEffect(() => {
  console.log("Email Value is: ", email)
  if (email !== "" && email !== undefined) {
    setShowEmailIcon(true)
  } else {
    setShowEmailIcon(false)
  }
}, [email])


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            source={require('../assets/Forgot.png')}
            style={{ width: '100%', height: 360, alignSelf: 'center' }}
          />
        </View>

        <View style={{ marginHorizontal: 22 }}>
          <Text style={styles.bt}>
            Forgot
          </Text>
          <Text style={styles.bt}>
            Password?
          </Text>

          <View style={{ marginTop: 10 }}>
            <Text style={{ color: 'gray' }}>
              Dont worry! it happens. Please enter the address associated with your account.
            </Text>
          </View>

          <View style={styles.got}>
            <Feather name="at-sign" size={18} color="gray" />
            <TextInput
              placeholder='Email ID / Mobile number'
              style={{ flex: 1,paddingLeft: 10, color: '#05375a' }}
              autoCapitalize='none'
              onChangeText={(val) => setEmail(val)} />

            {showEmailIcon && (
              <Feather name="check-circle" size={20} color="gray"
                style={styles.gt}
              />
            )}

          </View>
            <TouchableOpacity onPress={() => navigation.navigate('OTP')} style={{marginTop: 30,}}>
              <View style={styles.btn}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Submit</Text>
              </View>
            </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({

  bt: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#154354',
  
  },
  got: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    paddingVertical: 25,
    marginTop: 30,
    alignItems: 'center'
  },
  btn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 10,
    marginVertical: 30,
  },
  gt: {
    color: 'gray',
    fontSize: 20,
    marginHorizontal: 8
  }
})