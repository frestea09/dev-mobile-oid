import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { labels } from '../../constants/labels';
import { useBookingStore } from '../../store/bookingStore';
import { styles } from './history.styles';

export default function HistoryScreen() {
    const { appointments } = useBookingStore();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{labels.history.title}</Text>
            </View>

            <View style={styles.content}>
                {appointments.length === 0 ? (
                    <View style={styles.empty}>
                        <FontAwesome5 name="calendar-times" size={50} color="#ccc" />
                        <Text style={styles.emptyText}>{labels.history.emptyMessage}</Text>
                    </View>
                ) : (
                    appointments.map(app => (
                        <View key={app.id} style={styles.card}>
                            <Text style={styles.cardTitle}>{app.doctorName}</Text>
                            <Text>{app.specialist}</Text>
                            <Text style={styles.date}>{app.date} - {app.time}</Text>
                            <View style={styles.statusBadge}>
                                <Text style={styles.statusText}>{app.status.toUpperCase()}</Text>
                            </View>
                        </View>
                    ))
                )}
            </View>
        </SafeAreaView>
    );
}
