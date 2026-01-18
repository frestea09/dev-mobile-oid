import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton } from '../../components/atoms/AppButton';
import { ScreenHeader } from '../../components/molecules/ScreenHeader';
import { labels } from '../../constants/labels';
import { styles } from './change-password.styles';

export default function ChangePasswordScreen() {
    const router = useRouter();
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSave = () => {
        if (!currentPassword || !newPassword || !confirmPassword) {
            Alert.alert(labels.changePassword.errorTitle, labels.changePassword.emptyMessage);
            return;
        }

        if (newPassword !== confirmPassword) {
            Alert.alert(labels.changePassword.errorTitle, labels.changePassword.mismatchMessage);
            return;
        }

        if (newPassword.length < 6) {
            Alert.alert(labels.changePassword.errorTitle, labels.changePassword.lengthMessage);
            return;
        }

        // Mock Success
        Alert.alert(labels.changePassword.successTitle, labels.changePassword.successMessage, [
            { text: labels.changePassword.ok, onPress: () => router.back() }
        ]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScreenHeader title={labels.changePassword.title} onBack={() => router.back()} />

            <View style={styles.content}>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>{labels.changePassword.currentPassword}</Text>
                    <TextInput
                        style={styles.input}
                        value={currentPassword}
                        onChangeText={setCurrentPassword}
                        secureTextEntry
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>{labels.changePassword.newPassword}</Text>
                    <TextInput
                        style={styles.input}
                        value={newPassword}
                        onChangeText={setNewPassword}
                        secureTextEntry
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>{labels.changePassword.confirmPassword}</Text>
                    <TextInput
                        style={styles.input}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                    />
                </View>

                <AppButton
                    label={labels.changePassword.saveButton}
                    onPress={handleSave}
                    style={styles.buttonSpacer}
                />
            </View>
        </SafeAreaView>
    );
}
