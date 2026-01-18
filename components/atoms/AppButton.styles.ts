import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 8,
    },
    primary: {
        backgroundColor: '#2196F3',
    },
    outline: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#2196F3',
    },
    success: {
        backgroundColor: '#4CAF50',
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    textPrimary: {
        color: '#fff',
    },
    textOutline: {
        color: '#2196F3',
    },
});
