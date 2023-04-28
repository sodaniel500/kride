import { View, Text, SafeAreaView, TextInput, StyleSheet, Image, TouchableOpacity, handlePress, ScrollView } from 'react-native'
import React from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { useState } from 'react';


const OTP = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            source={require('../assets/EnterOTP.png')}
            style={{ width: '100%', height: 360, alignSelf: 'center' }}
          />

          <View style={{ marginHorizontal: 22 }}>
            <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#154354', }}>Enter OTP</Text>

            <View style={{}}>
              <Text style={{ color: 'gray' }}>
                An 4 digit code has been sent to
              </Text>
              <Text style={{ color: 'gray' }}>
                +91 9083990020
              </Text>
            </View>

            <View>
              <OTPInputView
                style={{ width: '100%', height: 200 }}
                pinCount={4}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={(code) => {
                  console.log(`Code is ${code}, you are good to go!`)
                }}
              />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('ResetPassword')} style={{ marginTop: 60, }}>
              <View style={styles.btn}>
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>Submit</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default OTP

const styles = StyleSheet.create({
  TextInput: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    height: 70,
    width: 50,

  },
  btn: {
    height: 50,
    alignItems: 'center',
    backgroundColor: 'blue',
    marginTop: 20,
    justifyContent: 'center',
    marginVertical: 50,
    borderRadius: 8,
  },
  underlineStyleHighLighted: {
    borderColor: "black",
  },
  underlineStyleBase: {
    width: 50,
    height: 65,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
})