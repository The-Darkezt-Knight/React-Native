import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

export default function CustomButton({title, onPress}) {
    return (
        <Pressable style={styles.button}
        onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#123456',
        padding: 10,
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        fontSize: 13,
        color: '#fff'
    }
})