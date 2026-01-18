import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
    },
    scrollContent: {
        padding: 20,
    },
    // Doctor Card
    doctorCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#F8F9FA',
        borderRadius: 16,
        marginBottom: 20,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#E3F2FD',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    doctorInfo: {
        flex: 1,
    },
    doctorName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    specialist: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
    // Detail Info
    infoSection: {
        marginBottom: 24,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        gap: 12,
    },
    infoLabel: {
        fontSize: 14,
        color: '#666',
        width: 100,
    },
    infoValue: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
    },
    // QR Code Section
    qrSection: {
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#F1F3F5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
        marginBottom: 24,
    },
    qrTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    qrSubtitle: {
        fontSize: 12,
        color: '#666',
        marginBottom: 20,
        textAlign: 'center',
    },
    qrPlaceholder: {
        width: 200,
        height: 200,
        backgroundColor: '#f8f9fa',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#E9ECEF',
        borderStyle: 'dashed',
    },
    nikBadge: {
        marginTop: 16,
        backgroundColor: '#F1F8FF',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
    },
    nikText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2196F3',
    },
    // Actions
    actionButtons: {
        gap: 12,
        marginBottom: 40,
    },
    downloadButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2E7D32',
        paddingVertical: 14,
        borderRadius: 12,
        gap: 8,
    },
    downloadButtonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    secondaryActions: {
        flexDirection: 'row',
        gap: 12,
    },
    actionButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E9ECEF',
        paddingVertical: 12,
        borderRadius: 10,
        gap: 6,
    },
    actionButtonText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#495057',
    },
});
