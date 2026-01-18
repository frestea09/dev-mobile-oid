import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AppointmentSuccessScreen() {
    const router = useRouter();
    const mockOrderNumber = "ORD-20260120-123";

    const handleDownload = () => {
        Alert.alert("Berhasil", "QR Code berhasil diunduh ke galeri.");
    };

    const handleShare = () => {
        Alert.alert("Berhasil", "QR Code dikirim ke email Anda.");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>

                <View style={styles.successIcon}>
                    <Ionicons name="checkmark-circle" size={80} color="#4CAF50" />
                </View>

                <Text style={styles.title}>Pemesanan Berhasil!</Text>
                <Text style={styles.subtitle}>Tunjukkan QR Code ini di rumah sakit untuk verifikasi pendaftaran.</Text>

                <View style={styles.qrContainer}>
                    {/* Mock QR Code using a public API for demo purposes */}
                    <Image
                        source={{ uri: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${mockOrderNumber}` }}
                        style={styles.qrImage}
                    />
                    <Text style={styles.orderNumber}>No. Pesanan: {mockOrderNumber}</Text>
                </View>

                <View style={styles.alertBox}>
                    <FontAwesome5 name="info-circle" size={16} color="#856404" />
                    <Text style={styles.alertText}>QR Code ini hanya berlaku untuk satu kali pemesanan.</Text>
                </View>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.actionButton} onPress={handleDownload}>
                        <FontAwesome5 name="download" size={16} color="#2196F3" />
                        <Text style={styles.actionText}>Unduh QR Code</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
                        <FontAwesome5 name="envelope" size={16} color="#2196F3" />
                        <Text style={styles.actionText}>Kirim ke Email</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.homeButton} onPress={() => router.replace('/home')}>
                    <Text style={styles.homeButtonText}>Kembali ke Beranda</Text>
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
    content: {
        flex: 1,
        alignItems: 'center',
        padding: 24,
        justifyContent: 'center',
    },
    successIcon: {
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 32,
        paddingHorizontal: 20,
    },
    qrContainer: {
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        marginBottom: 32,
    },
    qrImage: {
        width: 200,
        height: 200,
        marginBottom: 16,
    },
    orderNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        letterSpacing: 1,
    },
    alertBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF3CD',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FFEEBA',
        marginBottom: 32,
        gap: 8,
    },
    alertText: {
        color: '#856404',
        fontSize: 12,
        flex: 1,
    },
    actions: {
        flexDirection: 'row',
        gap: 16,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#2196F3',
        gap: 8,
    },
    actionText: {
        color: '#2196F3',
        fontWeight: 'bold',
        fontSize: 14,
    },
    footer: {
        padding: 24,
    },
    homeButton: {
        backgroundColor: '#2196F3',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    homeButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
