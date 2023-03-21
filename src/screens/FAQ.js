import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import NavLink from '../components/NavLink';

import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Svg, {G, Path, Defs, ClipPath, Circle} from 'react-native-svg';
import InputBox from '../components/InputBox';
import InputSelect from '../components/InputSelect';
import InputBoxPrimary from '../components/InputBoxPrimary';

export default function FAQ({navigation}) {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          paddingHorizontal: 20,
          paddingVertical: 20,
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Svg
            width={18}
            height={18}
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M10.472.367a1.25 1.25 0 00-1.77 0l-8.41 8.41a.996.996 0 000 1.41l8.41 8.41c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77l-7.34-7.34 7.35-7.35c.48-.49.48-1.28-.01-1.77z"
              fill="#000"
            />
          </Svg>
        </TouchableOpacity>

        <Text style={{color: '#000000', fontWeight: '600', fontSize: 18}}>
          FAQ
        </Text>
        <TouchableOpacity>
          <Svg
            width={22}
            height={22}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M11 5.5a3.61 3.61 0 00-3.606 3.606h1.833c0-.978.796-1.773 1.773-1.773.977 0 1.773.795 1.773 1.773 0 .548-.441.946-1.115 1.49-.22.173-.431.356-.633.55-.915.914-.942 1.884-.942 1.993v.611h1.833v-.58c0-.015.03-.354.404-.727.137-.138.31-.275.49-.42.714-.578 1.795-1.452 1.795-2.917A3.609 3.609 0 0011 5.5zm-.917 9.167h1.833V16.5h-1.833v-1.833z"
              fill="#225897"
            />
            <Path
              d="M11 1.833c-5.054 0-9.167 4.112-9.167 9.167 0 5.054 4.113 9.166 9.167 9.166 5.055 0 9.167-4.112 9.167-9.166 0-5.055-4.113-9.167-9.167-9.167zm0 16.5c-4.043 0-7.333-3.29-7.333-7.333 0-4.044 3.29-7.334 7.333-7.334s7.333 3.29 7.333 7.334c0 4.043-3.29 7.333-7.333 7.333z"
              fill="#225897"
            />
          </Svg>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <View style={{width: '100%', marginTop: 20}}>
            <Text style={{fontSize: 20, color: '#000'}}>Good Afternoon,</Text>
            <Text style={{fontSize: 20, color: '#000', fontWeight: '600'}}>
              Tomi 0.
            </Text>
          </View>
          <Text
            style={{fontSize: 14, color: '#000', width: '100%', marginTop: 6}}>
            Kindly tell us about your issue in the box below.
          </Text>
          <InputBoxPrimary
            numberOfLines={true}
            placeholder="Tell us about your issue"
          />
        </View>
      </ScrollView>
    </>
  );
}
