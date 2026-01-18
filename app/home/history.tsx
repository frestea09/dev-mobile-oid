import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useBookingStore } from '../../store/bookingStore';

export default function HistoryScreen() {
    const { appointments } = useBookingStore();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Riwayat Janji Temu</Text>
            </View>

            <View style={styles.content}>
                {appointments.length === 0 ? (
                    <View style={styles.empty}>
                        <FontAwesome5 name="calendar-times" size={50} color="#ccc" />
                        <Text style={styles.emptyText}>Belum ada riwayat janji temu.</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    content: {
        padding: 20,
    },
    empty: {
        alignItems: 'center',
        paddingTop: 100,
    },
    emptyText: {
        marginTop: 16,
        color: '#999',
    },
    card: {
        padding: 16,
        borderRadius: 12,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#eee',
        marginBottom: 16,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    date: {
        marginTop: 8,
        color: '#666',
    },
    statusBadge: {
        marginTop: 12,
        backgroundColor: '#E3F2FD',
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    statusText: {
        color: '#2196F3',
        fontSize: 12,
        fontWeight: 'bold',
    },
});
