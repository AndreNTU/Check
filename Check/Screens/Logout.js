import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { AntDesign } from '@expo/vector-icons'

Logout = ({navigation}) => {
    const logout = () => {
        clearAuthToken();
    }
    const clearAuthToken = async () => {
        await AsyncStorage.removeItem("authToken");
        console.log("Cleared auth token");
        navigation.replace("Login")
    }

    return (
        <View>
            <TouchableOpacity
            onPress = {logout}>
                <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 350, borderWidth: 9, borderRadius: 15, marginHorizontal: 110, backgroundColor: 'blueviolet', borderColor: 'blueviolet' }}>
                    <Text style={{ fontSize: 16, color: 'white' }}>Logout</Text>
                </View>
            </TouchableOpacity>

            <View style={{ marginTop: 342 }}>
                <AntDesign style={{ alignSelf: 'center' }} name="hearto" size={20} color="red" />
                <Text style={{ marginTop: 0, color: 'blueviolet', fontSize: 16, textAlign: 'center' }}> Version 1.0.0</Text>
            </View>
        </View>
    )
}

export default Logout

