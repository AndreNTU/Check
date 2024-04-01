import {Text, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Challenge25 from './Challenge25 '
import PagerView from 'react-native-pager-view'


let day = date.getDate()
let month = date.getMonth () + 1
let year = date.getFullYear() - 18

let fullDate = `${day}-${month}-${year}`



const Challenge18 = () => {
    return (

        <View style={{ flex: 1, backgroundColor: 'indigo' }}>
            <PagerView style={{ flex: 1 }} initialPage={0}>
                <View style={{ marginTop: 110 }} key="1">
                    <Text style={{ color: 'white', textAlign: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: 18 }}>The current date for Challenge 18 is:</Text>


                    <View style={{ marginTop: 150, alignItems: 'center', flexDirection: 'row', gap: 15, justifyContent: 'center', marginBottom: 50 }}>

                        <Fontisto name="date" size={40} color="mediumspringgreen" style={{ alignContent: 'flex-start', alignItems: 'flex-start', justifyContent: 'flex-start' }} />
                        <Text style={{ color: 'white', fontSize: 30 }}> {fullDate} </Text>
                    </View>

                    <View style={{ marginTop: 100, alignItems: 'center', flexDirection: 'column' }}>
                        <Text style={{ color: 'white', textAlign: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: 18 }}>Swipe left for Challenge 25</Text>


                        <View style={{ marginTop: 20 }}>
                            <Ionicons name="arrow-back-circle-outline" size={78} color="mediumspringgreen" />
                        </View>

                    </View>

                </View>
                <View >
                    <Challenge25></Challenge25>
                </View>

            </PagerView>
        </View>

    )
}


export default Challenge18