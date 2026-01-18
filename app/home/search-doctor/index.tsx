import { FontAwesome5 } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DoctorCard } from '../../../components/organisms/DoctorCard';
import { doctors } from '../../../constants/demoData';
import { labels } from '../../../constants/labels';
import { styles } from './index.styles';

// Helper function to safely get string parameters
const getStringParam = (param: string | string[] | undefined, defaultValue: string): string => {
    if (Array.isArray(param)) {
        return param[0] || defaultValue;
    }
    return param || defaultValue;
};

export default function SearchDoctorScreen() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const [searchQuery, setSearchQuery] = useState(getStringParam(params.q, ''));
    const [selectedSpecialty, setSelectedSpecialty] = useState('Semua Spesialisasi');
    const [selectedLocation, setSelectedLocation] = useState('Semua Lokasi');

    const filteredDoctors = useMemo(() => {
        return doctors.filter((doctor) => {
            const matchesSearch =
                doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                doctor.specialist.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesSpecialty =
                selectedSpecialty === 'Semua Spesialisasi' || doctor.specialist === selectedSpecialty;
            const matchesLocation =
                selectedLocation === 'Semua Lokasi' || doctor.location === selectedLocation;

            return matchesSearch && matchesSpecialty && matchesLocation;
        });
    }, [searchQuery, selectedSpecialty, selectedLocation]);

    const renderItem = ({ item }: { item: any }) => (
        <DoctorCard
            doctorName={item.name}
            specialist={item.specialist}
            rating={item.rating}
            location={item.location}
            price={item.price}
            actionLabel={labels.searchDoctor.bookButton}
            onPress={() => router.push({ pathname: '/home/search-doctor/[id]' as any, params: { id: item.id } })}
            style={styles.cardSpacing}
        />
    );

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <FontAwesome5 name="arrow-left" size={20} color="#333" />
                </TouchableOpacity>
                <Text style={styles.title}>{labels.searchDoctor.title}</Text>
                <View style={{ width: 40 }} />
            </View>

            <View style={styles.searchSection}>
                <View style={styles.searchContainer}>
                    <FontAwesome5 name="search" size={16} color="#999" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder={labels.searchDoctor.searchPlaceholder}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>
            </View>

            <View style={styles.filterSection}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterScroll}>
                    <TouchableOpacity style={styles.filterChip} onPress={() => {/* Modal for Specialty */ }}>
                        <FontAwesome5 name="stethoscope" size={12} color="#2196F3" />
                        <Text style={styles.filterChipText}>{selectedSpecialty}</Text>
                        <FontAwesome5 name="chevron-down" size={10} color="#999" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.filterChip} onPress={() => {/* Modal for Location */ }}>
                        <FontAwesome5 name="map-marker-alt" size={12} color="#2196F3" />
                        <Text style={styles.filterChipText}>{selectedLocation}</Text>
                        <FontAwesome5 name="chevron-down" size={10} color="#999" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.filterChip}>
                        <FontAwesome5 name="calendar-alt" size={12} color="#2196F3" />
                        <Text style={styles.filterChipText}>{labels.searchDoctor.filterSchedule}</Text>
                        <FontAwesome5 name="chevron-down" size={10} color="#999" />
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <FlatList
                data={filteredDoctors}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <FontAwesome5 name="user-slash" size={48} color="#ddd" />
                        <Text style={styles.emptyText}>{labels.searchDoctor.searchEmpty}</Text>
                    </View>
                }
            />
        </SafeAreaView>
    );
}
