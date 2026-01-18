import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DoctorCard } from '../../../components/organisms/DoctorCard';
import { doctors } from '../../../constants/demoData';
import { labels } from '../../../constants/labels';
import { styles } from './index.styles';

export default function SearchDoctorScreen() {
    const router = useRouter();

    const renderItem = ({ item }) => (
        <DoctorCard
            doctorName={item.name}
            specialist={item.specialist}
            price={item.price}
            actionLabel={labels.searchDoctor.bookButton}
            onPress={() => router.push({ pathname: '/home/book-appointment', params: item })}
            style={styles.cardSpacing}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{labels.searchDoctor.title}</Text>
            </View>

            <View style={styles.searchContainer}>
                <FontAwesome5 name="search" size={16} color="#999" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder={labels.searchDoctor.searchPlaceholder}
                />
            </View>

            <FlatList
                data={doctors}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
}
