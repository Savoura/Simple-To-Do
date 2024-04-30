import React, { useState, useContext } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text} from 'react-native';
import axios from 'axios';
import UserContext from '../../Context/UserContext.js';
import { useToast } from "react-native-toast-notifications";
import styles from "./LoginScreenStyles.js"

const LoginScreen = ({ navigation }) => {
    const { setUserEmail } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast();

    function showToast(message) {
        toast.show(message);
    }

    const handleLogin = async () => {
        if (!email || !password) {
            showToast('Please enter both email and password.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/login', {
                email,
                password,
            });
            setUserEmail(email);
            navigation.navigate('Home');
            showToast(response.data.message);
        } catch (error) {
            showToast('Failed to login. Please try again later.');
            console.error('Login error:', error);
        }
    };

    const handleRegisterNavigation = () => {
        navigation.navigate('Register');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />

            <TouchableOpacity onPress={handleRegisterNavigation} style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Don't have an account? Register</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
