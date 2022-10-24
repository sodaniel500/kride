import { View, Text, Image, ScrollView, SafeAreaView, StyleSheet, Pressable, TouchableOpacity, TextInput, handlePress } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';



const ResetPassword = () => {

  // const [email, setEmail] = useState()
  const [password, setPassword] = useState("")
  // const [showEmailIcon, setShowEmailIcon] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(true)

  const handlePassword = () => {
    setPasswordVisible(!passwordVisible)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View>
          <Image
            source={require('../assets/Reset.png')}
            resizeMode="cover"
            style={{ width: '100%', height: 360, alignSelf: 'center' }}
          />
        </View>

        <View style={{ marginHorizontal: 22 }}>
          <Text style={styles.bt}>
            Reset
          </Text>
          <Text style={styles.bt}>
            Password
          </Text>

            <View style={styles.TextInput}>
              <Ionicons name="md-lock-closed-outline" size={18} color="gray" />

              <TextInput
                placeholder='New Password'
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

               <View style={styles.TextInput}>
              <Ionicons name="md-lock-closed-outline" size={18} color="gray" />

              <TextInput
                placeholder='Confirm new password'
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

               <TouchableOpacity
            onPress={handlePress} style={{marginTop: 30,}}>
              <View style={styles.btn}>
                <Text style={{fontWeight: 'bold', fontSize: 15, color: 'white'}}>Submit</Text>
              </View>
            </TouchableOpacity>


          </View>
      </ScrollView>
    </SafeAreaView>

  )
}

export default ResetPassword

const styles = StyleSheet.create({
  bt: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#154354',

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
  },
  btn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 10,
   
    marginVertical: 20,
  },
})