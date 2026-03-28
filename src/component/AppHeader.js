import React, { useState } from 'react'
import {
    Alert,
    Image,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

export default function AppHeader({ navigation, currentRouteName, email }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
    const isOnProfilePage = currentRouteName === 'Profile'
    const quickRouteName = isOnProfilePage ? 'Home' : 'Profile'
    const quickRouteLabel = isOnProfilePage ? 'Go to main menu' : 'Go to profile'

    const closeMenus = () => {
        setIsSidebarOpen(false)
        setIsProfileMenuOpen(false)
    }

    const navigateIfAvailable = (screenName) => {
        const routeNames = navigation?.getState?.()?.routeNames || []

        if (!routeNames.includes(screenName)) {
            Alert.alert('Screen unavailable', `${screenName} screen is not configured yet.`)
            return
        }

        if (currentRouteName !== screenName) {
            navigation.navigate(screenName, { email })
        }

        closeMenus()
    }

    const handleLogout = () => {
        closeMenus()
        navigation.navigate('Login')
    }

    const handleMenuToggle = () => {
        setIsSidebarOpen((prev) => {
            const next = !prev

            if (next) {
                setIsProfileMenuOpen(false)
            }

            return next
        })
    }

    const handleProfileMenuToggle = () => {
        setIsProfileMenuOpen((prev) => {
            const next = !prev

            if (next) {
                setIsSidebarOpen(false)
            }

            return next
        })
    }

    return (
        <>
            <View style={style.headerContainer}>
                <TouchableOpacity
                    style={style.menuButton}
                    onPress={handleMenuToggle}
                >
                    <View style={style.menuIconContainer}>
                        {isSidebarOpen ? (
                            <>
                                <View style={[style.menuLine, style.openLineTop]}></View>
                                <View style={[style.menuLine, style.openLineBottom]}></View>
                            </>
                        ) : (
                            <>
                                <View style={style.menuLine}></View>
                                <View style={style.menuLine}></View>
                                <View style={style.menuLine}></View>
                            </>
                        )}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={style.headerProfileButton}
                    onPress={handleProfileMenuToggle}
                >
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }}
                        style={style.headerProfileImage}
                    ></Image>
                </TouchableOpacity>
            </View>

            {isProfileMenuOpen && (
                <View style={style.profileMenuDropdown}>
                    <TouchableOpacity
                        style={style.profileMenuButton}
                        onPress={() => navigateIfAvailable(quickRouteName)}
                    >
                        <Text style={style.profileMenuButtonText}>{quickRouteLabel}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[style.profileMenuButton, style.profileMenuLogoutButton]}
                        onPress={handleLogout}
                    >
                        <Text style={[style.profileMenuButtonText, style.profileMenuLogoutText]}>Log out</Text>
                    </TouchableOpacity>
                </View>
            )}

            {(isSidebarOpen || isProfileMenuOpen) && (
                <Pressable
                    style={style.overlay}
                    onPress={closeMenus}
                ></Pressable>
            )}

            <View style={[style.sidebar, isSidebarOpen ? style.sidebarOpen : style.sidebarClosed]}>
                <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }}
                    style={style.profileImage}
                ></Image>

                <View>
                    <TouchableOpacity
                        style={style.sidebarButton}
                        onPress={() => navigateIfAvailable('Settings')}
                    >
                        <Text style={style.sidebarButtonText}>Settings</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={style.sidebarButton}
                        onPress={() => navigateIfAvailable('Profile')}
                    >
                        <Text style={style.sidebarButtonText}>Profile page</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.sidebarBottomSection}>
                    <TouchableOpacity
                        style={[style.sidebarButton, style.sidebarBottomButton]}
                        onPress={handleLogout}
                    >
                        <Text style={style.sidebarButtonText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    headerContainer: {
        height: 96,
        paddingTop: 16,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#eef1f6'
    },
    menuButton: {
        zIndex: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4
    },
    menuIconContainer: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuLine: {
        width: 20,
        height: 2,
        backgroundColor: '#1f2937',
        marginVertical: 2
    },
    openLineTop: {
        position: 'absolute',
        transform: [{ rotate: '45deg' }]
    },
    openLineBottom: {
        position: 'absolute',
        transform: [{ rotate: '-45deg' }]
    },
    headerProfileButton: {
        zIndex: 10,
        width: 44,
        height: 44,
        borderRadius: 22,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#ffffff',
        backgroundColor: '#e5e7eb',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4
    },
    headerProfileImage: {
        width: '100%',
        height: '100%'
    },
    profileMenuDropdown: {
        position: 'absolute',
        top: 84,
        right: 20,
        width: 170,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 8,
        borderWidth: 1,
        borderColor: '#d1d5db',
        zIndex: 30,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5
    },
    profileMenuButton: {
        backgroundColor: '#f3f4f6',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 8,
        alignItems: 'center'
    },
    profileMenuLogoutButton: {
        marginBottom: 0,
        backgroundColor: '#fee2e2'
    },
    profileMenuButtonText: {
        color: '#111827',
        fontSize: 14,
        fontWeight: '700'
    },
    profileMenuLogoutText: {
        color: '#b91c1c'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        zIndex: 20
    },
    sidebar: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: 260,
        backgroundColor: '#ffffff',
        paddingTop: 120,
        paddingHorizontal: 20,
        zIndex: 21,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 6
    },
    sidebarOpen: {
        left: 0
    },
    sidebarClosed: {
        left: -280
    },
    profileImage: {
        width: 84,
        height: 84,
        borderRadius: 42,
        alignSelf: 'center',
        marginBottom: 30,
        backgroundColor: '#e5e7eb'
    },
    sidebarButton: {
        backgroundColor: '#1f2937',
        paddingVertical: 12,
        borderRadius: 10,
        marginBottom: 12,
        alignItems: 'center'
    },
    sidebarBottomSection: {
        marginTop: 'auto',
        borderTopWidth: 1,
        borderTopColor: '#d1d5db',
        paddingTop: 16,
        marginBottom: 20
    },
    sidebarBottomButton: {
        marginBottom: 0
    },
    sidebarButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '700'
    }
})
