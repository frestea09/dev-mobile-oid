import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    content: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 40,
        textAlign: 'center',
    },
    form: {
        marginBottom: 24,
    },
    inputGroup: {
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#E0E0E0',
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
        padding: 16,
        fontSize: 16,
        color: '#333',
    },
    eyeIcon: {
        padding: 16,
    },
    errorContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    errorText: {
        color: '#D32F2F',
        fontSize: 14,
    },
    loginButton: {
        backgroundColor: '#2196F3',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 24,
        shadowColor: '#2196F3',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    registerLink: {
        alignItems: 'center',
        padding: 12,
    },
    registerLinkText: {
        color: '#2196F3',
        fontSize: 14,
        fontWeight: '500',
    },
    forgotPassword: {
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    forgotPasswordText: {
        color: '#666',
        fontSize: 14,
    },
    loginButtonDisabled: {
        opacity: 0.7,
    },
});
