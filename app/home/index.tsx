import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    Dimensions,
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthStore } from '../../store/authStore';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
    const router = useRouter();
    const { user } = useAuthStore();
    const [searchQuery, setSearchQuery] = useState('');

    const services = [
        { id: 1, name: 'Cari Dokter', icon: 'user-md', color: '#E3F2FD', iconColor: '#2196F3', route: '/home/search-doctor' },
        { id: 2, name: 'Poli Klinik', icon: 'hospital', color: '#E8F5E9', iconColor: '#4CAF50', route: '/home/search-doctor' }, // Redirect to search for now
        { id: 3, name: 'Jadwal', icon: 'calendar-alt', color: '#FFF3E0', iconColor: '#FF9800', route: '/home/history' }, // Redirect to history
        { id: 4, name: 'Info Bed', icon: 'procedures', color: '#F3E5F5', iconColor: '#9C27B0', action: () => Alert.alert('Info', 'Fitur Info Bed belum tersedia.') },
    ];

    const quickActions = [
        {
            id: '1',
            doctorName: 'Dr. Budi Santoso',
            specialist: 'Spesialis Jantung',
            price: 'Rp 200.000',
        },
        {
            id: '2',
            doctorName: 'Dr. Siti Aminah',
            specialist: 'Spesialis Anak',
            price: 'Rp 150.000',
        }
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            {/* Header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.greeting}>Halo, {user?.name || 'Tamu'} 👋</Text>
                    <Text style={styles.subGreeting}>Semoga sehat selalu!</Text>
                </View>
                <View style={styles.headerIcons}>
                    <TouchableOpacity
                        style={styles.iconButton}
                        onPress={() => router.push('/home/notifications')}
                    >
                        <Ionicons name="notifications-outline" size={24} color="#333" />
                        <View style={styles.badge} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push('/home/profile')}>
                        <Image
                            source={{ uri: 'https://i.pravatar.cc/100' }}
                            style={styles.avatar}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <FontAwesome5 name="search" size={16} color="#999" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Cari dokter, spesialis, atau klinik..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>

                {/* BPJS Banner */}
                <View style={styles.bannerContainer}>
                    <View style={styles.bannerContent}>
                        <Text style={styles.bannerTitle}>Lengkapi Data Diri</Text>
                        <Text style={styles.bannerText}>Pastikan data BPJS dan rekam medis Anda terupdate untuk pelayanan lebih cepat.</Text>
                        <TouchableOpacity
                            style={styles.bannerButton}
                            onPress={() => router.push('/home/edit-profile')}
                        >
                            <Text style={styles.bannerButtonText}>Perbarui Sekarang</Text>
                        </TouchableOpacity>
                    </View>
                    <FontAwesome5 name="file-medical" size={60} color="rgba(255,255,255,0.2)" style={styles.bannerIcon} />
                </View>

                {/* Main Services Grid */}
                <Text style={styles.sectionTitle}>Layanan Utama</Text>
                <View style={styles.gridContainer}>
                    {services.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.gridItem}
                            onPress={() => item.route ? router.push(item.route) : item.action && item.action()}
                        >
                            <View style={[styles.gridIconContainer, { backgroundColor: item.color }]}>
                                <FontAwesome5 name={item.icon} size={24} color={item.iconColor} />
                            </View>
                            <Text style={styles.gridLabel}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Quick Actions (Re-book) */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Pesan Lagi</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAll}>Lihat Semua</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    {quickActions.map((item) => (
                        <View key={item.id} style={styles.doctorCard}>
                            <View style={styles.doctorInfo}>
                                <FontAwesome5 name="user-md" size={32} color="#2196F3" style={styles.doctorAvatar} />
                                <View>
                                    <Text style={styles.doctorName}>{item.doctorName}</Text>
                                    <Text style={styles.doctorSpecialist}>{item.specialist}</Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                style={styles.bookButton}
                                onPress={() => router.push({ pathname: '/home/book-appointment', params: { ...item } })}
                            >
                                <Text style={styles.bookButtonText}>Pesan</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                {/* Health Articles / Info (Placeholder) */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Info Kesehatan</Text>
                </View>
                <View style={styles.articleCard}>
                    <Image
                        source={{ uri: 'https://img.freepik.com/free-vector/health-check-concept-illustration_114360-2646.jpg' }}
                        style={styles.articleImage}
                    />
                    <View style={styles.articleContent}>
                        <Text style={styles.articleTitle}>Pentingnya Check-up Rutin</Text>
                        <Text style={styles.articleDesc}>Deteksi dini penyakit dengan pemeriksaan kesehatan berkala.</Text>
                    </View>
                </View>

                <View style={{ height: 40 }} />
            </ScrollView>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        paddingTop: 10,
    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    subGreeting: {
        fontSize: 14,
        color: '#666',
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    iconButton: {
        padding: 8,
    },
    badge: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'red',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    content: {
        paddingHorizontal: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 24,
    },
    searchIcon: {
        marginRight: 12,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    bannerContainer: {
        backgroundColor: '#2196F3',
        borderRadius: 16,
        padding: 20,
        marginBottom: 24,
        flexDirection: 'row',
        overflow: 'hidden',
        position: 'relative',
    },
    bannerContent: {
        flex: 1,
        zIndex: 1,
    },
    bannerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    bannerText: {
        fontSize: 14,
        color: '#E3F2FD',
        marginBottom: 16,
        lineHeight: 20,
    },
    bannerButton: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        alignSelf: 'flex-start',
    },
    bannerButtonText: {
        color: '#2196F3',
        fontWeight: 'bold',
        fontSize: 12,
    },
    bannerIcon: {
        position: 'absolute',
        right: -10,
        bottom: -10,
        transform: [{ rotate: '-15deg' }],
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    gridItem: {
        width: (width - 60) / 2, // 2 columns
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#eee',
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.05,
        // shadowRadius: 4,
        // elevation: 2,
    },
    gridIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    gridLabel: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    seeAll: {
        color: '#2196F3',
        fontWeight: '500',
    },
    horizontalScroll: {
        marginBottom: 24,
        overflow: 'visible',
    },
    doctorCard: {
        width: 200,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        marginRight: 16,
        borderWidth: 1,
        borderColor: '#eee',
    },
    doctorInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        gap: 12,
    },
    doctorAvatar: {
        width: 40,
        textAlign: 'center',
    },
    doctorName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    doctorSpecialist: {
        fontSize: 12,
        color: '#666',
    },
    bookButton: {
        backgroundColor: '#E3F2FD',
        paddingVertical: 8,
        borderRadius: 8,
        alignItems: 'center',
    },
    bookButtonText: {
        color: '#2196F3',
        fontWeight: 'bold',
        fontSize: 12,
    },
    articleCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#eee',
        overflow: 'hidden',
    },
    articleImage: {
        width: 100,
        height: 100,
    },
    articleContent: {
        flex: 1,
        padding: 12,
        justifyContent: 'center',
    },
    articleTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    articleDesc: {
        fontSize: 12,
        color: '#666',
    },
});
