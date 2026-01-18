import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    // Tabs container
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#F1F3F5',
        borderRadius: 12,
        padding: 4,
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 8,
    },
    activeTab: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    tabText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#666',
    },
    activeTabText: {
        color: '#2196F3',
    },
    content: {
        flex: 1,
    },
    scrollContent: {
        padding: 16,
    },
    sectionLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#94A3B8',
        marginBottom: 16,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    empty: {
        alignItems: 'center',
        paddingVertical: 60,
    },
    emptyText: {
        marginTop: 16,
        fontSize: 14,
        color: '#94A3B8',
    },
    // Enhanced Card
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#F1F3F5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    doctorInfo: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 2,
    },
    cardSubTitle: {
        fontSize: 13,
        color: '#666',
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    statusText: {
        fontSize: 11,
        fontWeight: 'bold',
    },
    // Time & Location
    cardDetails: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#F8F9FA',
        paddingTop: 12,
        marginBottom: 12,
        gap: 16,
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    detailText: {
        fontSize: 13,
        color: '#495057',
    },
    // Diagnosis section for history
    diagnosisContainer: {
        backgroundColor: '#F8F9FA',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
    },
    diagnosisLabel: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#94A3B8',
        marginBottom: 4,
    },
    diagnosisText: {
        fontSize: 13,
        color: '#495057',
        fontStyle: 'italic',
    },
    // Action Buttons
    actionButtons: {
        flexDirection: 'row',
        gap: 10,
    },
    actionButton: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    secondaryButton: {
        borderColor: '#E9ECEF',
        backgroundColor: '#fff',
    },
    primaryButton: {
        borderColor: '#2196F3',
        backgroundColor: '#F1F8FF',
    },
    secondaryButtonText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#666',
    },
    primaryButtonText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#2196F3',
    },
    // Reminder Section
    reminderCard: {
        backgroundColor: '#2196F3',
        borderRadius: 16,
        padding: 20,
        marginBottom: 24,
        shadowColor: '#2196F3',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    reminderLabel: {
        color: '#E3F2FD',
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 12,
        letterSpacing: 1,
    },
    reminderDoctor: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    reminderSpecialist: {
        color: '#E3F2FD',
        fontSize: 14,
        marginBottom: 16,
    },
    reminderDetails: {
        flexDirection: 'row',
        gap: 20,
        marginBottom: 20,
    },
    reminderDetailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    reminderDetailText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    reminderAction: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    reminderActionText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
