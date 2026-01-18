import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NotificationsScreen() {
    const router = useRouter();

    const notifications = [
        {
            id: '1',
            title: 'Jadwal Kontrol',
            message: 'Jangan lupa jadwal kontrol dengan Dr. Budi Santoso besok jam 09:00.',
            time: '1 jam yang lalu',
            read: false,
        },
        {
            id: '2',
            title: 'Pendaftaran Berhasil',
            message: 'Pendaftaran akun Anda berhasil. Silakan lengkapi data diri Anda.',
            time: '1 hari yang lalu',
            read: true,
        },
    ];

    const renderItem = ({ item }) => (
        <View style={[styles.item, !item.read && styles.unreadItem]}>
            <View style={styles.iconContainer}>
                <FontAwesome5 name="bell" size={20} color={item.read ? '#999' : '#2196F3'} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemMessage}>{item.message}</Text>
                <Text style={styles.itemTime}>{item.time}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <FontAwesome5 name="arrow-left" size={20} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Notifikasi</Text>
            </View>

            <FlatList
                data={notifications}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <FontAwesome5 name="bell-slash" size={40} color="#ccc" />
                        <Text style={styles.emptyText}>Belum ada notifikasi.</Text>
                    </View>
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    backButton: {
        paddingRight: 16,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    listContent: {
        padding: 16,
    },
    item: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        backgroundColor: '#fff',
    },
    unreadItem: {
        backgroundColor: '#E3F2FD',
        borderRadius: 8,
    },
    iconContainer: {
        marginRight: 16,
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    itemMessage: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    itemTime: {
        fontSize: 12,
        color: '#999',
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100,
    },
    emptyText: {
        marginTop: 16,
        color: '#999',
        fontSize: 16,
    },
});
