import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Challenge25 from './Challenge25 '
import PagerView from 'react-native-pager-view'




const Challenge18 = () => {
    return (

        <View style={{ flex: 1, backgroundColor: 'indigo' }}>
  <PagerView style={{flex: 1}} initialPage={0}>
            <View style={{ marginTop: 110 }} key = "1">
                <Text style={{ color: 'white', textAlign: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: 18 }}>The current date for Challenge 18 is:</Text>

                <View style = {{marginTop: 70, alignItems: 'center', flexDirection: 'column'}}>
                <FontAwesome name="circle-thin" size={390} color="mediumspringgreen" />

                <View style = {{marginTop: 50}}>

                <Text style={{ color: 'white', textAlign: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: 18 }}>Swipe left for Challenge 25</Text>
                </View>

<View style = {{marginTop: 20}}>
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