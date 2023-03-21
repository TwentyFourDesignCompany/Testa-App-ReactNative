import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import NavLink from '../components/NavLink';
import Svg, {
  Path,
  Rect,
  Defs,
  Pattern,
  Use,
  Image as ImageSvg,
} from 'react-native-svg';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Header from '../components/Header';

export default function TermConditions({navigation}) {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header onPress={() => navigation.navigate('MyTabs')} />
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
          <Text
            style={{
              color: '#000',
              fontWeight: '600',
              fontSize: 26,
            }}>
            Privacy Policy Notice
          </Text>

          <Text
            style={{
              color: '#000',
              fontSize: 15,
              marginTop: 10,
              width: '100%',
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi sed
            lectus vestibulum in faucibus nunc purus fermentum ut. Nulla dui,
            diam laoreet iaculis eu ac rhoncus, tortor congue. Tellus risus
            sagittis, scelerisque ut ultrices placerat consequat, eget. Sodales
            leo ut urna volutpat sed facilisis aliquet.
          </Text>

          <Text
            style={{
              color: '#000',
              fontSize: 14,
              width: '100%',
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi sed
            lectus vestibulum in faucibus nunc purus fermentum ut. Nulla dui,
            diam laoreet iaculis eu ac rhoncus, tortor congue. Tellus risus
            sagittis, scelerisque ut ultrices placerat consequat, eget. Sodales
            leo ut urna volutpat sed facilisis aliquet.
          </Text>
          <Text
            style={{
              color: '#000',
              fontSize: 14,

              width: '100%',
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi sed
            lectus vestibulum in faucibus nunc purus fermentum ut. Nulla dui,
            diam laoreet iaculis eu ac rhoncus, tortor congue. Tellus risus
            sagittis, scelerisque ut ultrices placerat consequat, eget. Sodales
            leo ut urna volutpat sed facilisis aliquet. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Mi sed lectus vestibulum in
            faucibus nunc purus fermentum ut. Nulla dui, diam laoreet iaculis eu
            ac rhoncus, tortor congue. Tellus risus sagittis, scelerisque ut
            ultrices placerat consequat, eget. Sodales leo ut urna volutpat sed
            facilisis aliquet. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mi sed lectus vestibulum in faucibus nunc purus
            fermentum ut. Nulla dui, diam laoreet iaculis eu ac rhoncus, tortor
            congue. Tellus risus sagittis, scelerisque ut ultrices placerat
            consequat, eget. Sodales leo ut urna volutpat sed facilisis aliquet.
          </Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MyTabs');
            }}
            style={{
              height: 55,
              width: '90%',
              borderRadius: 14,
              backgroundColor: '#1971F5',
              marginVertical: 30,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff', fontSize: 15, fontWeight: '600'}}>
              Agree and Continue
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
