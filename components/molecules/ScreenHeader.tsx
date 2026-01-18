import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

import { IconButton } from '../atoms/IconButton';
import { styles } from './ScreenHeader.styles';

interface ScreenHeaderProps {
    title: string;
    onBack?: () => void;
}

export function ScreenHeader({ title, onBack }: ScreenHeaderProps) {
    return (
        <View style={styles.container}>
            {onBack ? (
                <IconButton onPress={onBack}>
                    <FontAwesome5 name="arrow-left" size={20} color="#333" />
                </IconButton>
            ) : (
                <View style={styles.placeholder} />
            )}
            <Text style={styles.title}>{title}</Text>
            <View style={styles.placeholder} />
        </View>
    );
}
