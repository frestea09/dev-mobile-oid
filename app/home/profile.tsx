import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthStore } from '../../store/authStore';

export default function ProfileScreen() {
    const router = useRouter();
    const { user, logout } = useAuthStore();
    const [refreshing, setRefreshing] = useState(false);

    const handleLogout = () => {
        Alert.alert(
            "Konfirmasi Keluar",
            "Apakah Anda yakin ingin keluar dari aplikasi?",
            [
                { text: "Batal", style: "cancel" },
                {
                    text: "Keluar",
                    style: "destructive",
                    onPress: () => {
                        logout();
                        router.replace('/');
                    }
                }
            ]
        );
    };

    const handleRefreshBPJS = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
            Alert.alert("Sukses", "Data BPJS berhasil diperbarui.");
        }, 2000);
    };

    const menuItems = [
        { icon: "user-edit", label: "Ubah Profil", onPress: () => router.push('/home/edit-profile') },
        { icon: "lock", label: "Ubah Kata Sandi", onPress: () => router.push('/home/change-password') },
        { icon: "file-medical", label: "Rekam Medis", onPress: () => Alert.alert("Info", "Fitur Rekam Medis akan segera hadir") },
        { icon: "credit-card", label: "Metode Pembayaran", onPress: () => { } },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>

                {/* Profile Header */}
                <View style={styles.header}>
                    <View style={styles.avatarContainer}>
                        <FontAwesome5 name="user" size={40} color="#2196F3" />
                    </View>
                    <Text style={styles.name}>{user?.name || 'Pengguna'}</Text>
                    <Text style={styles.phone}>{user?.phone || '0812-XXXX-XXXX'}</Text>
                </View>

                {/* Personal Info Card */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Data Pribadi</Text>
                    <View style={styles.card}>
                        <View style={styles.infoRow}>
                            <Text style={styles.label}>Tanggal Lahir</Text>
                            <Text style={styles.value}>{user?.birthDate || '-'}</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.infoRow}>
                            <Text style={styles.label}>Jenis Kelamin</Text>
                            <Text style={styles.value}>{user?.gender === 'L' ? 'Laki-laki' : 'Perempuan'}</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.infoRow}>
                            <Text style={styles.label}>Alamat</Text>
                            <Text style={styles.value}>{user?.address || '-'}</Text>
                        </View>
                    </View>
                </View>

                {/* BPJS Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Data BPJS</Text>
                        <TouchableOpacity onPress={handleRefreshBPJS} disabled={refreshing}>
                            {refreshing ? (
                                <Text style={styles.linkDisabled}>Memperbarui...</Text>
                            ) : (
                                <Text style={styles.link}>Perbarui Status</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.card, styles.bpjsCard]}>
                        <View style={styles.bpjsHeader}>
                            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Logo_BPJS_Kesehatan.png' }} style={styles.bpjsLogo} resizeMode="contain" />
                            <Text style={styles.bpjsStatus}>AKTIF</Text>
                        </View>
                        <Text style={styles.bpjsNumber}>{user?.bpjs || '0000 0000 0000 0000'}</Text>
                        <Text style={styles.bpjsName}>{user?.name?.toUpperCase()}</Text>
                    </View>
                </View>

                {/* Settings Menu */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Pengaturan</Text>
                    <View style={styles.menuContainer}>
                        {menuItems.map((item, index) => (
                            <TouchableOpacity key={index} style={styles.menuItem} onPress={item.onPress}>
                                <View style={styles.menuIcon}>
                                    <FontAwesome5 name={item.icon} size={20} color="#555" />
                                </View>
                                <Text style={styles.menuLabel}>{item.label}</Text>
                                <FontAwesome5 name="chevron-right" size={16} color="#ccc" />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Logout Button */}
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutText}>Keluar Aplikasi</Text>
                </TouchableOpacity>

                <View style={{ height: 40 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

import { Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    content: {
        padding: 24,
    },
    header: {
        alignItems: 'center',
        marginBottom: 32,
    },
    avatarContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#E3F2FD',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        borderWidth: 4,
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    phone: {
        fontSize: 16,
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
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    label: {
        color: '#666',
        fontSize: 14,
    },
    value: {
        color: '#333',
        fontSize: 14,
        fontWeight: '500',
    },
    divider: {
        height: 1,
        backgroundColor: '#f0f0f0',
        marginVertical: 4,
    },
    link: {
        color: '#2196F3',
        fontWeight: '500',
    },
    linkDisabled: {
        color: '#999',
    },
    bpjsCard: {
        backgroundColor: '#fff',
        borderLeftWidth: 5,
        borderLeftColor: '#4CAF50',
    },
    bpjsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    bpjsLogo: {
        width: 100,
        height: 30,
        // tintColor: '#000'
    },
    bpjsStatus: {
        backgroundColor: '#E8F5E9',
        color: '#4CAF50',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
        fontSize: 12,
        fontWeight: 'bold',
    },
    bpjsNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        letterSpacing: 2,
        marginBottom: 4,
    },
    bpjsName: {
        fontSize: 14,
        color: '#666',
    },
    menuContainer: {
        backgroundColor: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    menuIcon: {
        width: 32,
        alignItems: 'center',
        marginRight: 12,
    },
    menuLabel: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    logoutButton: {
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#FFEBEE',
        backgroundColor: '#FFEBEE',
        alignItems: 'center',
    },
    logoutText: {
        color: '#D32F2F',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
