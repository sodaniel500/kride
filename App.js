import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignUp from './Screens/SignUp'
import Login from './Screens/Login'
import ForgotPassword from './Screens/ForgotPassword'
import OTP from './Screens/OTP'
import ResetPassword from './Screens/ResetPassword'
import HomeScreen from './Screens/HomeScreen'

const stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="SignUp" component={SignUp} />
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="HomeScreen" component={HomeScreen} />
        <stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <stack.Screen name="OTP" component={OTP} />
        <stack.Screen name="ResetPassword" component={ResetPassword} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
