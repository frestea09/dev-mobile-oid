import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton } from '../../components/atoms/AppButton';
import { labels } from '../../constants/labels';
import { styles } from './appointment-success.styles';

export default function AppointmentSuccessScreen() {
    const router = useRouter();
    const mockOrderNumber = 'ORD-20260120-123';

    const handleDownload = () => {
        Alert.alert(labels.appointmentSuccess.downloadSuccessTitle, labels.appointmentSuccess.downloadSuccessMessage);
    };

    const handleShare = () => {
        Alert.alert(labels.appointmentSuccess.shareSuccessTitle, labels.appointmentSuccess.shareSuccessMessage);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>

                <View style={styles.successIcon}>
                    <Ionicons name="checkmark-circle" size={80} color="#4CAF50" />
                </View>

                <Text style={styles.title}>{labels.appointmentSuccess.title}</Text>
                <Text style={styles.subtitle}>{labels.appointmentSuccess.subtitle}</Text>

                <View style={styles.qrContainer}>
                    {/* Mock QR Code using a public API for demo purposes */}
                    <Image
                        source={{ uri: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${mockOrderNumber}` }}
                        style={styles.qrImage}
                    />
                    <Text style={styles.orderNumber}>
                        {labels.appointmentSuccess.orderLabel}: {mockOrderNumber}
                    </Text>
                </View>

                <View style={styles.alertBox}>
                    <FontAwesome5 name="info-circle" size={16} color="#856404" />
                    <Text style={styles.alertText}>{labels.appointmentSuccess.alertText}</Text>
                </View>

                <View style={styles.actions}>
                    <AppButton
                        label={labels.appointmentSuccess.downloadButton}
                        onPress={handleDownload}
                        variant="outline"
                        icon={<FontAwesome5 name="download" size={16} color="#2196F3" />}
                        style={styles.actionButton}
                    />
                    <AppButton
                        label={labels.appointmentSuccess.shareButton}
                        onPress={handleShare}
                        variant="outline"
                        icon={<FontAwesome5 name="envelope" size={16} color="#2196F3" />}
                        style={styles.actionButton}
                    />
                </View>
            </View>

            <View style={styles.footer}>
                <AppButton label={labels.appointmentSuccess.backHome} onPress={() => router.replace('/home')} />
            </View>
        </SafeAreaView>
    );
}
