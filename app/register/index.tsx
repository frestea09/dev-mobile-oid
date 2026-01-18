import { FontAwesome5 } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthStore } from '../../store/authStore';

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
        if (!formData.nama.trim()) errorMessage = "Nama Lengkap harus diisi.";
        else if (!formData.contact.trim()) errorMessage = "Email atau Nomor Telepon harus diisi.";
        else if (!formData.username.trim()) errorMessage = "Username harus diisi.";
        else if (!formData.password || formData.password.length < 6) errorMessage = "Password minimal 6 karakter.";
        else if (!formData.tgllahir.trim()) errorMessage = "Tanggal Lahir harus diisi.";
        else if (!formData.kelamin) errorMessage = "Pilih Jenis Kelamin.";
        else if (!formData.alamat.trim()) errorMessage = "Alamat harus diisi.";

        if (errorMessage) {
            setError(errorMessage);
            Alert.alert("Gagal Daftar", errorMessage);
            return;
        }

        setError('');
        setLoading(true);

        // Simulate API Call
        setTimeout(() => {
            setLoading(false);

            // Register user to store (simulate DB)
            const successLogin = () => {
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
                router.replace('/');
            };

            Alert.alert(
                "Pendaftaran Berhasil",
                "Akun Anda telah berhasil dibuat. Silakan masuk dengan akun baru Anda.",
                [
                    {
                        text: "OK",
                        onPress: successLogin
                    }
                ]
            );
        }, 1500);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Daftar Akun Baru</Text>

                <View style={styles.form}>
                    {/* Nama Lengkap */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Nama Lengkap</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Masukkan Nama Lengkap"
                            placeholderTextColor="#999"
                            value={formData.nama}
                            onChangeText={(t) => handleChange('nama', t)}
                        />
                    </View>

                    {/* Email/Phone */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Email / No. HP</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Masukkan Email atau Nomor Telepon"
                            placeholderTextColor="#999"
                            value={formData.contact}
                            onChangeText={(t) => handleChange('contact', t)}
                            autoCapitalize="none"
                            keyboardType="email-address"
                        />
                    </View>

                    {/* Username */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Username</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Buat Username"
                            placeholderTextColor="#999"
                            value={formData.username}
                            onChangeText={(t) => handleChange('username', t)}
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Password */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                placeholder="Pilih Kata Sandi"
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
                        <Text style={styles.hint}>Minimal 6 karakter</Text>
                    </View>

                    {/* Tanggal Lahir (Simple Text for now) */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Tanggal Lahir</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="YYYY-MM-DD (Contoh: 1990-01-31)"
                            placeholderTextColor="#999"
                            value={formData.tgllahir}
                            onChangeText={(t) => handleChange('tgllahir', t)}
                        />
                    </View>

                    {/* Jenis Kelamin */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Jenis Kelamin</Text>
                        <View style={styles.genderContainer}>
                            <TouchableOpacity
                                style={[styles.genderButton, formData.kelamin === 'L' && styles.genderButtonActive]}
                                onPress={() => handleChange('kelamin', 'L')}
                            >
                                <FontAwesome5 name="male" size={20} color={formData.kelamin === 'L' ? '#fff' : '#666'} />
                                <Text style={[styles.genderText, formData.kelamin === 'L' && styles.genderTextActive]}>Laki-laki</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.genderButton, formData.kelamin === 'P' && styles.genderButtonActive]}
                                onPress={() => handleChange('kelamin', 'P')}
                            >
                                <FontAwesome5 name="female" size={20} color={formData.kelamin === 'P' ? '#fff' : '#666'} />
                                <Text style={[styles.genderText, formData.kelamin === 'P' && styles.genderTextActive]}>Perempuan</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Alamat */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Alamat Lengkap</Text>
                        <TextInput
                            style={[styles.input, { height: 80, textAlignVertical: 'top' }]}
                            placeholder="Masukkan Alamat Lengkap"
                            placeholderTextColor="#999"
                            value={formData.alamat}
                            onChangeText={(t) => handleChange('alamat', t)}
                            multiline
                        />
                    </View>

                    {/* BPJS (Optional) */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Nomor BPJS (Opsional)</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Masukkan Nomor BPJS"
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
                        <Text style={styles.registerButtonText}>Daftar</Text>
                    )}
                </TouchableOpacity>

                <Link href="/" asChild>
                    <TouchableOpacity style={styles.loginLink}>
                        <Text style={styles.loginLinkText}>Sudah punya akun? Masuk.</Text>
                    </TouchableOpacity>
                </Link>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    content: {
        padding: 24,
        paddingBottom: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
        marginTop: 10,
        textAlign: 'center',
    },
    form: {
        marginBottom: 24,
    },
    inputGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        padding: 14,
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
        padding: 14,
        fontSize: 16,
        color: '#333',
    },
    eyeIcon: {
        padding: 14,
    },
    hint: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
        marginLeft: 4,
    },
    genderContainer: {
        flexDirection: 'row',
        gap: 12,
    },
    genderButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        padding: 14,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        gap: 8,
    },
    genderButtonActive: {
        backgroundColor: '#2196F3',
        borderColor: '#2196F3',
    },
    genderText: {
        fontSize: 16,
        color: '#666',
        fontWeight: '500',
    },
    genderTextActive: {
        color: '#fff',
    },
    errorContainer: {
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: '#FFEBEE',
        padding: 12,
        borderRadius: 8,
    },
    errorText: {
        color: '#D32F2F',
        fontSize: 14,
        textAlign: 'center',
    },
    registerButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 24,
        shadowColor: '#4CAF50',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    registerButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginLink: {
        alignItems: 'center',
        padding: 12,
    },
    loginLinkText: {
        color: '#2196F3',
        fontSize: 14,
        fontWeight: '500',
    },
});
