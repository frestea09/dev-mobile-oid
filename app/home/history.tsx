import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { labels } from '../../constants/labels';
import { useBookingStore } from '../../store/bookingStore';
import { styles } from './history.styles';

export default function HistoryScreen() {
    const router = useRouter();
    const { appointments, cancelAppointment } = useBookingStore();
    const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

    const upcoming = appointments.filter(app => app.status === 'upcoming');
    const past = appointments.filter(app => app.status === 'completed' || app.status === 'cancelled');

    const handleCancel = (id: string) => {
        Alert.alert(
            labels.history.cancelConfirmTitle,
            labels.history.cancelConfirmMessage,
            [
                { text: labels.booking.cancel, style: 'cancel' },
                {
                    text: labels.history.cancelButton,
                    style: 'destructive',
                    onPress: () => cancelAppointment(id)
                }
            ]
        );
    };

    const handleReschedule = (app: any) => {
        router.push({
            pathname: '/home/book-appointment',
            params: { ...app, isReschedule: 'true' } as any
        });
    };

    const getStatusStyles = (status: string) => {
        switch (status) {
            case 'upcoming': return { bg: '#F1F8FF', text: '#2196F3' };
            case 'completed': return { bg: '#E8F5E9', text: '#4CAF50' };
            case 'cancelled': return { bg: '#FFF5F5', text: '#F44336' };
            default: return { bg: '#F1F3F5', text: '#666' };
        }
    };

    const renderCard = (app: any) => {
        const { bg, text } = getStatusStyles(app.status);
        return (
            <TouchableOpacity
                key={app.id}
                style={styles.card}
                onPress={() => router.push({
                    pathname: '/home/appointment-detail/[id]',
                    params: { id: app.id }
                })}
            >
                <View style={styles.cardHeader}>
                    <View style={styles.doctorInfo}>
                        <Text style={styles.cardTitle}>{app.doctorName}</Text>
                        <Text style={styles.cardSubTitle}>{app.specialist}</Text>
                    </View>
                    <View style={[styles.statusBadge, { backgroundColor: bg }]}>
                        <Text style={[styles.statusText, { color: text }]}>{app.status.toUpperCase()}</Text>
                    </View>
                </View>

                <View style={styles.cardDetails}>
                    <View style={styles.detailItem}>
                        <FontAwesome5 name="calendar-alt" size={12} color="#666" />
                        <Text style={styles.detailText}>{app.date}</Text>
                    </View>
                </View>

                {app.status === 'upcoming' ? (
                    <View style={styles.actionButtons}>
                        <TouchableOpacity
                            style={[styles.actionButton, styles.secondaryButton]}
                            onPress={(e) => {
                                e.stopPropagation();
                                handleCancel(app.id);
                            }}
                        >
                            <Text style={styles.secondaryButtonText}>{labels.history.cancelButton}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.actionButton, styles.primaryButton]}
                            onPress={(e) => {
                                e.stopPropagation();
                                handleReschedule(app);
                            }}
                        >
                            <Text style={styles.primaryButtonText}>{labels.history.changeButton}</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <>
                        {app.diagnosis && (
                            <View style={styles.diagnosisContainer}>
                                <Text style={styles.diagnosisLabel}>{labels.history.diagnosisLabel}</Text>
                                <Text style={styles.diagnosisText}>{app.diagnosis}</Text>
                            </View>
                        )}
                        <View style={[styles.actionButton, styles.secondaryButton, { borderStyle: 'dashed' }]}>
                            <Text style={styles.secondaryButtonText}>{labels.history.viewDetail}</Text>
                        </View>
                    </>
                )}
            </TouchableOpacity>
        );
    };

    const nextAppointment = upcoming.length > 0 ? upcoming.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0] : null;

    const renderReminder = () => {
        if (!nextAppointment) return null;
        return (
            <TouchableOpacity
                style={styles.reminderCard}
                onPress={() => router.push({
                    pathname: '/home/appointment-detail/[id]',
                    params: { id: nextAppointment.id }
                })}
            >
                <Text style={styles.reminderLabel}>{labels.history.upcomingSection}</Text>
                <Text style={styles.reminderDoctor}>{nextAppointment.doctorName}</Text>
                <Text style={styles.reminderSpecialist}>{nextAppointment.specialist}</Text>

                <View style={styles.reminderDetails}>
                    <View style={styles.reminderDetailItem}>
                        <FontAwesome5 name="calendar-alt" size={14} color="#fff" />
                        <Text style={styles.reminderDetailText}>{nextAppointment.date}</Text>
                    </View>
                    <View style={styles.reminderDetailItem}>
                        <FontAwesome5 name="map-marker-alt" size={14} color="#fff" />
                        <Text style={styles.reminderDetailText}>Lantai 1, Ruang 102</Text>
                    </View>
                </View>

                <View style={styles.reminderAction}>
                    <Text style={styles.reminderActionText}>{labels.history.viewDetail}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.header}>
                <Text style={styles.title}>{labels.history.title}</Text>
                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        style={[styles.tab, activeTab === 'upcoming' && styles.activeTab]}
                        onPress={() => setActiveTab('upcoming')}
                    >
                        <Text style={[styles.tabText, activeTab === 'upcoming' && styles.activeTabText]}>
                            {labels.history.upcomingSection}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tab, activeTab === 'past' && styles.activeTab]}
                        onPress={() => setActiveTab('past')}
                    >
                        <Text style={[styles.tabText, activeTab === 'past' && styles.activeTabText]}>
                            {labels.history.pastSection}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView
                style={styles.content}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {activeTab === 'upcoming' && renderReminder()}

                <Text style={styles.sectionLabel}>
                    {activeTab === 'upcoming' ? labels.history.upcomingSection : labels.history.pastSection}
                </Text>

                {activeTab === 'upcoming' ? (
                    upcoming.length === 0 ? (
                        <View style={styles.empty}>
                            <FontAwesome5 name="calendar-day" size={60} color="#E9ECEF" />
                            <Text style={styles.emptyText}>{labels.history.emptyUpcoming}</Text>
                        </View>
                    ) : upcoming.map(renderCard)
                ) : (
                    past.length === 0 ? (
                        <View style={styles.empty}>
                            <FontAwesome5 name="history" size={60} color="#E9ECEF" />
                            <Text style={styles.emptyText}>{labels.history.emptyPast}</Text>
                        </View>
                    ) : past.map(renderCard)
                )}
            </ScrollView>
        </SafeAreaView>
    );
}
