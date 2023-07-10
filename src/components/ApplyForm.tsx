import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ApplyForm = ({

}) => {
    const [input, setInput] = useState(false)
    const [text, onChangeText] = useState();
    return (
        // linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 110%)
        // <LinearGradient colors={['#000', '#fff']} style={{
        //     // flex: 1,
        //     // paddingLeft: 15,
        //     // paddingRight: 15,
        //     // borderRadius: 5
        // }}>
            <View
                style={{
                    // height: 100,
                    // padding: 20
                }}
            >
                {input && <TextInput
                    style={{
                        height: 50,
                        // margin: 12,
                        borderWidth: 1,
                        padding: 10,
                    }}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Enter you phone number"
                    keyboardType='numeric'
                />}
                <TouchableOpacity
                    onPress={() => { setInput(!input) }}
                    style={{
                        height: 50,
                        backgroundColor: '#fdef78',
                        borderRadius: 10,
                        justifyContent: 'center',
                        paddingLeft: 20,
                    }}
                >
                    <Text style={{ color: '#000', fontWeight: '400', fontSize: 16 }} >{`Apply Now`}</Text>
                </TouchableOpacity>
                {input && <View>
                    <View style={{ height: 10 }} />
                    <View>
                        <View>
                            <Text>{`You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.`}</Text>
                        </View>
                    </View>
                    <View style={{ height: 40 }} />
                </View>}
            </View>
        // </LinearGradient>
    );
};

export default ApplyForm;
