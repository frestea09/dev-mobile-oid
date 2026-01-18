import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenHeader } from '../../components/molecules/ScreenHeader';
import { notifications } from '../../constants/demoData';
import { labels } from '../../constants/labels';
import { styles } from './notifications.styles';

export default function NotificationsScreen() {
    const router = useRouter();

    const renderItem = ({ item }) => (
        <View style={[styles.item, !item.read && styles.unreadItem]}>
            <View style={styles.iconContainer}>
                <FontAwesome5 name="bell" size={20} color={item.read ? '#999' : '#2196F3'} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemMessage}>{item.message}</Text>
                <Text style={styles.itemTime}>{item.time}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScreenHeader title={labels.notifications.title} onBack={() => router.back()} />

            <FlatList
                data={notifications}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <FontAwesome5 name="bell-slash" size={40} color="#ccc" />
                        <Text style={styles.emptyText}>{labels.notifications.emptyMessage}</Text>
                    </View>
                }
            />
        </SafeAreaView>
    );
}
