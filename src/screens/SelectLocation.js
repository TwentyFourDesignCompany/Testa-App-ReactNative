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
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import InputBox from '../components/InputBox';
import InputSelect from '../components/InputSelect';

export default function SelectLocation({navigation}) {
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
            width={15}
            height={15}
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <G clipPath="url(#clip0_1_1772)">
              <Path
                d="M9.152 7.5l5.608-5.608a.816.816 0 00.24-.58.814.814 0 00-.24-.58L14.27.24a.814.814 0 00-.58-.239.813.813 0 00-.58.24L7.5 5.848 1.892.24a.813.813 0 00-.58-.239.813.813 0 00-.58.24L.24.73c-.32.32-.32.841 0 1.161L5.848 7.5.24 13.11a.815.815 0 00-.24.58c0 .22.086.426.24.58l.492.492c.154.154.36.239.58.239.22 0 .425-.085.58-.24L7.5 9.152l5.608 5.609c.155.154.36.239.58.239.22 0 .426-.085.58-.24l.492-.49a.815.815 0 00.24-.581.815.815 0 00-.24-.58L9.152 7.5z"
                fill="#000"
              />
            </G>
            <Defs>
              <ClipPath id="clip0_1_1772">
                <Path fill="#fff" d="M0 0H15V15H0z" />
              </ClipPath>
            </Defs>
          </Svg>
        </TouchableOpacity>

        <Text style={{color: '#000000', fontWeight: '600', fontSize: 18}}>
          Select location
        </Text>
        <TouchableOpacity>
          <Svg
            width={20}
            height={20}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M11 5.5a3.61 3.61 0 00-3.606 3.606h1.833c0-.978.796-1.773 1.773-1.773.977 0 1.773.795 1.773 1.773 0 .548-.441.946-1.115 1.49-.22.173-.431.356-.633.55-.915.914-.942 1.884-.942 1.993v.611h1.834l-.001-.58c0-.015.03-.354.404-.727.137-.138.31-.275.49-.42.714-.578 1.795-1.452 1.795-2.917A3.609 3.609 0 0011 5.5zm-.917 9.167h1.834V16.5h-1.834v-1.833z"
              fill="#225897"
            />
            <Path
              d="M11 1.833c-5.054 0-9.166 4.112-9.166 9.167 0 5.054 4.112 9.167 9.166 9.167 5.055 0 9.167-4.113 9.167-9.167 0-5.055-4.112-9.167-9.167-9.167zm0 16.5c-4.043 0-7.333-3.29-7.333-7.333S6.957 3.667 11 3.667c4.044 0 7.334 3.29 7.334 7.333s-3.29 7.333-7.334 7.333z"
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
            marginTop: 30,
          }}>
          <InputBox placeholder="From" />
          <InputBox placeholder="To" />
          <InputSelect
            placeholder="Select Category"
            title="Category"
            style={{marginTop: 14}}
          />
          <InputSelect placeholder="Select Type" title="Type" />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SearchResult');
            }}
            style={{
              height: 55,
              width: '100%',
              borderRadius: 14,
              backgroundColor: '#225897',
              marginVertical: 30,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff', fontSize: 15, fontWeight: '600'}}>
              Search
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
