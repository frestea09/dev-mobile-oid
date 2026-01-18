import React from 'react';
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

import { styles } from './AppButton.styles';

type ButtonVariant = 'primary' | 'outline' | 'success';

interface AppButtonProps {
    label: string;
    onPress?: () => void;
    disabled?: boolean;
    variant?: ButtonVariant;
    icon?: React.ReactNode;
    style?: ViewStyle;
}

export function AppButton({
    label,
    onPress,
    disabled,
    variant = 'primary',
    icon,
    style,
}: AppButtonProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[
                styles.button,
                styles[variant as keyof typeof styles],
                disabled ? { opacity: 0.7 } : null,
                style,
            ]}
        >
            {icon ? <View>{icon}</View> : null}
            <View>
                <TextByVariant label={label} variant={variant} />
            </View>
        </TouchableOpacity>
    );
}

function TextByVariant({ label, variant }: { label: string; variant: ButtonVariant }) {
    if (variant === 'outline') {
        return <AppButtonText label={label} style={styles.textOutline} />;
    }
    return <AppButtonText label={label} style={styles.textPrimary} />;
}

function AppButtonText({ label, style }: { label: string; style: TextStyle }) {
    return <Text style={[styles.text, style]}>{label}</Text>;
}
