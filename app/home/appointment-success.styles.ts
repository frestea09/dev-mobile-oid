import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        padding: 24,
        justifyContent: 'center',
    },
    successIcon: {
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 32,
        paddingHorizontal: 20,
    },
    qrContainer: {
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        marginBottom: 32,
    },
    qrImage: {
        width: 200,
        height: 200,
        marginBottom: 16,
    },
    orderNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        letterSpacing: 1,
    },
    alertBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF3CD',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FFEEBA',
        marginBottom: 32,
        gap: 8,
    },
    alertText: {
        color: '#856404',
        fontSize: 12,
        flex: 1,
    },
    actions: {
        flexDirection: 'row',
        gap: 16,
    },
    actionButton: {
        flex: 1,
    },
    footer: {
        padding: 24,
    },
});
