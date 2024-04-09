import {Text, View, SafeAreaView,KeyboardAvoidingView, TextInput, Pressable, Alert} from 'react-native'
import {React, useEffect} from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

import axios from 'axios'

import { MaterialCommunityIcons } from '@expo/vector-icons';

const LogInScreen = ({navigation}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const token = await AsyncStorage.getItem("authToken")
    
                if (token) {
                    setTimeout(() => {
                        navigation.replace("Home")
                    }, 400)
                }
            } catch (error) {
                console.log("error", error)
            }
        }
    
        checkLoginStatus ()
    }, [])
    

    const Login = () => {
        const user = {
            email: email,
            password: password
        }

        axios.post("http://192.168.0.14:8000/login", user)
        .then((response) => {
            console.log(response)
            const token = response.data.token
            AsyncStorage.setItem("authToken", token)
            navigation.navigate("Home")
        }).catch((error) => {
            Alert.alert("Login error")
            console.log("error", error)
        })
    }

    return (
        <SafeAreaView style={{flex: 1,backgroundColor: "white", alignItems: "center"}} >
        <View style = {{marginTop:75}}>
        <MaterialCommunityIcons name="account-multiple-check-outline" size={50} color="black" />

        </View>
            
            <KeyboardAvoidingView>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 17, fontWeight: 'bold', marginTop: 25,
        color: 'purple'}}>Login to your Account</Text>
                </View>
                <View style={{marginTop: 40}}>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', gap: 4, borderColor: "#D0D0D0", borderWidth: 1, paddingVertical: 5, borderRadius: 5,}}>
                    <MaterialIcons style={{ marginLeft: 8, color: 'purple' }} name="email" size={24} color="black" />
                    <TextInput
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholderTextColor={'gray'} style={{ color: 'gray', marginVertical: 10, width: 300, fontSize: email ? 16 : 16 }} placeholder="enter your Email" />
                </View>

                <View style={{ marginTop: 30}}>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center',gap: 4,borderColor: "#D0D0D0",borderWidth: 1,paddingVertical: 5,borderRadius: 5,}}>
                    <AntDesign style={{ marginLeft: 8 }} name="lock" size={24} color="purple" />
                    <TextInput
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        placeholderTextColor={'gray'} style={{ color: 'gray', marginVertical: 10, width: 300, fontSize: password ? 16 : 16 }} placeholder="enter your Password" />
                </View>

                <View>
                    <View style={{  flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 12,}}>
                        <Text>Keep me logged in</Text>
                        <Text>Forgot Password</Text>
                    </View>
                </View>

                <View style={{ marginTop: 45 }} />

                <Pressable
                onPress = {Login}
                    style={{ width: 200, backgroundColor: 'purple', padding: 15, marginTop: 40, marginLeft: 'auto', marginRight: 'auto', borderRadius: 6 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16, color: 'white' }} >Login</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate ('Register')} style={{ marginTop: 10 }}>
                    <Text style={{ textAlign: 'center', fontSize: 16 }} >Don't have an account? <Text style={{ fontWeight: '500', color: 'purple' }}>Sign Up</Text></Text>
                </Pressable>

            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LogInScreen
