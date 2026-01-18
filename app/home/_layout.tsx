import { FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function HomeLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#2196F3',
                tabBarInactiveTintColor: '#94A3B8',
                tabBarShowLabel: true,
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 10,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: -4 },
                    shadowOpacity: 0.1,
                    shadowRadius: 8,
                    height: 75,
                    paddingBottom: 15,
                    paddingTop: 10,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                    marginTop: -5,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Beranda',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={20} color={color} />,
                }}
            />

            <Tabs.Screen
                name="history"
                options={{
                    title: 'Janji Temu',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome5 name="calendar-check" size={20} color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profil',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome5 name="user-circle" size={22} color={color} />,
                }}
            />
            {/* Hidden Screens (Not in Tab Bar) */}
            <Tabs.Screen name="help-center" options={{ href: null, headerShown: false }} />
            <Tabs.Screen name="search-doctor/index" options={{ href: null, headerShown: false }} />
            <Tabs.Screen name="search-doctor/[id]" options={{ href: null, headerShown: false }} />
            <Tabs.Screen name="book-appointment" options={{ href: null, headerShown: false }} />
            <Tabs.Screen name="appointment-success" options={{ href: null, headerShown: false }} />
            <Tabs.Screen name="appointment-detail/[id]" options={{ href: null, headerShown: false }} />
            <Tabs.Screen name="edit-profile" options={{ href: null, headerShown: false }} />
            <Tabs.Screen name="change-password" options={{ href: null, headerShown: false }} />
            <Tabs.Screen name="notifications" options={{ href: null, headerShown: false }} />
        </Tabs>
    );
}
