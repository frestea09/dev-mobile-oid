import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton } from '../../components/atoms/AppButton';
import { ScreenHeader } from '../../components/molecules/ScreenHeader';
import { labels } from '../../constants/labels';
import { useAuthStore } from '../../store/authStore';
import { styles } from './edit-profile.styles';

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
        Alert.alert(labels.editProfile.successTitle, labels.editProfile.successMessage, [
            { text: labels.changePassword.ok, onPress: () => router.back() }
        ]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScreenHeader title={labels.editProfile.title} onBack={() => router.back()} />

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>{labels.editProfile.fullName}</Text>
                    <TextInput
                        style={styles.input}
                        value={formData.name}
                        onChangeText={(t) => setFormData({ ...formData, name: t })}
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>{labels.editProfile.phone}</Text>
                    <TextInput
                        style={styles.input}
                        value={formData.phone}
                        onChangeText={(t) => setFormData({ ...formData, phone: t })}
                        keyboardType="phone-pad"
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>{labels.editProfile.birthDate}</Text>
                    <TextInput
                        style={styles.input}
                        value={formData.birthDate}
                        onChangeText={(t) => setFormData({ ...formData, birthDate: t })}
                        placeholder={labels.editProfile.birthDatePlaceholder}
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>{labels.editProfile.gender}</Text>
                    <TextInput
                        style={styles.input}
                        value={formData.gender}
                        onChangeText={(t) => setFormData({ ...formData, gender: t })}
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>{labels.editProfile.address}</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        value={formData.address}
                        onChangeText={(t) => setFormData({ ...formData, address: t })}
                        multiline
                    />
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <AppButton label={labels.editProfile.saveButton} onPress={handleSave} variant="success" />
            </View>
        </SafeAreaView>
    );
}
