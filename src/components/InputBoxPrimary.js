import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Eye, EyeOff, Search} from 'react-native-feather';
import Svg, {G, Path} from 'react-native-svg';

export default function InputBoxPrimary({
  placeholder,
  secureTextEntry,
  style,
  label,
  numberOfLines,
}) {
  const [focus, setFocus] = useState(false);
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry);
  return (
    <View
      style={{
        marginBottom: 14,
        width: '100%',
        ...style,
      }}>
      <Text
        style={{
          color: '#000',
          marginLeft: 2,
          marginBottom: 6,
          fontWeight: '600',
        }}>
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#ADADB0"
        numberOfLines={numberOfLines ? 6 : null}
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
          paddingVertical: 8,
          paddingHorizontal: 16,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          borderRadius: 8,
          backgroundColor: '#F0F0F2',
          textAlignVertical: numberOfLines ? 'top' : 'center',
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
            <EyeOff stroke="#B4B4B7" fill="none" width={20} height={20} />
          ) : (
            <Eye stroke="#B4B4B7" fill="none" width={20} height={20} />
          )}
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
