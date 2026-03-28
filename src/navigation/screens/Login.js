import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import {auth} from '../../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'

import CustomButton from '../../component/CustomButton'

export default function Login({navigation, route}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Logged in', userCredential.user)
            }
        ).catch((error) => {
            console.error(error.message)
        })
    }

        navigation.navigate('Home', {email:email})

    }

    return(
        <View style={style.parentContainer}>
        <View
            style ={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20
            }}
        >
            <Text style={style.header}>Welcome back!</Text>
            <Text style={style.subheading}>Ready for what's ahead?</Text>
        </View>
        <View>
            <View style={style.form}>

                <View>
                    <Text
                        style={style.label}
                    >Email</Text>
                    <TextInput
                        style={style.textInput}
                        placeholder='esx. john.doe@gmail.com'
                        onChangeText={setEmail}
                    ></TextInput>
                </View>

                <View>
                    <Text
                        style={style.label}
                    >Password</Text>
                    <TextInput
                        style={style.textInput}
                        placeholder='Enter your password'
                        onChangeText={setPassword}
                        secureTextEntry
                    ></TextInput>
                </View>

                <View>
                    <CustomButton title='Login now' onPress={validateAttempt}></CustomButton>
                </View>
            </View>
        </View>

    </View>
    )
}

const style = StyleSheet.create({
    parentContainer: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems:'center'
    },
    header: {
        fontSize: 40,
        fontWeight: '900'
    },
    subheading: {
        fontSize: 20,
        fontWeight: '400'
    },
    form: {
        paddingTop: 50,
        paddingBottom: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        minHeight: 'auto',
        minWidth: 'auto',
        padding: 50,
        gap: 20
    },
    textInput : {
        backgroundColor: '#f7f7f7',
        paddingLeft: 10,
        fontSize: 15,
        minWidth: 300,
        minHeight: 45
    }, label: {
        fontSize: 14,
        marginBottom: 5
    }
})