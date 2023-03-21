import {TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Eye, EyeOff} from 'react-native-feather';

export default function InputBox({placeholder, secureTextEntry, style, svg}) {
    const [focus, setFocus] = useState(false);
    const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry);
    return (
        <View
            style={{
                marginBottom: 10,
                width: '100%',
                backgroundColor: '#F1F4FA',
                paddingVertical: 12,
                paddingHorizontal: 16,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                borderRadius: 14,
                ...style
            }}>
            {svg}
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#242424"
                secureTextEntry={isSecureTextEntry}
                onFocus={() => {
                    setFocus(true);
                }}
                onBlur={() => {
                    setFocus(false);
                }}
                style={{
                    padding: 0,
                    width: '100%',
                    fontSize: 14,
                    color: '#242424',
                    marginLeft: 14,
                }}
            />
            {secureTextEntry ? (
                <TouchableOpacity
                    style={{position: 'absolute', right: 20, bottom: 20}}
                    onPress={() => {
                        isSecureTextEntry
                            ? setIsSecureTextEntry(false)
                            : setIsSecureTextEntry(true);
                    }}>
                    {isSecureTextEntry ? (
                        <EyeOff stroke="#B4B4B7" fill="none" width={20} height={20}/>
                    ) : (
                        <Eye stroke="#B4B4B7" fill="none" width={20} height={20}/>
                    )}
                </TouchableOpacity>
            ) : null}
        </View>
    );
}
