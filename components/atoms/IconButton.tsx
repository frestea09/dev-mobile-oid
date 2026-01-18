import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

import { styles } from './IconButton.styles';

interface IconButtonProps {
    onPress?: () => void;
    children: React.ReactNode;
    style?: ViewStyle;
}

export function IconButton({ onPress, children, style }: IconButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            {children}
        </TouchableOpacity>
    );
}
