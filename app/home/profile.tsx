import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { profileMenuItems } from '../../constants/demoData';
import { labels } from '../../constants/labels';
import { useAuthStore } from '../../store/authStore';
import { styles } from './profile.styles';

export default function ProfileScreen() {
    const router = useRouter();
    const { user, logout } = useAuthStore();
    const [refreshing, setRefreshing] = useState(false);

    const handleLogout = () => {
        Alert.alert(
            labels.profile.logoutTitle,
            labels.profile.logoutMessage,
            [
                { text: labels.profile.logoutCancel, style: 'cancel' },
                {
                    text: labels.profile.logoutConfirm,
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
            Alert.alert(labels.profile.refreshSuccessTitle, labels.profile.refreshSuccessMessage);
        }, 2000);
    };

    const menuItems = profileMenuItems.map((item) => ({
        ...item,
        onPress: () => {
            if (item.route) {
                router.push(item.route);
                return;
            }
            if (item.id === 'medical-record') {
                Alert.alert(labels.profile.medicalRecordTitle, labels.profile.medicalRecordMessage);
                return;
            }
            Alert.alert(labels.profile.paymentTitle, labels.profile.paymentMessage);
        },
    }));

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>

                {/* Profile Header */}
                <View style={styles.header}>
                    <View style={styles.avatarContainer}>
                        <FontAwesome5 name="user" size={40} color="#2196F3" />
                    </View>
                    <Text style={styles.name}>{user?.name || labels.profile.defaultName}</Text>
                    <Text style={styles.phone}>{user?.phone || labels.profile.defaultPhone}</Text>
                </View>

                {/* Personal Info Card */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>{labels.profile.personalDataTitle}</Text>
                    <View style={styles.card}>
                        <View style={styles.infoRow}>
                            <Text style={styles.label}>{labels.profile.birthDate}</Text>
                            <Text style={styles.value}>{user?.birthDate || labels.profile.emptyValue}</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.infoRow}>
                            <Text style={styles.label}>{labels.profile.gender}</Text>
                            <Text style={styles.value}>
                                {user?.gender === 'L' || user?.gender === labels.profile.male
                                    ? labels.profile.male
                                    : labels.profile.female}
                            </Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.infoRow}>
                            <Text style={styles.label}>{labels.profile.address}</Text>
                            <Text style={styles.value}>{user?.address || labels.profile.emptyValue}</Text>
                        </View>
                    </View>
                </View>

                {/* BPJS Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>{labels.profile.bpjsTitle}</Text>
                        <TouchableOpacity onPress={handleRefreshBPJS} disabled={refreshing}>
                            {refreshing ? (
                                <Text style={styles.linkDisabled}>{labels.profile.bpjsUpdating}</Text>
                            ) : (
                                <Text style={styles.link}>{labels.profile.bpjsUpdate}</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.card, styles.bpjsCard]}>
                        <View style={styles.bpjsHeader}>
                            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Logo_BPJS_Kesehatan.png' }} style={styles.bpjsLogo} resizeMode="contain" />
                            <Text style={styles.bpjsStatus}>{labels.profile.bpjsActive}</Text>
                        </View>
                        <Text style={styles.bpjsNumber}>{user?.bpjs || labels.profile.defaultBpjsNumber}</Text>
                        <Text style={styles.bpjsName}>{user?.name?.toUpperCase()}</Text>
                    </View>
                </View>

                {/* Settings Menu */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>{labels.profile.settingsTitle}</Text>
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
                    <Text style={styles.logoutText}>{labels.profile.logout}</Text>
                </TouchableOpacity>

                <View style={styles.bottomSpacer} />
            </ScrollView>
        </SafeAreaView>
    );
}
