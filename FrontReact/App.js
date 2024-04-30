import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ToastProvider } from 'react-native-toast-notifications';

import RegisterScreen from './screens/Register/RegisterScreen';
import LoginScreen from './screens/Login/LoginScreen';
import HomeScreen from './screens/Home/HomeScreen';
import UserContext from './Context/UserContext';

const Stack = createStackNavigator();

const App = () => {
  const [userEmail, setUserEmail] = useState(""); // Use the useState hook

  return (
    <UserContext.Provider value={{ userEmail, setUserEmail }}>
      <ToastProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ToastProvider>
    </UserContext.Provider>
  );
};

export default App;
