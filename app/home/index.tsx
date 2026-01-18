import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DoctorCard } from '../../components/organisms/DoctorCard';
import { healthArticles, quickActions } from '../../constants/demoData';
import { labels } from '../../constants/labels';
import { useAuthStore } from '../../store/authStore';
import { styles } from './index.styles';

export default function HomeScreen() {
    const router = useRouter();
    const { user } = useAuthStore();
    const [searchQuery, setSearchQuery] = useState('');

    const handleInfoBed = () => Alert.alert(labels.home.infoBedTitle, labels.home.infoBedMessage);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.hospitalInfo}>
                    <View style={styles.logoContainer}>
                        <FontAwesome5 name="hospital-alt" size={24} color="#2196F3" />
                    </View>
                    <View>
                        <Text style={styles.hospitalName}>{labels.home.hospitalName}</Text>
                        <Text style={styles.greeting}>{labels.home.greeting(user?.name || labels.home.guestName)}</Text>
                    </View>
                </View>
                <View style={styles.headerIcons}>
                    <TouchableOpacity
                        style={styles.iconButton}
                        onPress={() => router.push('/home/notifications')}
                    >
                        <Ionicons name="notifications-outline" size={24} color="#333" />
                        <View style={styles.badge} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.iconButton}
                        onPress={() => router.push('/home/profile')}
                    >
                        <Ionicons name="settings-outline" size={24} color="#333" />
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
                        placeholder={labels.home.searchPlaceholder}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        onSubmitEditing={() => router.push({ pathname: '/home/search-doctor', params: { q: searchQuery } })}
                    />
                </View>

                {/* Main Feature Button (Unified) */}
                <View style={styles.mainFeatures}>
                    <TouchableOpacity
                        style={[styles.featureCard, styles.featureBooking, { flex: 1, minHeight: 120 }]}
                        onPress={() => router.push('/home/search-doctor')}
                    >
                        <View style={[styles.featureIconContainer, { backgroundColor: 'rgba(255,255,255,0.2)' }]}>
                            <FontAwesome5 name="user-md" size={36} color="#fff" />
                        </View>
                        <Text style={[styles.featureLabel, { fontSize: 18, fontWeight: 'bold' }]}>{labels.home.bookingButton}</Text>
                        <Text style={[styles.featureLabel, { fontSize: 13, opacity: 0.9, marginTop: 4, fontWeight: 'normal' }]}>Cepat, Mudah & Tanpa Antri</Text>
                    </TouchableOpacity>
                </View>

                {/* New Feature Grid (Smaller icons) */}
                <View style={[styles.mainFeatures, { marginTop: -15 }]}>
                    <TouchableOpacity
                        style={[styles.featureCard, { backgroundColor: '#FFD54F', minHeight: 80, flex: 1 }]}
                        onPress={() => router.push('/home/help-center')}
                    >
                        <FontAwesome5 name="question-circle" size={24} color="#fff" />
                        <Text style={[styles.featureLabel, { fontSize: 13, marginTop: 8 }]}>{labels.home.helpCenter}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.featureCard, { backgroundColor: '#4DB6AC', minHeight: 80, flex: 1 }]}
                        onPress={() => router.push('/home/help-center')}
                    >
                        <FontAwesome5 name="id-badge" size={24} color="#fff" />
                        <Text style={[styles.featureLabel, { fontSize: 13, marginTop: 8 }]}>BPJS Hub</Text>
                    </TouchableOpacity>
                </View>

                {/* BPJS Status Banner */}
                <View style={styles.bpjsStatusBanner}>
                    <View style={styles.bpjsStatusInfo}>
                        <FontAwesome5 name="id-card" size={24} color="#2E7D32" />
                        <View style={styles.bpjsStatusTextContainer}>
                            <Text style={styles.bpjsStatusLabel}>{labels.home.bpjsStatusLabel}</Text>
                            <Text style={styles.bpjsActiveText}>{labels.home.bpjsActiveStatus}</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.bpjsDetailButton}
                        onPress={() => router.push('/home/profile')}
                    >
                        <Text style={styles.bpjsDetailText}>{labels.home.seeAll}</Text>
                    </TouchableOpacity>
                </View>

                {/* Appointment Reminder Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>{labels.home.reminderTitle}</Text>
                </View>
                <View style={styles.reminderCard}>
                    <View style={styles.reminderDateBox}>
                        <Text style={styles.reminderDay}>19</Text>
                        <Text style={styles.reminderMonth}>JAN</Text>
                    </View>
                    <View style={styles.reminderInfo}>
                        <Text style={styles.reminderDoctor}>Dr. Budi Santoso</Text>
                        <Text style={styles.reminderTime}>Besok • 09:00 WIB</Text>
                    </View>
                    <View style={styles.reminderStatus}>
                        <View style={styles.statusDot} />
                        <Text style={styles.statusText}>Aktif</Text>
                    </View>
                </View>

                {/* Quick Actions (Pesan Ulang) */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>{labels.home.rebookTitle}</Text>
                    <TouchableOpacity onPress={() => router.push('/home/history')}>
                        <Text style={styles.seeAll}>{labels.home.seeAll}</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    {quickActions.map((item: any) => (
                        <DoctorCard
                            key={item.id}
                            doctorName={item.doctorName}
                            specialist={item.specialist}
                            rating={4.8} // Default for quick actions
                            location={item.hospital}
                            price={item.price}
                            actionLabel={labels.home.bookLabel}
                            onPress={() => router.push({ pathname: '/home/search-doctor/[id]' as any, params: { id: '1' } })}
                            style={styles.quickActionCard}
                            variant="stacked"
                        />
                    ))}
                </ScrollView>

                {/* Health Articles */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>{labels.home.healthInfoTitle}</Text>
                </View>
                {healthArticles.map((article) => (
                    <View key={article.id} style={styles.articleCard}>
                        <Image source={{ uri: article.image }} style={styles.articleImage} />
                        <View style={styles.articleContent}>
                            <Text style={styles.articleTitle}>{article.title}</Text>
                            <Text style={styles.articleDesc}>{article.description}</Text>
                        </View>
                    </View>
                ))}

                <View style={styles.bottomSpacer} />
            </ScrollView>
        </SafeAreaView>
    );
}
