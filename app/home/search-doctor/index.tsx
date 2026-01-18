import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SearchDoctorScreen() {
    const router = useRouter();

    const doctors = [
        { id: '1', name: 'Dr. Budi Santoso', specialist: 'Spesialis Jantung', price: 'Rp 200.000' },
        { id: '2', name: 'Dr. Siti Aminah', specialist: 'Spesialis Anak', price: 'Rp 150.000' },
        { id: '3', name: 'Dr. Andi Pratama', specialist: 'Spesialis Penyakit Dalam', price: 'Rp 180.000' },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.info}>
                <View style={styles.avatarContainer}>
                    <FontAwesome5 name="user-md" size={30} color="#2196F3" />
                </View>
                <View>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.specialist}>{item.specialist}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.bookButton}
                onPress={() => router.push({ pathname: '/home/book-appointment', params: item })}
            >
                <Text style={styles.bookButtonText}>Buat Janji</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Cari Dokter</Text>
            </View>

            <View style={styles.searchContainer}>
                <FontAwesome5 name="search" size={16} color="#999" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Nama dokter atau spesialis..."
                />
            </View>

            <FlatList
                data={doctors}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
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
        padding: 20,
        paddingBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        margin: 20,
        marginTop: 0,
        padding: 12,
        borderRadius: 12,
    },
    searchIcon: {
        marginRight: 12,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
    },
    list: {
        padding: 20,
        paddingTop: 0,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#eee',
        elevation: 2,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#E3F2FD',
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    specialist: {
        fontSize: 14,
        color: '#666',
    },
    price: {
        fontSize: 14,
        color: '#4CAF50',
        fontWeight: '500',
        marginTop: 4,
    },
    bookButton: {
        backgroundColor: '#2196F3',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    bookButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
});
