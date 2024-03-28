import {Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable, StyleSheet} from 'react-native'
import {React, useEffect} from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const LogInScreen = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 


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
                    style={{ width: 200, backgroundColor: 'purple', padding: 15, marginTop: 40, marginLeft: 'auto', marginRight: 'auto', borderRadius: 6 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16, color: 'white' }} >Login</Text>
                </Pressable>

                <Pressable style={{ marginTop: 10 }}>
                    <Text style={{ textAlign: 'center', fontSize: 16 }} >Don't have an account? <Text style={{ fontWeight: '500', color: 'purple' }}>Sign Up</Text></Text>
                </Pressable>

            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LogInScreen
