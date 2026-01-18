import { FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function HomeLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#2196F3' }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Beranda',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="search-doctor"
                options={{
                    title: 'Cari Dokter',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome5 name="search" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: 'Riwayat',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome5 name="history" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profil',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome5 name="user" size={24} color={color} />,
                }}
            />

            {/* Hidden Screens (Not in Tab Bar) */}
            <Tabs.Screen name="book-appointment" options={{ href: null, headerShown: false }} />
            <Tabs.Screen name="appointment-success" options={{ href: null, headerShown: false }} />
            <Tabs.Screen name="edit-profile" options={{ href: null, headerShown: false }} />
            <Tabs.Screen name="change-password" options={{ href: null, headerShown: false }} />
            <Tabs.Screen name="notifications" options={{ href: null, headerShown: false }} />
        </Tabs>
    );
}
