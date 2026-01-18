import { FontAwesome5 } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
            setError('Mohon isi email dan password');
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
                    name: 'Test User',
                    email: email,
                    phone: '08123456789',
                    bpjs: '00000000000',
                    address: 'Test Address',
                    birthDate: '1990-01-01',
                    gender: 'Laki-laki'
                });
                router.replace('/home');
            } else {
                setError('Email/Username atau password salah');
            }
        }, 1500);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Masuk ke Akun Anda</Text>

                <View style={styles.form}>
                    <View style={styles.inputGroup}>
                        <TextInput
                            style={styles.input}
                            placeholder="Masukkan Username atau Email"
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
                                placeholder="Masukkan Kata Sandi"
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
                    <Text style={styles.forgotPasswordText}>Lupa Password?</Text>
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
                        <Text style={styles.loginButtonText}>Masuk</Text>
                    )}
                </TouchableOpacity>

                <Link href="/register" asChild>
                    <TouchableOpacity style={styles.registerLink}>
                        <Text style={styles.registerLinkText}>Belum punya akun? Daftar di sini.</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    content: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 40,
        textAlign: 'center',
    },
    form: {
        marginBottom: 24,
    },
    inputGroup: {
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    passwordInput: {
        flex: 1,
        padding: 16,
        fontSize: 16,
        color: '#333',
    },
    eyeIcon: {
        padding: 16,
    },
    errorContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    errorText: {
        color: '#D32F2F',
        fontSize: 14,
    },
    loginButton: {
        backgroundColor: '#2196F3',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 24,
        shadowColor: '#2196F3',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    registerLink: {
        alignItems: 'center',
        padding: 12,
    },
    registerLinkText: {
        color: '#2196F3',
        fontSize: 14,
        fontWeight: '500',
    },
    forgotPassword: {
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    forgotPasswordText: {
        color: '#666',
        fontSize: 14,
    },
    loginButtonDisabled: {
        opacity: 0.7,
    },
});
