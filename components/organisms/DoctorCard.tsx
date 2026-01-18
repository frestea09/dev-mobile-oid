import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native';

import { styles } from './DoctorCard.styles';

type CardVariant = 'inline' | 'stacked';

interface DoctorCardProps {
    doctorName: string;
    specialist: string;
    price?: string;
    actionLabel?: string;
    onPress?: () => void;
    style?: ViewStyle;
    variant?: CardVariant;
}

export function DoctorCard({
    doctorName,
    specialist,
    price,
    actionLabel,
    onPress,
    style,
    variant = 'inline',
}: DoctorCardProps) {
    const cardStyles = [styles.card, variant === 'stacked' ? styles.stackedCard : null, style];
    return (
        <View style={cardStyles}>
            <View style={styles.info}>
                <View style={styles.avatarContainer}>
                    <FontAwesome5 name="user-md" size={30} color="#2196F3" />
                </View>
                <View>
                    <Text style={styles.name}>{doctorName}</Text>
                    <Text style={styles.specialist}>{specialist}</Text>
                    {price ? <Text style={styles.price}>{price}</Text> : null}
                </View>
            </View>
            {actionLabel ? (
                <TouchableOpacity
                    style={[
                        styles.actionButton,
                        variant === 'stacked' ? styles.stackedActionButton : null,
                    ]}
                    onPress={onPress}
                >
                    <Text style={styles.actionText}>{actionLabel}</Text>
                </TouchableOpacity>
            ) : null}
        </View>
    );
}
