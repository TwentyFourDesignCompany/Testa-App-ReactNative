import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Eye, EyeOff, Search} from 'react-native-feather';
import Svg, {G, Path} from 'react-native-svg';

export default function InputBoxSec({
  placeholder,
  secureTextEntry,
  style,
  title,
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
          marginBottom: 4,
          fontWeight: '600',
        }}>
        {placeholder}
      </Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#ADADB0"
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
          borderWidth: 1,
          borderColor: focus ? '#559EF8' : '#B4B4B7',
          paddingVertical: 8,
          paddingHorizontal: 16,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          borderRadius: 8,
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
