import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Ripple from 'react-native-material-ripple';
import Button from '../components/Button';
import Slider from '@react-native-community/slider';

export default function SelectPaymentAmount({navigation}) {
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
          Select Loan Amount
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
        <Slider
          style={{width: '100%', height: 40, marginVertical: 20}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#242424"
          maximumTrackTintColor="#000000"
        />
        <ScrollView
          style={{flex: 1}}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {data.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  width: 40,
                  height: 40,
                  borderWidth: 1,
                  borderColor: '#1971F5',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 6,
                  marginRight: 10,
                }}>
                <Text
                  style={{fontSize: 16, color: '#1971F5', fontWeight: 'bold'}}>
                  {item.name}
                </Text>
              </View>
            );
          })}
        </ScrollView>

        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
            color: '#000',
            marginTop: 26,
          }}>
          Select Loan Amount
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

        <Button
          onPress={() => {
            navigation.navigate('PaymentSuccess');
          }}
          style={{marginTop: 40}}
          title="Proceed"
        />
      </ScrollView>
    </>
  );
}
