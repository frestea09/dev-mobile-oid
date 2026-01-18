import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthStore } from '../../store/authStore';

export default function EditProfileScreen() {
    const router = useRouter();
    const { user, updateProfile } = useAuthStore();

    const [formData, setFormData] = useState({
        name: user?.name || '',
        phone: user?.phone || '',
        address: user?.address || '',
        birthDate: user?.birthDate || '',
        gender: user?.gender || ''
    });

    const handleSave = () => {
        updateProfile(formData);
        Alert.alert("Sukses", "Profil berhasil diperbarui.", [
            { text: "OK", onPress: () => router.back() }
        ]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <FontAwesome5 name="arrow-left" size={20} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Edit Profil</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Nama Lengkap</Text>
                    <TextInput
                        style={styles.input}
                        value={formData.name}
                        onChangeText={(t) => setFormData({ ...formData, name: t })}
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Nomor Telepon</Text>
                    <TextInput
                        style={styles.input}
                        value={formData.phone}
                        onChangeText={(t) => setFormData({ ...formData, phone: t })}
                        keyboardType="phone-pad"
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Tanggal Lahir</Text>
                    <TextInput
                        style={styles.input}
                        value={formData.birthDate}
                        onChangeText={(t) => setFormData({ ...formData, birthDate: t })}
                        placeholder="Contoh: 31 Januari 1990"
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Jenis Kelamin</Text>
                    <TextInput
                        style={styles.input}
                        value={formData.gender}
                        onChangeText={(t) => setFormData({ ...formData, gender: t })}
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Alamat</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        value={formData.address}
                        onChangeText={(t) => setFormData({ ...formData, address: t })}
                        multiline
                    />
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>Simpan Perubahan</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    backButton: {
        paddingRight: 16,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    content: {
        padding: 20,
    },
    formGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        color: '#333',
    },
    textArea: {
        height: 80,
        textAlignVertical: 'top',
    },
    footer: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    saveButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
