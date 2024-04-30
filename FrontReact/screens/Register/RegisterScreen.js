import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

import { useToast } from 'react-native-toast-notifications';
import styles from './RegisterScreenStyles'; // Import styles from RegisterScreenStyles.js

const RegisterScreen = ({ navigation }) => {
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function showToast(message) {
    toast.show(message);
  }

  const handleRegister = async () => {
    if (!email || !name || !password) {
      showToast('Please fill all fields');
      return;
    }

    if (password.length < 6) {
      showToast('Password must be at least 6 characters');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/register', {
        email,
        name,
        password,
      });
      showToast(response.data.success);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Registration error:', error);
      showToast(error.response.data.error);
    }
  };

  const handleLoginNavigation = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Register" onPress={handleRegister} />

      <TouchableOpacity onPress={handleLoginNavigation} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
