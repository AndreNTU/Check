import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



const Challenge25 = () => {
    return (

        <View style={{ flex: 1, backgroundColor: 'mediumspringgreen' }}>
            <View style={{ marginTop: 110, alignItems: 'center'}}>
                <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>The current date for Challenge 25 is:</Text>

                <View style = {{marginTop: 70, alignItems: 'center', flexDirection: 'column'}}>
                <FontAwesome name="circle-thin" size={390} color="indigo" />

                </View>

                <View style={{ marginTop: 50,}}>
                    <Text style={{ color: 'black', textAlign: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: 18 }}>Swipe right for Challenge 18</Text>

                    <View style = {{marginTop:20, marginLeft: 84}}>
                    <Ionicons name="arrow-forward-circle-outline" size={78} color="indigo" />
                    </View>

                </View>

            </View>
        </View>

    )
}


export default Challenge25