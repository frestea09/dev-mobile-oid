import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    content: {
        padding: 20,
    },
    empty: {
        alignItems: 'center',
        paddingTop: 100,
    },
    emptyText: {
        marginTop: 16,
        color: '#999',
    },
    card: {
        padding: 16,
        borderRadius: 12,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#eee',
        marginBottom: 16,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    date: {
        marginTop: 8,
        color: '#666',
    },
    statusBadge: {
        marginTop: 12,
        backgroundColor: '#E3F2FD',
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    statusText: {
        color: '#2196F3',
        fontSize: 12,
        fontWeight: 'bold',
    },
});
