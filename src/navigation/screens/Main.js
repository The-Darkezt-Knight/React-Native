import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import AppHeader from '../../component/AppHeader'

export default function Home({navigation, route}) {

    const {email} = route.params

    return(
    <View style={style.parentContainer}>
        <AppHeader navigation={navigation} currentRouteName='Home' email={email}></AppHeader>

        <View style={style.contentContainer}>
            <View style={style.welcomeCard}>
                <Text style={style.header}>Home</Text>
                <Text style={style.subheading}>Welcome back, {email}</Text>
                <Text style={style.helperText}>Use the sidebar menu to open your profile page.</Text>
            </View>
        </View>
    </View>
    )
}

const style = StyleSheet.create({
    parentContainer: {
        flex: 1,
        backgroundColor: '#eef1f6'
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 12
    },
    welcomeCard: {
        width: '100%',
        maxWidth: 460,
        borderRadius: 14,
        padding: 20,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#e5e7eb',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 6,
        justifyContent: 'center'
    },
    header: {
        fontSize: 32,
        fontWeight: '800',
        color: '#111827'
    },
    subheading: {
        marginTop: 8,
        fontSize: 17,
        color: '#374151',
        fontWeight: '500'
    },
    helperText: {
        marginTop: 8,
        fontSize: 14,
        color: '#6b7280'
    }
})
