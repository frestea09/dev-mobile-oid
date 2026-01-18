import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton } from '../../components/atoms/AppButton';
import { labels } from '../../constants/labels';
import { useAuthStore } from '../../store/authStore';
import { PlatformAlert } from '../../utils/platformAlert';
import { styles } from './appointment-success.styles';

export default function AppointmentSuccessScreen() {
    const router = useRouter();
    const { user } = useAuthStore();
    const mockOrderNumber = 'ORD-20260120-123';
    const nik = user?.nik || '1234567890123456'; // Fallback for demo

    const handleDownload = () => {
        PlatformAlert.alert(labels.appointmentSuccess.downloadSuccessTitle, labels.appointmentSuccess.downloadSuccessMessage);
    };

    const handleShare = () => {
        PlatformAlert.alert(labels.appointmentSuccess.shareSuccessTitle, labels.appointmentSuccess.shareSuccessMessage);
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.hospitalHeader}>
                <View style={styles.logoPlaceholder}>
                    <FontAwesome5 name="hospital-alt" size={20} color="#2196F3" />
                </View>
                <Text style={styles.headerTitle}>{labels.appointmentSuccess.qrTitle}</Text>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <View style={styles.instructionCard}>
                    <Text style={styles.qrTitle}>{labels.appointmentSuccess.qrTitle}</Text>

                    <View style={styles.qrWrapper}>
                        {/* Mock QR Code using NIK for consistency */}
                        <Image
                            source={{ uri: `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${user?.nik || mockOrderNumber}` }}
                            style={styles.qrImage}
                        />
                    </View>

                    <Text style={styles.verifyText}>{labels.appointmentSuccess.verifyInstruction}</Text>

                    <View style={styles.verificationDetails}>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>{labels.appointmentSuccess.nikLabel}</Text>
                            <Text style={styles.infoValue}>{nik}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>{labels.appointmentSuccess.orderLabel}</Text>
                            <Text style={styles.infoValue}>{mockOrderNumber}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.alertBox}>
                    <FontAwesome5 name="check-circle" size={20} color="#2E7D32" />
                    <Text style={styles.alertText}>{labels.appointmentSuccess.validityReminder}</Text>
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
                        icon={<FontAwesome5 name="share-alt" size={16} color="#2196F3" />}
                        style={styles.actionButton}
                    />
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.homeButton} onPress={() => router.replace('/home')}>
                    <Text style={styles.homeButtonText}>{labels.appointmentSuccess.backHome}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

