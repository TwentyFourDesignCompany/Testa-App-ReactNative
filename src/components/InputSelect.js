import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Eye, EyeOff, Search} from 'react-native-feather';
import Svg, {G, Path} from 'react-native-svg';

function InputEntry({setSelect}) {
  return (
    <TouchableOpacity
      onPress={() => {
        setSelect(false);
      }}
      style={{marginBottom: 10}}>
      <Text style={{color: '#4B4949', fontSize: 14}}>
        Lorem ipsum dolor sit.
      </Text>
    </TouchableOpacity>
  );
}

export default function InputSelect({
  placeholder,
  secureTextEntry,
  style,
  title,
}) {
  const [focus, setFocus] = useState(false);
  const [select, setSelect] = useState(false);
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
        {title}
      </Text>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          select ? setSelect(false) : setSelect(true);
        }}
        style={{
          borderWidth: 1,
          borderColor: focus ? '#559EF8' : '#B4B4B7',
          paddingVertical: 14,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          borderRadius: 8,
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          position: 'relative',
          backgroundColor: '#fff',
        }}>
        <Text style={{color: '#ADADB0', fontSize: 14}}>{placeholder}</Text>
        <Svg
          width={13}
          height={13}
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M14.85 4.027l-.751-.751a.475.475 0 00-.692 0L7.5 9.183 1.593 3.276a.475.475 0 00-.691 0l-.752.751a.475.475 0 000 .692l7.004 7.004a.475.475 0 00.692 0l7.004-7.004a.475.475 0 000-.692z"
            fill="#000"
          />
        </Svg>
        {/* {secureTextEntry ? (
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
      ) : null} */}
      </TouchableOpacity>
      {select ? (
        <View
          style={{
            backgroundColor: '#fff',
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            marginTop: -5,
            paddingHorizontal: 18,
            paddingTop: 10,
            paddingBottom: 6,
            borderWidth: 1,
            borderColor: '#B4B4B7',
            shadowColor: 'rgba(0,0,0,0.4)',
            shadowOffset: {
              width: 0,
              height: 9,
            },
            shadowOpacity: 0.2,
            shadowRadius: 12.35,

            elevation: 19,
            marginBottom: 10,
          }}>
          <InputEntry setSelect={setSelect} />
          <InputEntry setSelect={setSelect} />
          <InputEntry setSelect={setSelect} />
        </View>
      ) : null}
    </View>
  );
}
