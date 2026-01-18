import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    content: {
        padding: 20,
        paddingBottom: 100,
    },
    doctorSummary: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    avatarContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#E3F2FD',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    docName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    docSpecialist: {
        fontSize: 14,
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
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    calendarScroll: {
        paddingBottom: 8,
    },
    dateCard: {
        width: 60,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        marginRight: 12,
        borderWidth: 1,
        borderColor: '#eee',
    },
    dateCardActive: {
        backgroundColor: '#2196F3',
        borderColor: '#2196F3',
    },
    dayText: {
        fontSize: 12,
        color: '#666',
        marginBottom: 4,
    },
    dateText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    textActive: {
        color: '#fff',
    },
    timeGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    timeSlot: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#eee',
    },
    timeSlotActive: {
        backgroundColor: '#2196F3',
        borderColor: '#2196F3',
    },
    timeText: {
        fontSize: 14,
        color: '#333',
    },
    editLink: {
        color: '#2196F3',
        fontWeight: '500',
    },
    formGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        color: '#666',
        marginBottom: 6,
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        color: '#333',
    },
    inputDisabled: {
        backgroundColor: '#f5f5f5',
        color: '#666',
    },
    summaryCard: {
        backgroundColor: '#E3F2FD',
        borderRadius: 12,
        padding: 16,
    },
    summaryTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1565C0',
        marginBottom: 12,
    },
    summaryRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    summaryIcon: {
        width: 24,
        textAlign: 'center',
        marginRight: 8,
    },
    summaryText: {
        fontSize: 14,
        color: '#333',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
});
