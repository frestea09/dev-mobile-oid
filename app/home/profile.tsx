import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { profileMenuItems } from '../../constants/demoData';
import { labels } from '../../constants/labels';
import { useAuthStore } from '../../store/authStore';
import { PlatformAlert } from '../../utils/platformAlert';
import { styles } from './profile.styles';

export default function ProfileScreen() {
    const router = useRouter();
    const { user, logout } = useAuthStore();
    const [refreshing, setRefreshing] = useState(false);

    const performLogout = () => {
        logout();
        if (router.canDismiss()) {
            router.dismissAll();
        }
        router.replace('/');
    };

    const handleLogout = () => {
        PlatformAlert.alert(
            labels.profile.logoutTitle,
            labels.profile.logoutMessage,
            [
                { text: labels.profile.logoutCancel, style: 'cancel' },
                {
                    text: labels.profile.logoutConfirm,
                    style: "destructive",
                    onPress: performLogout
                }
            ]
        );
    };

    const handleRefreshBPJS = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
            PlatformAlert.alert(labels.profile.refreshSuccessTitle, labels.profile.refreshSuccessMessage);
        }, 2000);
    };

    const menuItems = profileMenuItems.map((item) => ({
        ...item,
        onPress: () => {
            if (item.route) {
                router.push(item.route as any);
                return;
            }
            if (item.id === 'medical-record') {
                PlatformAlert.alert(labels.profile.medicalRecordTitle, labels.profile.medicalRecordMessage);
                return;
            }
            PlatformAlert.alert(labels.profile.paymentTitle, labels.profile.paymentMessage);
        },
    }));

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>

                {/* Profile Header */}
                <View style={styles.header}>
                    <View style={styles.avatarContainer}>
                        <FontAwesome5 name="user-circle" size={80} color="#2196F3" />
                        <TouchableOpacity style={styles.editAvatarButton}>
                            <FontAwesome5 name="camera" size={14} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.name}>{user?.name || labels.profile.defaultName}</Text>
                    <Text style={styles.email}>{user?.email || 'user@example.com'}</Text>
                </View>

                {/* Profile Completion Alert */}
                {(!user?.phone || !user?.bpjs) && (
                    <View style={styles.bpjsAlertBox}>
                        <FontAwesome5 name="exclamation-circle" size={16} color="#856404" />
                        <Text style={styles.bpjsAlertText}>{labels.profile.bpjsAlert}</Text>
                    </View>
                )}

                {/* Personal Information */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>{labels.profile.personalDataTitle}</Text>
                        <TouchableOpacity
                            style={styles.editButton}
                            onPress={() => router.push('/home/edit-profile')}
                        >
                            <FontAwesome5 name="edit" size={14} color="#2196F3" />
                            <Text style={styles.editButtonText}>{labels.profile.editLabel}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoGrid}>
                        <View style={styles.infoCard}>
                            <Text style={styles.infoLabel}>{labels.profile.birthDate}</Text>
                            <Text style={styles.infoValue}>{user?.birthDate || labels.profile.emptyValue}</Text>
                        </View>
                        <View style={styles.infoCard}>
                            <Text style={styles.infoLabel}>{labels.profile.gender}</Text>
                            <Text style={styles.infoValue}>
                                {user?.gender === 'L' || user?.gender === labels.profile.male
                                    ? labels.profile.male
                                    : labels.profile.female}
                            </Text>
                        </View>
                        <View style={styles.infoCardFull}>
                            <Text style={styles.infoLabel}>{labels.profile.phone}</Text>
                            <Text style={styles.infoValue}>{user?.phone || labels.profile.emptyValue}</Text>
                        </View>
                        <View style={styles.infoCardFull}>
                            <Text style={styles.infoLabel}>{labels.profile.address}</Text>
                            <Text style={styles.infoValue}>{user?.address || labels.profile.emptyValue}</Text>
                        </View>
                    </View>
                </View>

                {/* BPJS Status Card */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>{labels.profile.bpjsTitle}</Text>
                    <View style={[styles.bpjsCardPremium, { borderLeftColor: user?.bpjs ? '#4CAF50' : '#F44336' }]}>
                        <View style={styles.bpjsTop}>
                            <Image
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Logo_BPJS_Kesehatan.png' }}
                                style={styles.bpjsLogoModern}
                                resizeMode="contain"
                            />
                            <View style={[styles.statusBadge, { backgroundColor: user?.bpjs ? '#E8F5E9' : '#FFEBEE' }]}>
                                <Text style={[styles.statusBadgeText, { color: user?.bpjs ? '#2E7D32' : '#D32F2F' }]}>
                                    {user?.bpjs ? labels.profile.bpjsActive : 'TIDAK TERDAFTAR'}
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.bpjsNumberLarge}>{user?.bpjs || '--------- ---------'}</Text>
                        <TouchableOpacity
                            style={styles.refreshBPJSButton}
                            onPress={handleRefreshBPJS}
                            disabled={refreshing}
                        >
                            <FontAwesome5 name="sync-alt" size={12} color="#666" style={refreshing ? styles.rotating : null} />
                            <Text style={styles.refreshBPJSText}>{refreshing ? labels.profile.bpjsUpdating : labels.profile.bpjsUpdate}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Security & Settings */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>{labels.profile.securityTitle}</Text>
                    <View style={styles.settingsGroup}>
                        <TouchableOpacity
                            style={styles.settingsItem}
                            onPress={() => router.push('/home/change-password')}
                        >
                            <View style={styles.settingsIconBox}>
                                <FontAwesome5 name="lock" size={18} color="#5C6BC0" />
                            </View>
                            <Text style={styles.settingsLabel}>{labels.profile.changePasswordLabel}</Text>
                            <FontAwesome5 name="chevron-right" size={14} color="#ccc" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.settingsItem} onPress={handleLogout}>
                            <View style={[styles.settingsIconBox, { backgroundColor: '#FFEBEE' }]}>
                                <FontAwesome5 name="sign-out-alt" size={18} color="#D32F2F" />
                            </View>
                            <Text style={[styles.settingsLabel, { color: '#D32F2F' }]}>{labels.profile.logout}</Text>
                            <FontAwesome5 name="chevron-right" size={14} color="#ccc" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.bottomSpacer} />
            </ScrollView>
        </SafeAreaView>
    );
}
