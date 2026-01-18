import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        paddingTop: 10,
    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    subGreeting: {
        fontSize: 14,
        color: '#666',
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    iconButton: {
        padding: 8,
    },
    badge: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'red',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    content: {
        paddingHorizontal: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 24,
    },
    searchIcon: {
        marginRight: 12,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    bannerContainer: {
        backgroundColor: '#2196F3',
        borderRadius: 16,
        padding: 20,
        marginBottom: 24,
        flexDirection: 'row',
        overflow: 'hidden',
        position: 'relative',
    },
    bannerContent: {
        flex: 1,
        zIndex: 1,
    },
    bannerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    bannerText: {
        fontSize: 14,
        color: '#E3F2FD',
        marginBottom: 16,
        lineHeight: 20,
    },
    bannerButton: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        alignSelf: 'flex-start',
    },
    bannerButtonText: {
        color: '#2196F3',
        fontWeight: 'bold',
        fontSize: 12,
    },
    bannerIcon: {
        position: 'absolute',
        right: -10,
        bottom: -10,
        transform: [{ rotate: '-15deg' }],
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    gridItem: {
        width: (width - 60) / 2,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#eee',
    },
    gridIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    gridLabel: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    seeAll: {
        color: '#2196F3',
        fontWeight: '500',
    },
    horizontalScroll: {
        marginBottom: 24,
        overflow: 'visible',
    },
    quickActionCard: {
        width: 200,
        marginRight: 16,
    },
    articleCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#eee',
        overflow: 'hidden',
    },
    articleImage: {
        width: 100,
        height: 100,
    },
    articleContent: {
        flex: 1,
        padding: 12,
        justifyContent: 'center',
    },
    articleTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    articleDesc: {
        fontSize: 12,
        color: '#666',
    },
    bottomSpacer: {
        height: 40,
    },
});
