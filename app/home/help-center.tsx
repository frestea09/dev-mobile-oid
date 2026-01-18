import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { labels } from '../../constants/labels';

export default function HelpCenterScreen() {
    const router = useRouter();
    const [selectedId, setSelectedId] = React.useState<number | null>(null);

    const helpItems = [
        {
            id: 1,
            title: labels.helpCenter.registrationTitle,
            icon: 'info-circle',
            content: labels.helpCenter.registrationContent
        },
        {
            id: 2,
            title: labels.helpCenter.bpjsTitle,
            icon: 'id-card',
            content: labels.helpCenter.bpjsContent
        },
        {
            id: 3,
            title: labels.helpCenter.scheduleTitle,
            icon: 'calendar-alt',
            content: labels.helpCenter.scheduleContent
        },
        {
            id: 4,
            title: labels.helpCenter.contactTitle,
            icon: 'phone-alt',
            content: labels.helpCenter.contactContent
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => selectedId ? setSelectedId(null) : router.back()}>
                    <FontAwesome5 name="chevron-left" size={20} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{selectedId ? helpItems.find(i => i.id === selectedId)?.title : labels.home.helpCenter}</Text>
                <View style={{ width: 20 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                {!selectedId ? (
                    <>
                        <Text style={styles.description}>
                            Pusat bantuan RSUD Oto Iskandar Dinata. Silakan pilih kategori bantuan di bawah ini.
                        </Text>

                        {helpItems.map((item) => (
                            <TouchableOpacity key={item.id} style={styles.item} onPress={() => setSelectedId(item.id)}>
                                <View style={styles.iconContainer}>
                                    <FontAwesome5 name={item.icon} size={18} color="#2196F3" />
                                </View>
                                <Text style={styles.itemTitle}>{item.title}</Text>
                                <FontAwesome5 name="chevron-right" size={14} color="#ccc" />
                            </TouchableOpacity>
                        ))}

                        <View style={styles.contactBox}>
                            <Text style={styles.contactLabel}>{labels.helpCenter.urgentTitle}</Text>
                            <Text style={styles.urgentDescription}>{labels.helpCenter.urgentContent}</Text>
                            <TouchableOpacity style={styles.callButton}>
                                <FontAwesome5 name="phone-alt" size={16} color="#fff" />
                                <Text style={styles.callButtonText}>Hubungi 119</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : (
                    <View style={styles.detailContainer}>
                        <View style={styles.detailIconHeader}>
                            <FontAwesome5 name={helpItems.find(i => i.id === selectedId)?.icon || 'info'} size={32} color="#2196F3" />
                        </View>
                        <Text style={styles.detailText}>
                            {helpItems.find(i => i.id === selectedId)?.content}
                        </Text>
                        <TouchableOpacity style={styles.backLink} onPress={() => setSelectedId(null)}>
                            <Text style={styles.backLinkText}>Kembali ke Daftar</Text>
                        </TouchableOpacity>
                    </View>
                )}
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
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    content: {
        padding: 20,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 24,
        lineHeight: 20,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#F8FAFC',
        borderRadius: 12,
        marginBottom: 12,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#E3F2FD',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    itemTitle: {
        flex: 1,
        fontSize: 15,
        fontWeight: '500',
        color: '#333',
    },
    contactBox: {
        marginTop: 40,
        padding: 24,
        backgroundColor: '#F1F5F9',
        borderRadius: 20,
        alignItems: 'center',
    },
    contactLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 16,
    },
    callButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2196F3',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 30,
        gap: 8,
    },
    callButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    urgentDescription: {
        fontSize: 13,
        color: '#64748B',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 18,
    },
    detailContainer: {
        paddingVertical: 10,
    },
    detailIconHeader: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#E3F2FD',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        alignSelf: 'center',
    },
    detailText: {
        fontSize: 15,
        color: '#334155',
        lineHeight: 24,
    },
    backLink: {
        marginTop: 40,
        alignItems: 'center',
    },
    backLinkText: {
        color: '#2196F3',
        fontWeight: '600',
        fontSize: 14,
    },
});
