import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    useWindowDimensions,
    TouchableOpacity,
    Platform,
    StatusBar
} from 'react-native';
// ИСПРАВЛЕНО: Импортируем SafeAreaView из context, а не из react-native
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

interface ResponsiveHeaderProps {
    title: string;
    leftAction?: {
        icon: string;
        onPress: () => void;
    };
    rightAction?: {
        icon: string;
        onPress: () => void;
    };
}

export function ResponsiveHeader({
    title,
    leftAction,
    rightAction,
}: ResponsiveHeaderProps) {
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;
    const isTablet = width >= 768 || isLandscape;

    return (
        // edges={['top']} заставляет фон шапки заходить под статус-бар
        <SafeAreaView edges={['top']} style={styles.safeArea}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#0066cc"
                translucent={true}
            />
            <View style={styles.headerContent}>
                <View style={styles.headerLeft}>
                    {leftAction && (
                        <TouchableOpacity
                            style={styles.headerButton}
                            onPress={leftAction.onPress}
                        >
                            <Text style={styles.headerIcon}>{leftAction.icon}</Text>
                        </TouchableOpacity>
                    )}
                </View>

                <View style={styles.headerCenter}>
                    <Text
                        style={[
                            styles.headerTitle,
                            isTablet && styles.headerTitleTablet
                        ]}
                        numberOfLines={1}
                    >
                        {title}
                    </Text>
                </View>

                <View style={styles.headerRight}>
                    {rightAction && (
                        <TouchableOpacity
                            style={styles.headerButton}
                            onPress={rightAction.onPress}
                        >
                            <Text style={styles.headerIcon}>{rightAction.icon}</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
}

interface ResponsiveContainerProps {
    children: React.ReactNode;
}

export function ResponsiveContainer({ children }: ResponsiveContainerProps) {
    const { width } = useWindowDimensions();
    const isTablet = width >= 768;

    return (
        <View style={styles.container}>
            {isTablet ? (
                <View style={styles.tabletContainer}>
                    <View style={styles.tabletSidebar}>
                        <Text style={styles.tabletSidebarText}>Navigation</Text>
                    </View>
                    <View style={styles.tabletContent}>
                        {children}
                    </View>
                </View>
            ) : ( 
                children
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#0066cc',
        // Тень для отделения шапки
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        zIndex: 1000,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        height: 56, // Фиксированная высота контента шапки
    },
    headerLeft: {
        width: 48,
        alignItems: 'flex-start',
    },
    headerCenter: {
        flex: 1,
        alignItems: 'center',
    },
    headerRight: {
        width: 48,
        alignItems: 'flex-end',
    },
    headerButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerIcon: {
        fontSize: 20,
        color: '#fff',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
    headerTitleTablet: {
        fontSize: 22,
    },
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    tabletContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    tabletSidebar: {
        width: 250,
        backgroundColor: '#ffffff',
        borderRightWidth: 1,
        borderRightColor: '#e0e0e0',
        paddingTop: 20,
        alignItems: 'center',
    },
    tabletSidebarText: {
        fontSize: 16,
        color: '#666',
    },
    tabletContent: {
        flex: 1,
    },
});