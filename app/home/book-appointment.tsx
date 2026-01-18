import { FontAwesome5 } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuthStore } from '../../store/authStore';

export default function BookAppointmentScreen() {
    const router = useRouter();
    const { doctorId } = useLocalSearchParams();
    const { user } = useAuthStore();

    // Mock Doctor Data (In real app, fetch by ID)
    const doctor = {
        name: 'Dr. Budi Santoso',
        specialist: 'Spesialis Jantung',
        location: 'RSUD O.I.D',
    };

    // Form State
    const [selectedDate, setSelectedDate] = useState('2026-01-20');
    const [selectedTime, setSelectedTime] = useState('');
    const [userData, setUserData] = useState({
        name: user?.name || '',
        phone: user?.phone || '',
        bpjs: user?.bpjs || '',
        address: user?.address || ''
    });
    const [isEditing, setIsEditing] = useState(false);

    // Mock Calendar Dates
    const DATES = [
        { date: '2026-01-19', day: 'Sen', label: '19' },
        { date: '2026-01-20', day: 'Sel', label: '20' },
        { date: '2026-01-21', day: 'Rab', label: '21' },
        { date: '2026-01-22', day: 'Kam', label: '22' },
        { date: '2026-01-23', day: 'Jum', label: '23' },
    ];

    // Mock Time Slots
    const TIMES = ['09:00', '09:30', '10:00', '10:30', '11:00', '13:00', '13:30'];

    const handleConfirm = () => {
        if (!selectedTime) {
            Alert.alert("Perhatian", "Mohon pilih jam praktek.");
            return;
        }

        Alert.alert(
            "Konfirmasi Pemesanan",
            `Dokter: ${doctor.name}\nTanggal: ${selectedDate}\nJam: ${selectedTime}`,
            [
                { text: "Batal", style: 'cancel' },
                {
                    text: "Konfirmasi",
                    onPress: () => {
                        // Navigate to Success Screen
                        router.replace('/home/appointment-success');
                    }
                }
            ]
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <FontAwesome5 name="arrow-left" size={20} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Buat Janji Temu</Text>
                <View style={{ width: 20 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>

                {/* Doctor Summary */}
                <View style={styles.doctorSummary}>
                    <View style={styles.avatarContainer}>
                        <FontAwesome5 name="user-md" size={40} color="#2196F3" />
                    </View>
                    <View>
                        <Text style={styles.docName}>{doctor.name}</Text>
                        <Text style={styles.docSpecialist}>{doctor.specialist}</Text>
                    </View>
                </View>

                {/* Date Selection (Calendar) */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Pilih Tanggal</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.calendarScroll}>
                        {DATES.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[styles.dateCard, selectedDate === item.date && styles.dateCardActive]}
                                onPress={() => setSelectedDate(item.date)}
                            >
                                <Text style={[styles.dayText, selectedDate === item.date && styles.textActive]}>{item.day}</Text>
                                <Text style={[styles.dateText, selectedDate === item.date && styles.textActive]}>{item.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Time Selection */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Pilih Waktu</Text>
                    <View style={styles.timeGrid}>
                        {TIMES.map((time, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[styles.timeSlot, selectedTime === time && styles.timeSlotActive]}
                                onPress={() => setSelectedTime(time)}
                            >
                                <Text style={[styles.timeText, selectedTime === time && styles.textActive]}>{time}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* User Info Confirmation */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Konfirmasi Data Diri</Text>
                        <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
                            <Text style={styles.editLink}>{isEditing ? 'Selesai' : 'Ubah'}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Nama Lengkap</Text>
                        <TextInput
                            style={[styles.input, !isEditing && styles.inputDisabled]}
                            value={userData.name}
                            editable={isEditing}
                            onChangeText={(t) => setUserData({ ...userData, name: t })}
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Nomor Telepon</Text>
                        <TextInput
                            style={[styles.input, !isEditing && styles.inputDisabled]}
                            value={userData.phone}
                            editable={isEditing}
                            onChangeText={(t) => setUserData({ ...userData, phone: t })}
                            keyboardType="phone-pad"
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Nomor BPJS</Text>
                        <TextInput
                            style={[styles.input, !isEditing && styles.inputDisabled]}
                            value={userData.bpjs}
                            editable={isEditing}
                            onChangeText={(t) => setUserData({ ...userData, bpjs: t })}
                            keyboardType="number-pad"
                        />
                    </View>
                </View>

                {/* Booking Summary Card */}
                <View style={styles.summaryCard}>
                    <Text style={styles.summaryTitle}>Ringkasan Pemesanan</Text>
                    <View style={styles.summaryRow}>
                        <FontAwesome5 name="user-md" size={14} color="#666" style={styles.summaryIcon} />
                        <Text style={styles.summaryText}>{doctor.name}</Text>
                    </View>
                    <View style={styles.summaryRow}>
                        <FontAwesome5 name="calendar-day" size={14} color="#666" style={styles.summaryIcon} />
                        <Text style={styles.summaryText}>{selectedDate}</Text>
                    </View>
                    <View style={styles.summaryRow}>
                        <FontAwesome5 name="clock" size={14} color="#666" style={styles.summaryIcon} />
                        <Text style={styles.summaryText}>{selectedTime || 'Belum pilih waktu'}</Text>
                    </View>
                    <View style={styles.summaryRow}>
                        <FontAwesome5 name="map-marker-alt" size={14} color="#666" style={styles.summaryIcon} />
                        <Text style={styles.summaryText}>{doctor.location}</Text>
                    </View>
                </View>

            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                    <Text style={styles.confirmButtonText}>Konfirmasi Janji Temu</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    backButton: {
        padding: 8,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    content: {
        padding: 20,
        paddingBottom: 100,
    },
    doctorSummary: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    avatarContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#E3F2FD',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    docName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    docSpecialist: {
        fontSize: 14,
        color: '#666',
    },
    section: {
        marginBottom: 24,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    calendarScroll: {
        paddingBottom: 8,
    },
    dateCard: {
        width: 60,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        marginRight: 12,
        borderWidth: 1,
        borderColor: '#eee',
    },
    dateCardActive: {
        backgroundColor: '#2196F3',
        borderColor: '#2196F3',
    },
    dayText: {
        fontSize: 12,
        color: '#666',
        marginBottom: 4,
    },
    dateText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    textActive: {
        color: '#fff',
    },
    timeGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    timeSlot: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#eee',
    },
    timeSlotActive: {
        backgroundColor: '#2196F3',
        borderColor: '#2196F3',
    },
    timeText: {
        fontSize: 14,
        color: '#333',
    },
    editLink: {
        color: '#2196F3',
        fontWeight: '500',
    },
    formGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        color: '#666',
        marginBottom: 6,
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        color: '#333',
    },
    inputDisabled: {
        backgroundColor: '#f5f5f5',
        color: '#666',
    },
    summaryCard: {
        backgroundColor: '#E3F2FD',
        borderRadius: 12,
        padding: 16,
    },
    summaryTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1565C0',
        marginBottom: 12,
    },
    summaryRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    summaryIcon: {
        width: 24,
        textAlign: 'center',
        marginRight: 8,
    },
    summaryText: {
        fontSize: 14,
        color: '#333',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    confirmButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
