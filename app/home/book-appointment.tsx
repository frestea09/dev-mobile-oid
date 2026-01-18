import { FontAwesome5 } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenHeader } from '../../components/molecules/ScreenHeader';
import { doctors } from '../../constants/demoData';
import { labels } from '../../constants/labels';
import { useAuthStore } from '../../store/authStore';
import { useBookingStore } from '../../store/bookingStore';
import { createAppointment } from '../../utils/booking';
import { getStringParam } from '../../utils/params';
import { PlatformAlert } from '../../utils/platformAlert';
import { styles } from './book-appointment.styles';

export default function BookAppointmentScreen() {
    const router = useRouter();
    const { user } = useAuthStore();
    const { addAppointment } = useBookingStore();
    const params = useLocalSearchParams();

    // Mock Doctor Data (In real app, fetch by ID)
    const fallbackDoctor = doctors[0];
    const doctorName = getStringParam(params.name ?? params.doctorName, fallbackDoctor.name);
    const specialist = getStringParam(params.specialist, fallbackDoctor.specialist);
    const hospital = getStringParam(params.location || params.hospital, fallbackDoctor.location);
    const doctor = {
        name: doctorName,
        specialist,
        location: hospital,
    };

    // Dynamic Dates (Tomorrow onwards)
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfter = new Date(today);
    dayAfter.setDate(dayAfter.getDate() + 2);
    const dayAfterNext = new Date(today);
    dayAfterNext.setDate(dayAfterNext.getDate() + 3);

    const formatDate = (date: Date) => {
        const d = date.getDate().toString().padStart(2, '0');
        const m = (date.getMonth() + 1).toString().padStart(2, '0');
        const y = date.getFullYear();
        return `${y}-${m}-${d}`;
    };

    const getDayName = (date: Date) => {
        const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
        return days[date.getDay()];
    };

    const customCalendarDates = [
        { date: formatDate(tomorrow), day: getDayName(tomorrow), label: tomorrow.getDate().toString() },
        { date: formatDate(dayAfter), day: getDayName(dayAfter), label: dayAfter.getDate().toString() },
        { date: formatDate(dayAfterNext), day: getDayName(dayAfterNext), label: dayAfterNext.getDate().toString() },
    ];

    // Form State
    const [selectedDate, setSelectedDate] = useState(customCalendarDates[0].date);
    const [userData, setUserData] = useState({
        name: user?.name || '',
        phone: user?.phone || '',
        bpjs: user?.bpjs || '',
        address: user?.address || ''
    });
    const [isEditing, setIsEditing] = useState(false);

    const handleConfirm = () => {
        const confirmAction = () => {
            addAppointment(
                createAppointment({
                    doctorName: doctor.name,
                    specialist: doctor.specialist,
                    hospital: doctor.location,
                    date: selectedDate,
                    time: '--:--', // Placeholder or empty
                })
            );
            // Navigate to Success Screen
            router.replace('/home/appointment-success');
        };

        PlatformAlert.alert(
            labels.booking.confirmTitle,
            `${labels.booking.doctorLabel}: ${doctor.name}\n${labels.booking.dateLabel}: ${selectedDate}`,
            [
                { text: labels.booking.cancel, style: 'cancel' },
                {
                    text: labels.booking.confirm,
                    onPress: confirmAction
                }
            ]
        );
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScreenHeader title={labels.booking.headerTitle} onBack={() => router.back()} />

            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

                {/* Premium Doctor Header */}
                <View style={styles.doctorHeader}>
                    <View style={styles.avatarLarge}>
                        <FontAwesome5 name="user-md" size={40} color="#2196F3" />
                    </View>
                    <View style={styles.doctorInfo}>
                        <Text style={styles.docName}>{doctor.name}</Text>
                        <Text style={styles.docSpecialist}>{doctor.specialist}</Text>
                        <Text style={styles.docHospital}>{doctor.location}</Text>
                    </View>
                </View>

                {/* Date Selection (Calendar View Style) */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>{labels.booking.selectDate}</Text>
                        <Text style={{ fontSize: 11, color: '#94A3B8' }}>{labels.history.bookingRestriction}</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.calendarScroll}>
                        {customCalendarDates.map((item, index) => (
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

                {/* Personal Data Confirmation */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>{labels.booking.confirmPersonalData}</Text>
                        <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
                            <Text style={styles.editLink}>{isEditing ? labels.booking.done : labels.booking.edit}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>{labels.booking.fullName}</Text>
                        <TextInput
                            style={[styles.input, !isEditing && styles.inputDisabled]}
                            value={userData.name}
                            editable={isEditing}
                            onChangeText={(t) => setUserData({ ...userData, name: t })}
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>{labels.booking.phone}</Text>
                        <TextInput
                            style={[styles.input, !isEditing && styles.inputDisabled]}
                            value={userData.phone}
                            editable={isEditing}
                            onChangeText={(t) => setUserData({ ...userData, phone: t })}
                            keyboardType="phone-pad"
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>{labels.booking.bpjs}</Text>
                        <TextInput
                            style={[styles.input, !isEditing && styles.inputDisabled]}
                            value={userData.bpjs}
                            editable={isEditing}
                            onChangeText={(t) => setUserData({ ...userData, bpjs: t })}
                            keyboardType="number-pad"
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>{labels.booking.address}</Text>
                        <TextInput
                            style={[styles.input, !isEditing && styles.inputDisabled]}
                            value={userData.address}
                            editable={isEditing}
                            onChangeText={(t) => setUserData({ ...userData, address: t })}
                            multiline
                        />
                    </View>
                </View>

                {/* Booking Summary Card */}
                <View style={styles.summaryCard}>
                    <Text style={styles.summaryTitle}>{labels.booking.summaryTitle}</Text>
                    <View style={styles.summaryRow}>
                        <FontAwesome5 name="user-md" size={14} color="#1565C0" style={styles.summaryIcon} />
                        <Text style={styles.summaryText}>{doctor.name}</Text>
                    </View>
                    <View style={styles.summaryRow}>
                        <FontAwesome5 name="calendar-alt" size={14} color="#1565C0" style={styles.summaryIcon} />
                        <Text style={styles.summaryText}>{selectedDate}</Text>
                    </View>
                    <View style={styles.summaryRow}>
                        <FontAwesome5 name="map-marker-alt" size={14} color="#1565C0" style={styles.summaryIcon} />
                        <Text style={styles.summaryText}>{doctor.location}</Text>
                    </View>
                </View>

            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                    <Text style={styles.confirmButtonText}>{labels.booking.confirmButton}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
