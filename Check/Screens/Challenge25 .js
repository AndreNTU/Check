import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PagerView from 'react-native-pager-view'



date = new Date()

let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear() - 25
let fullDate = `${day}-${month}-${year}`



const Challenge25 = () => {
    return (

        <View style={{ flex: 1, backgroundColor: 'mediumspringgreen' }}>

        <PagerView style={{ flex: 1 }} initialPage={0}>
        
            <View key="1">
            <View style={{ marginTop: 75, alignItems: 'center' }}>
            <MaterialCommunityIcons name="account-multiple-check-outline" size={50} color="black" />
            <Text style = {{color: 'indigo'}}>_____________________________________________________</Text>
        </View>

                    <Text style={{ color: 'black', textAlign: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: 18 , marginTop: 75}}>The current date for Challenge 25 is:</Text>


                    <View style={{ marginTop: 150, alignItems: 'center', flexDirection: 'row', gap: 15, justifyContent: 'center', marginBottom: 50 }}>
                        <Fontisto name="date" size={40} color="indigo" style={{ alignContent: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start' }} />
                        <Text style={{ color: 'black', fontSize: 30 }}> {fullDate} </Text>
                    </View>

                    <View style={{ marginTop: 110, alignItems: 'center', flexDirection: 'column' }}>
                        <Text style={{ color: 'black', textAlign: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: 18 }}>Swipe right for Challenge 18</Text>
                        <View style={{ marginTop: 20 }}>
                            <Ionicons name="arrow-forward-circle-outline" size={78} color="indigo" />
                        </View>

                    </View>

                </View>

            </PagerView>
        </View>
    )}


export default Challenge25