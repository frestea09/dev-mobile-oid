import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton } from '../../components/atoms/AppButton';
import { labels } from '../../constants/labels';
import { useBookingStore } from '../../store/bookingStore';
import { PlatformAlert } from '../../utils/platformAlert';
import { styles } from './appointment-success.styles';

export default function AppointmentSuccessScreen() {
    const router = useRouter();
    const { appointments } = useBookingStore();

    // Get the most recent appointment
    const appointment = appointments[0];

    if (!appointment) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Pemesanan tidak ditemukan.</Text>
                </View>
            </SafeAreaView>
        );
    }

    const handleDownload = () => {
        PlatformAlert.alert(labels.appointmentSuccess.downloadSuccessTitle, labels.appointmentSuccess.downloadSuccessMessage);
    };

    const handleShare = () => {
        PlatformAlert.alert(labels.appointmentSuccess.shareSuccessTitle, labels.appointmentSuccess.shareSuccessMessage);
    };

    // QR Data contains NIK and Order ID
    const qrData = JSON.stringify({
        nik: appointment.nik,
        orderId: appointment.id,
        doctor: appointment.doctorName,
        date: appointment.date,
    });

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
                        <Image
                            source={{ uri: `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(qrData)}` }}
                            style={styles.qrImage}
                        />
                    </View>

                    <Text style={styles.verifyText}>{labels.appointmentSuccess.verifyInstruction}</Text>

                    <View style={styles.verificationDetails}>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>{labels.appointmentSuccess.nikLabel}</Text>
                            <Text style={styles.infoValue}>{appointment.nik}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>{labels.appointmentSuccess.orderLabel}</Text>
                            <Text style={styles.infoValue}>{appointment.id}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>{labels.booking.doctorLabel}</Text>
                            <Text style={styles.infoValue}>{appointment.doctorName}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>{labels.booking.dateLabel}</Text>
                            <Text style={styles.infoValue}>{appointment.date}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Lokasi</Text>
                            <Text style={styles.infoValue}>{appointment.hospital}</Text>
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

