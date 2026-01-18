import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#eee',
    },
    stackedCard: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 12,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#E3F2FD',
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    specialist: {
        fontSize: 14,
        color: '#666',
    },
    price: {
        fontSize: 14,
        color: '#4CAF50',
        fontWeight: '500',
        marginTop: 4,
    },
    actionButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        backgroundColor: '#2196F3',
    },
    stackedActionButton: {
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    actionText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
});
