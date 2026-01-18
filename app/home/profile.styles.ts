import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    content: {
        padding: 24,
    },
    header: {
        alignItems: 'center',
        marginBottom: 32,
    },
    avatarContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#E3F2FD',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        borderWidth: 4,
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    phone: {
        fontSize: 16,
        color: '#666',
    },
    section: {
        marginBottom: 24,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    label: {
        color: '#666',
        fontSize: 14,
    },
    value: {
        color: '#333',
        fontSize: 14,
        fontWeight: '500',
    },
    divider: {
        height: 1,
        backgroundColor: '#f0f0f0',
        marginVertical: 4,
    },
    link: {
        color: '#2196F3',
        fontWeight: '500',
    },
    linkDisabled: {
        color: '#999',
    },
    bpjsCard: {
        backgroundColor: '#fff',
        borderLeftWidth: 5,
        borderLeftColor: '#4CAF50',
    },
    bpjsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    bpjsLogo: {
        width: 100,
        height: 30,
    },
    bpjsStatus: {
        backgroundColor: '#E8F5E9',
        color: '#4CAF50',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
        fontSize: 12,
        fontWeight: 'bold',
    },
    bpjsNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        letterSpacing: 2,
        marginBottom: 4,
    },
    bpjsName: {
        fontSize: 14,
        color: '#666',
    },
    menuContainer: {
        backgroundColor: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    menuIcon: {
        width: 32,
        alignItems: 'center',
        marginRight: 12,
    },
    menuLabel: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    logoutButton: {
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#FFEBEE',
        backgroundColor: '#FFEBEE',
        alignItems: 'center',
    },
    logoutText: {
        color: '#D32F2F',
        fontWeight: 'bold',
        fontSize: 16,
    },
    bottomSpacer: {
        height: 40,
    },
});
