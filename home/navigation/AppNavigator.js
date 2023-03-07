import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../src/components/screens/LoginScreen';
import SignUpScreen from '../src/components/screens/SignUpScreen';
import RecoverPass from '../src/components/screens/RecoverPass';
const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false // hide headers
            }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={SignUpScreen} />
            <Stack.Screen name="ResetPass" component={RecoverPass} />
        </Stack.Navigator>
    );
};

export default AppNavigator;