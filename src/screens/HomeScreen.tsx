import React from 'react'
import { ScrollView, View } from 'react-native';
import IntroSection from '../components/IntroSection';
import ApplyForm from '../components/ApplyForm';


const HomeScreen = ({ }) => {

    return (
        <View style={{flex:1, backgroundColor: 'transparent'}} >
            <ScrollView>
                <IntroSection />
            </ScrollView>
            <ApplyForm />
        </View>
    )
}

export default HomeScreen