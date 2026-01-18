import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    content: {
        padding: 24,
        paddingBottom: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
        marginTop: 10,
        textAlign: 'center',
    },
    form: {
        marginBottom: 24,
    },
    inputGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        padding: 14,
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    textArea: {
        height: 80,
        textAlignVertical: 'top',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    passwordInput: {
        flex: 1,
        padding: 14,
        fontSize: 16,
        color: '#333',
    },
    eyeIcon: {
        padding: 14,
    },
    hint: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
        marginLeft: 4,
    },
    genderContainer: {
        flexDirection: 'row',
        gap: 12,
    },
    genderButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        padding: 14,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        gap: 8,
    },
    genderButtonActive: {
        backgroundColor: '#2196F3',
        borderColor: '#2196F3',
    },
    genderText: {
        fontSize: 16,
        color: '#666',
        fontWeight: '500',
    },
    genderTextActive: {
        color: '#fff',
    },
    errorContainer: {
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: '#FFEBEE',
        padding: 12,
        borderRadius: 8,
    },
    errorText: {
        color: '#D32F2F',
        fontSize: 14,
        textAlign: 'center',
    },
    registerButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 24,
        shadowColor: '#4CAF50',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    registerButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginLink: {
        alignItems: 'center',
        padding: 12,
    },
    loginLinkText: {
        color: '#2196F3',
        fontSize: 14,
        fontWeight: '500',
    },
});
