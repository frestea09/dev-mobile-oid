import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DoctorCard } from '../../components/organisms/DoctorCard';
import { homeServices, healthArticles, quickActions } from '../../constants/demoData';
import { labels } from '../../constants/labels';
import { styles } from './index.styles';
import { useAuthStore } from '../../store/authStore';

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
                <View>
                    <Text style={styles.greeting}>{labels.home.greeting(user?.name || labels.home.guestName)}</Text>
                    <Text style={styles.subGreeting}>{labels.home.subGreeting}</Text>
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
                        placeholder={labels.home.searchPlaceholder}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>

                {/* BPJS Banner */}
                <View style={styles.bannerContainer}>
                    <View style={styles.bannerContent}>
                        <Text style={styles.bannerTitle}>{labels.home.bannerTitle}</Text>
                        <Text style={styles.bannerText}>{labels.home.bannerDescription}</Text>
                        <TouchableOpacity
                            style={styles.bannerButton}
                            onPress={() => router.push('/home/edit-profile')}
                        >
                            <Text style={styles.bannerButtonText}>{labels.home.bannerButton}</Text>
                        </TouchableOpacity>
                    </View>
                    <FontAwesome5 name="file-medical" size={60} color="rgba(255,255,255,0.2)" style={styles.bannerIcon} />
                </View>

                {/* Main Services Grid */}
                <Text style={styles.sectionTitle}>{labels.home.mainServicesTitle}</Text>
                <View style={styles.gridContainer}>
                    {homeServices.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.gridItem}
                            onPress={() => (item.route ? router.push(item.route) : handleInfoBed())}
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
                    <Text style={styles.sectionTitle}>{labels.home.quickActionTitle}</Text>
                    <TouchableOpacity onPress={() => router.push('/home/history')}>
                        <Text style={styles.seeAll}>{labels.home.seeAll}</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    {quickActions.map((item) => (
                        <DoctorCard
                            key={item.id}
                            doctorName={item.doctorName}
                            specialist={item.specialist}
                            price={item.price}
                            actionLabel={labels.home.bookLabel}
                            onPress={() => router.push({ pathname: '/home/book-appointment', params: { ...item } })}
                            style={styles.quickActionCard}
                            variant="stacked"
                        />
                    ))}
                </ScrollView>

                {/* Health Articles / Info (Placeholder) */}
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
