import { View, Text } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

const About = () => {
    return (
        <View style={{ flex: 1, alignContent: 'center', alignItems: 'center' }}>
            <Text style={{ paddingTop: 100, fontWeight: 'bold', fontSize: 20 }}>About</Text>
            <Text style={{ color: 'blueviolet' }}>_____________________________________________________</Text>
            <View style={{ margin: 25, flexDirection: 'column' }}>
                <Text style={{ fontSize: 16, marginRight: 20, marginTop: 30, textAlign: 'center' }}>
                    So you wanted to find out more about
                    check huh? This is a straightforward
                    app but with one purpose. To
                    take the pressure off staff who need to
                    check ID but don’t remember the date
                    they need to look for! We...well I have
                    eliminated this issue for yourself,
                    take the App out, have a quick glance,
                    then you’re on your way! With functionality to
                    check both Challenge 18 and Challenge 25 you're covered.  </Text>

                <Text style={{ fontSize: 16, marginTop: 75, textAlign: 'center', fontStyle: 'italic' }}> Be sure to leave us...well me, a review in the App
                    store, and be sure to mention any addition features you'd
                    like to request!</Text>

                <View style = {{marginTop: 225}}>
                    <AntDesign style={{ alignSelf: 'center' }} name="hearto" size={20} color="red" />
                    <Text style={{ marginTop: 0, color: 'blueviolet', fontSize: 16, textAlign: 'center' }}> Version 1.0.0</Text>
                </View>

            </View>
        </View>
    )
}

export default About