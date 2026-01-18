import { FontAwesome5 } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { labels } from '../../constants/labels';
import { useAuthStore } from '../../store/authStore';
import { styles } from './index.styles';

export default function RegisterScreen() {
    const router = useRouter();
    const { login, register } = useAuthStore();

    // Form State
    const [formData, setFormData] = useState({
        nama: '',
        contact: '', // Email or Phone
        username: '',
        password: '',
        tgllahir: '', // YYYY-MM-DD
        kelamin: '', // 'L' or 'P'
        alamat: '',
        no_bpjs: '' // Optional
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (key: string, value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }));
        if (error) setError('');
    };

    const handleRegister = () => {
        // Basic Validation
        let errorMessage = '';
        if (!formData.nama.trim()) errorMessage = `${labels.auth.fullNameLabel} harus diisi.`;
        else if (!formData.contact.trim()) errorMessage = `${labels.auth.contactLabel} harus diisi.`;
        else if (!formData.username.trim()) errorMessage = `${labels.auth.usernameLabel} harus diisi.`;
        else if (!formData.password || formData.password.length < 6) errorMessage = labels.auth.passwordHint;
        else if (!formData.tgllahir.trim()) errorMessage = `${labels.auth.birthDateLabel} harus diisi.`;
        else if (!formData.kelamin) errorMessage = `Pilih ${labels.auth.genderLabel}.`;
        else if (!formData.alamat.trim()) errorMessage = `${labels.auth.addressLabel} harus diisi.`;

        if (errorMessage) {
            setError(errorMessage);
            Alert.alert(labels.auth.registerErrorTitle, errorMessage);
            return;
        }

        setError('');
        setLoading(true);

        // Simulate API Call
        // Simulate API Call
        setTimeout(() => {
            setLoading(false);

            // Register user to store (simulate DB)
            register({
                name: formData.nama,
                email: formData.contact.includes('@') ? formData.contact : '',
                phone: !formData.contact.includes('@') ? formData.contact : '08123456789',
                bpjs: formData.no_bpjs,
                address: formData.alamat,
                birthDate: formData.tgllahir,
                gender: formData.kelamin,
                username: formData.username,
                password: formData.password
            });

            // Handle navigation based on platform
            if (Platform.OS === 'web') {
                window.alert(labels.auth.registerSuccessMessage);
                router.replace('/');
            } else {
                Alert.alert(
                    labels.auth.registerSuccessTitle,
                    labels.auth.registerSuccessMessage,
                    [
                        {
                            text: labels.auth.registerOkButton,
                            onPress: () => router.replace('/')
                        }
                    ]
                );
            }
        }, 1500);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>{labels.auth.registerTitle}</Text>

                <View style={styles.form}>
                    {/* Nama Lengkap */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>{labels.auth.fullNameLabel}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={labels.auth.fullNamePlaceholder}
                            placeholderTextColor="#999"
                            value={formData.nama}
                            onChangeText={(t) => handleChange('nama', t)}
                        />
                    </View>

                    {/* Email/Phone */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>{labels.auth.contactLabel}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={labels.auth.contactPlaceholder}
                            placeholderTextColor="#999"
                            value={formData.contact}
                            onChangeText={(t) => handleChange('contact', t)}
                            autoCapitalize="none"
                            keyboardType="email-address"
                        />
                    </View>

                    {/* Username */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>{labels.auth.usernameLabel}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={labels.auth.usernamePlaceholder}
                            placeholderTextColor="#999"
                            value={formData.username}
                            onChangeText={(t) => handleChange('username', t)}
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Password */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>{labels.auth.registerPasswordLabel}</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                placeholder={labels.auth.registerPasswordPlaceholder}
                                placeholderTextColor="#999"
                                value={formData.password}
                                onChangeText={(t) => handleChange('password', t)}
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
                        <Text style={styles.hint}>{labels.auth.passwordHint}</Text>
                    </View>

                    {/* Tanggal Lahir (Simple Text for now) */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>{labels.auth.birthDateLabel}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={labels.auth.birthDatePlaceholder}
                            placeholderTextColor="#999"
                            value={formData.tgllahir}
                            onChangeText={(t) => handleChange('tgllahir', t)}
                        />
                    </View>

                    {/* Jenis Kelamin */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>{labels.auth.genderLabel}</Text>
                        <View style={styles.genderContainer}>
                            <TouchableOpacity
                                style={[styles.genderButton, formData.kelamin === 'L' && styles.genderButtonActive]}
                                onPress={() => handleChange('kelamin', 'L')}
                            >
                                <FontAwesome5 name="male" size={20} color={formData.kelamin === 'L' ? '#fff' : '#666'} />
                                <Text style={[styles.genderText, formData.kelamin === 'L' && styles.genderTextActive]}>
                                    {labels.auth.maleLabel}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.genderButton, formData.kelamin === 'P' && styles.genderButtonActive]}
                                onPress={() => handleChange('kelamin', 'P')}
                            >
                                <FontAwesome5 name="female" size={20} color={formData.kelamin === 'P' ? '#fff' : '#666'} />
                                <Text style={[styles.genderText, formData.kelamin === 'P' && styles.genderTextActive]}>
                                    {labels.auth.femaleLabel}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Alamat */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>{labels.auth.addressLabel}</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder={labels.auth.addressPlaceholder}
                            placeholderTextColor="#999"
                            value={formData.alamat}
                            onChangeText={(t) => handleChange('alamat', t)}
                            multiline
                        />
                    </View>

                    {/* BPJS (Optional) */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>{labels.auth.bpjsLabel}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={labels.auth.bpjsPlaceholder}
                            placeholderTextColor="#999"
                            value={formData.no_bpjs}
                            onChangeText={(t) => handleChange('no_bpjs', t)}
                            keyboardType="number-pad"
                        />
                    </View>

                </View>

                {error ? (
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>{error}</Text>
                    </View>
                ) : null}

                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={handleRegister}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.registerButtonText}>{labels.auth.registerButton}</Text>
                    )}
                </TouchableOpacity>

                <Link href="/" asChild>
                    <TouchableOpacity style={styles.loginLink}>
                        <Text style={styles.loginLinkText}>
                            {labels.auth.existingAccountPrompt} {labels.auth.loginButton}.
                        </Text>
                    </TouchableOpacity>
                </Link>
            </ScrollView>
        </SafeAreaView>
    );
}
