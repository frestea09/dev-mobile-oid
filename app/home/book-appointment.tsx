import { FontAwesome5 } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AppButton } from '../../components/atoms/AppButton';
import { ScreenHeader } from '../../components/molecules/ScreenHeader';
import { calendarDates, doctors, timeSlots } from '../../constants/demoData';
import { labels } from '../../constants/labels';
import { useAuthStore } from '../../store/authStore';
import { useBookingStore } from '../../store/bookingStore';
import { createAppointment } from '../../utils/booking';
import { getStringParam } from '../../utils/params';
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
    const hospital = getStringParam(params.hospital, fallbackDoctor.hospital);
    const doctor = {
        name: doctorName,
        specialist,
        location: hospital,
    };

    // Form State
    const [selectedDate, setSelectedDate] = useState(calendarDates[1]?.date ?? calendarDates[0]?.date ?? '');
    const [selectedTime, setSelectedTime] = useState('');
    const [userData, setUserData] = useState({
        name: user?.name || '',
        phone: user?.phone || '',
        bpjs: user?.bpjs || '',
        address: user?.address || ''
    });
    const [isEditing, setIsEditing] = useState(false);

    // Mock Calendar Dates
    const handleConfirm = () => {
        if (!selectedTime) {
            Alert.alert(labels.booking.attentionTitle, labels.booking.attentionMessage);
            return;
        }

        Alert.alert(
            labels.booking.confirmTitle,
            `${labels.booking.doctorLabel}: ${doctor.name}\n${labels.booking.dateLabel}: ${selectedDate}\n${labels.booking.timeLabel}: ${selectedTime}`,
            [
                { text: labels.booking.cancel, style: 'cancel' },
                {
                    text: labels.booking.confirm,
                    onPress: () => {
                        addAppointment(
                            createAppointment({
                                doctorName: doctor.name,
                                specialist: doctor.specialist,
                                hospital: doctor.location,
                                date: selectedDate,
                                time: selectedTime,
                            })
                        );
                        // Navigate to Success Screen
                        router.replace('/home/appointment-success');
                    }
                }
            ]
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScreenHeader title={labels.booking.headerTitle} onBack={() => router.back()} />

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
                    <Text style={styles.sectionTitle}>{labels.booking.selectDate}</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.calendarScroll}>
                        {calendarDates.map((item, index) => (
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
                    <Text style={styles.sectionTitle}>{labels.booking.selectTime}</Text>
                    <View style={styles.timeGrid}>
                        {timeSlots.map((time, index) => (
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
                </View>

                {/* Booking Summary Card */}
                <View style={styles.summaryCard}>
                    <Text style={styles.summaryTitle}>{labels.booking.summaryTitle}</Text>
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
                        <Text style={styles.summaryText}>{selectedTime || labels.booking.emptyTime}</Text>
                    </View>
                    <View style={styles.summaryRow}>
                        <FontAwesome5 name="map-marker-alt" size={14} color="#666" style={styles.summaryIcon} />
                        <Text style={styles.summaryText}>{doctor.location}</Text>
                    </View>
                </View>

            </ScrollView>

            <View style={styles.footer}>
                <AppButton label={labels.booking.confirmButton} onPress={handleConfirm} variant="success" />
            </View>
        </SafeAreaView>
    );
}
