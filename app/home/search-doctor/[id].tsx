import { FontAwesome5 } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { doctors } from '../../../constants/demoData';
import { labels } from '../../../constants/labels';
import { styles } from './[id].styles';

export default function DoctorDetailScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();

    const doctor = doctors.find((d) => d.id === id);

    if (!doctor) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <FontAwesome5 name="arrow-left" size={20} color="#333" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>{labels.searchDoctor.doctorDetailTitle}</Text>
                </View>
                <View style={[styles.content, { justifyContent: 'center', alignItems: 'center' }]}>
                    <Text>Dokter tidak ditemukan</Text>
                </View>
            </SafeAreaView>
        );
    }

    const handleBooking = () => {
        router.push({
            pathname: '/home/book-appointment',
            params: { ...doctor } as any,
        });
    };

    const handleAsk = () => {
        // Implement consultation logic or show alert
        alert('Fitur Tanya Dokter akan segera hadir.');
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <FontAwesome5 name="arrow-left" size={20} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{labels.searchDoctor.doctorDetailTitle}</Text>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <View style={styles.profileSection}>
                    <View style={styles.avatarContainer}>
                        <FontAwesome5 name="user-md" size={50} color="#2196F3" />
                    </View>
                    <Text style={styles.doctorName}>{doctor.name}</Text>
                    <Text style={styles.specialist}>{doctor.specialist}</Text>
                    <View style={styles.ratingBadge}>
                        <FontAwesome5 name="star" size={14} color="#FBC02D" solid />
                        <Text style={styles.ratingText}>{doctor.rating}</Text>
                        <Text style={styles.reviewCount}>{labels.searchDoctor.reviewCount(150)}</Text>
                    </View>
                </View>

                {/* About & Professional Info */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>{labels.searchDoctor.doctorDescription}</Text>
                    <View style={styles.aboutCard}>
                        <View style={styles.aboutItem}>
                            <FontAwesome5 name="info-circle" size={16} color="#2196F3" />
                            <View style={styles.aboutItemText}>
                                <Text style={styles.aboutItemValue}>{doctor.description}</Text>
                            </View>
                        </View>
                        <View style={styles.aboutItem}>
                            <FontAwesome5 name="graduation-cap" size={16} color="#4CAF50" />
                            <View style={styles.aboutItemText}>
                                <Text style={styles.aboutItemLabel}>{labels.searchDoctor.educationTitle}</Text>
                                <Text style={styles.aboutItemValue}>{(doctor as any).education || '-'}</Text>
                            </View>
                        </View>
                        <View style={styles.aboutItem}>
                            <FontAwesome5 name="briefcase" size={16} color="#FF9800" />
                            <View style={styles.aboutItemText}>
                                <Text style={styles.aboutItemLabel}>{labels.searchDoctor.experienceTitle}</Text>
                                <Text style={styles.aboutItemValue}>{(doctor as any).experience || '10+ Tahun'}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Patient Reviews Snippet */}
                <View style={styles.section}>
                    <View style={styles.reviewSummary}>
                        <Text style={styles.sectionTitle}>{labels.searchDoctor.reviewTitle}</Text>
                        <TouchableOpacity style={styles.seeAllLink}>
                            <Text style={styles.seeAllText}>{labels.searchDoctor.seeAllReviews}</Text>
                        </TouchableOpacity>
                    </View>
                    {((doctor as any).reviews || []).slice(0, 2).map((rev: any) => (
                        <View key={rev.id} style={styles.reviewCard}>
                            <View style={styles.reviewHeader}>
                                <Text style={styles.reviewerName}>{rev.user}</Text>
                                <View style={{ flexDirection: 'row', gap: 2 }}>
                                    {[...Array(5)].map((_, i) => (
                                        <FontAwesome5 key={i} name="star" size={10} color={i < rev.rating ? "#FBC02D" : "#DEE2E6"} solid />
                                    ))}
                                </View>
                            </View>
                            <Text style={styles.reviewComment}>"{rev.comment}"</Text>
                        </View>
                    ))}
                </View>

                {/* Visual Practice Schedule */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>{labels.searchDoctor.practiceSchedule}</Text>
                    <View style={styles.scheduleGrid}>
                        {((doctor as any).schedule || []).map((item: any, index: number) => (
                            <View key={index} style={styles.scheduleRow}>
                                <View style={styles.scheduleDayInfo}>
                                    <Text style={styles.scheduleDayNext}>{item.day}</Text>
                                    <Text style={styles.scheduleTime}>{item.time}</Text>
                                </View>
                                <View style={[styles.statusIndicator, !item.available && styles.statusFull]}>
                                    <View style={[styles.statusDot, !item.available && styles.statusDotFull]} />
                                    <Text style={[styles.statusLabel, !item.available && styles.statusLabelFull]}>
                                        {item.available ? labels.searchDoctor.availableStatus : labels.searchDoctor.fullStatus}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Location Integration */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>{labels.searchDoctor.practiceLocation}</Text>
                    <View style={styles.locationCard}>
                        <View style={styles.locationHeader}>
                            <View style={styles.locationIcon}>
                                <FontAwesome5 name="hospital" size={18} color="#4CAF50" />
                            </View>
                            <Text style={styles.locationAddress}>{doctor.location}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ height: 40 }} />
            </ScrollView>

            <View style={styles.footerAction}>
                <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
                    <Text style={styles.bookButtonText}>{labels.searchDoctor.bookButton}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
