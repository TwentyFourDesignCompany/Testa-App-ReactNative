import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Ripple from 'react-native-material-ripple';
import Button from '../components/Button';
import Slider from '@react-native-community/slider';
import Svg, {Path} from 'react-native-svg';

export default function PaymentSuccess({navigation}) {
  const data = [
    {name: 'Jan'},
    {name: 'Fab'},
    {name: 'Mar'},
    {name: 'Apr'},
    {name: 'May'},
    {name: 'Jun'},
    {name: 'Jul'},
  ];
  return (
    <>
      <Header onPress={() => navigation.navigate('PayWithTesta')} />
      <ScrollView
        style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 16}}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
            color: '#000',
          }}>
          Loan Success
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#181059',
            marginTop: 2,
            marginBottom: 20,
          }}>
          lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor
        </Text>
        <Text
          style={{
            fontSize: 34,
            fontWeight: 'bold',
            color: '#000',
            textAlign: 'center',
          }}>
          $255.20
        </Text>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable
            style={{
              width: 70,
              height: 70,
              borderRadius: 70,
              backgroundColor: '#1971F5',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 30,
            }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={44}
              height={44}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-check">
              <Path d="M20 6L9 17 4 12" />
            </Svg>
          </Pressable>
        </View>

        <Button
          onPress={() => navigation.navigate('MyTabs')}
          style={{marginTop: 40}}
          title="Back to Home"
        />
      </ScrollView>
    </>
  );
}
