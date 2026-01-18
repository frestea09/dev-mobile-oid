import { FontAwesome5 } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenHeader } from '../../../components/molecules/ScreenHeader';
import { labels } from '../../../constants/labels';
import { useAuthStore } from '../../../store/authStore';
import { useBookingStore } from '../../../store/bookingStore';
import { styles } from './styles';

export default function AppointmentDetailScreen() {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const { appointments, cancelAppointment } = useBookingStore();
    const { user } = useAuthStore();

    const appointment = appointments.find(app => app.id === id);

    if (!appointment) {
        return (
            <SafeAreaView style={styles.container}>
                <ScreenHeader title={labels.history.qrDetailTitle} onBack={() => router.back()} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>{labels.searchDoctor.searchEmpty}</Text>
                </View>
            </SafeAreaView>
        );
    }

    const handleCancel = () => {
        Alert.alert(
            labels.history.cancelConfirmTitle,
            labels.history.cancelConfirmMessage,
            [
                { text: labels.booking.cancel, style: 'cancel' },
                {
                    text: labels.history.cancelButton,
                    style: 'destructive',
                    onPress: () => {
                        cancelAppointment(appointment.id);
                        router.back();
                    }
                }
            ]
        );
    };

    const handleDownload = () => {
        alert('QR Code telah disimpan ke Galeri.');
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScreenHeader title={labels.history.qrDetailTitle} onBack={() => router.back()} />

            <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Doctor Identity */}
                <View style={styles.doctorCard}>
                    <View style={styles.avatar}>
                        <FontAwesome5 name="user-md" size={30} color="#2196F3" />
                    </View>
                    <View style={styles.doctorInfo}>
                        <Text style={styles.doctorName}>{appointment.doctorName}</Text>
                        <Text style={styles.specialist}>{appointment.specialist}</Text>
                    </View>
                </View>

                {/* Schedule Info */}
                <View style={styles.infoSection}>
                    <View style={styles.infoRow}>
                        <FontAwesome5 name="calendar-alt" size={14} color="#666" />
                        <Text style={styles.infoLabel}>{labels.booking.dateLabel}</Text>
                        <Text style={styles.infoValue}>{appointment.date}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <FontAwesome5 name="hospital" size={14} color="#666" />
                        <Text style={styles.infoLabel}>Rumah Sakit</Text>
                        <Text style={styles.infoValue}>{appointment.hospital}</Text>
                    </View>
                </View>

                {/* QR Code Verification */}
                <View style={styles.qrSection}>
                    <Text style={styles.qrTitle}>QR Verification</Text>
                    <Text style={styles.qrSubtitle}>Tunjukkan QR ini kepada petugas pendaftaran saat tiba di rumah sakit.</Text>

                    <View style={styles.qrPlaceholder}>
                        <Image
                            source={{ uri: `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${user?.nik || appointment.id}` }}
                            style={{ width: 180, height: 180 }}
                        />
                    </View>

                    <View style={styles.nikBadge}>
                        <Text style={styles.nikText}>NIK: {user?.nik || '3201XXXXXXXXXXXX'}</Text>
                    </View>
                </View>

                {/* Actions */}
                <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.downloadButton} onPress={handleDownload}>
                        <FontAwesome5 name="download" size={16} color="#fff" />
                        <Text style={styles.downloadButtonText}>{labels.history.downloadQR}</Text>
                    </TouchableOpacity>

                    {appointment.status === 'upcoming' && (
                        <View style={styles.secondaryActions}>
                            <TouchableOpacity
                                style={styles.actionButton}
                                onPress={() => router.push({
                                    pathname: '/home/book-appointment',
                                    params: {
                                        id: appointment.id,
                                        name: appointment.doctorName,
                                        specialist: appointment.specialist,
                                        hospital: appointment.hospital
                                    }
                                })}
                            >
                                <FontAwesome5 name="edit" size={14} color="#2196F3" />
                                <Text style={styles.actionButtonText}>{labels.history.changeButton}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton} onPress={handleCancel}>
                                <FontAwesome5 name="trash" size={14} color="#F44336" />
                                <Text style={styles.actionButtonText}>{labels.history.cancelButton}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
