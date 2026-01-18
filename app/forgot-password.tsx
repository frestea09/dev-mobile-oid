import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton } from '../components/atoms/AppButton';
import { ScreenHeader } from '../components/molecules/ScreenHeader';
import { labels } from '../constants/labels';
import { styles } from './forgot-password.styles';

export default function ForgotPasswordScreen() {
    const router = useRouter();
    const [email, setEmail] = useState('');

    const handleReset = () => {
        if (!email) {
            Alert.alert(labels.auth.forgotPasswordAlertTitle, labels.auth.forgotPasswordAlertMessage);
            return;
        }

        Alert.alert(
            labels.auth.forgotPasswordSuccessTitle,
            labels.auth.forgotPasswordSuccessMessage,
            [{ text: labels.auth.backToLogin, onPress: () => router.back() }]
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScreenHeader title={labels.auth.forgotPasswordTitle} onBack={() => router.back()} />

            <View style={styles.content}>
                <Text style={styles.description}>
                    {labels.auth.forgotPasswordDescription}
                </Text>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>{labels.auth.forgotPasswordEmailLabel}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={labels.auth.forgotPasswordEmailPlaceholder}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <AppButton label={labels.auth.forgotPasswordSendButton} onPress={handleReset} style={styles.submitButton} />
            </View>
        </SafeAreaView>
    );
}
