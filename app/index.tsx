import { FontAwesome5 } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { labels } from '../constants/labels';
import { styles } from './index.styles';
import { useAuthStore } from '../store/authStore';

export default function LoginScreen() {
    const router = useRouter();
    const { login } = useAuthStore();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            setError(labels.auth.missingCredentials);
            return;
        }
        setError('');

        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);

            // Check against registered users for DEMO
            const registeredUsers = useAuthStore.getState().registeredUsers;
            const foundUser = registeredUsers.find(u =>
                (u.email === email || u.username === email) && u.password === password
            );

            if (foundUser) {
                const { password: _, ...userData } = foundUser;
                login(userData);
                router.replace('/home');
                return;
            }

            if (email === 'test' && password === '12345678') {
                // Mock user data login
                login({
                    name: labels.auth.demoUserName,
                    email: email,
                    phone: '08123456789',
                    bpjs: '00000000000',
                    address: labels.auth.demoAddress,
                    birthDate: '1990-01-01',
                    gender: 'Laki-laki'
                });
                router.replace('/home');
            } else {
                setError(labels.auth.invalidCredentials);
            }
        }, 1500);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{labels.auth.loginTitle}</Text>

                <View style={styles.form}>
                    <View style={styles.inputGroup}>
                        <TextInput
                            style={styles.input}
                            placeholder={labels.auth.usernameOrEmailPlaceholder}
                            placeholderTextColor="#999"
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                placeholder={labels.auth.passwordPlaceholder}
                                placeholderTextColor="#999"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPassword}
                                autoCapitalize="none"
                            />
                            <TouchableOpacity
                                onPress={() => setShowPassword(!showPassword)}
                                style={styles.eyeIcon}
                            >
                                <FontAwesome5 name={showPassword ? "eye" : "eye-slash"} size={20} color="#999" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.forgotPassword}
                    onPress={() => router.push('/forgot-password')}
                >
                    <Text style={styles.forgotPasswordText}>{labels.auth.forgotPassword}</Text>
                </TouchableOpacity>

                {error ? (
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>{error}</Text>
                    </View>
                ) : null}

                <TouchableOpacity
                    style={[styles.loginButton, loading && styles.loginButtonDisabled]}
                    onPress={handleLogin}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.loginButtonText}>{labels.auth.loginButton}</Text>
                    )}
                </TouchableOpacity>

                <Link href="/register" asChild>
                    <TouchableOpacity style={styles.registerLink}>
                        <Text style={styles.registerLinkText}>{labels.auth.registerPrompt}</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </SafeAreaView>
    );
}
