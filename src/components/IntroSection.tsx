import React from 'react'
import { Image, Text, View } from 'react-native';
import BGVideo from './BGVideo';
import { screenHeight } from '../helpers/ThemeHelper';
import { getAssetImageUrl, getAssetVideoUrl } from '../helpers/AssetHelper';


const IntroSection = ({ }) => {

    return (
        <View style={{
            height: screenHeight,
        }} >
            <BGVideo
                source={getAssetVideoUrl('nxt_wave_bg.mp4')}
                height={screenHeight}
                loop={true}
                resizeMode='cover'
            >
                <View style={{
                    padding: 25
                }} >
                    <View style={{height: 200}} />
                    <Image
                        source={{ uri: getAssetImageUrl('nx-wave/nx_wave_hero.png') }}
                        height={255}
                        width={255}
                    />
                    <View style={{height: 50}} />
                    <Text style={{
                        color:'#000',
                        fontSize: 30
                    }} ><Text style={{fontWeight: 'bold'}} >{`NX Wave.`}</Text>{` The next-\ngen credit card for \nthose who love \nrewards.`}</Text>
                    <View style={{height: 10}} />
                    <Text style={{
                        color:'#000',
                        fontSize: 14
                    }}>{`1% Cashback ✦ 5x Rewards ✦ Zero \nForex Markup`}</Text>
                </View>
            </BGVideo>
        </View>
    )
}

// ✦

export default IntroSection