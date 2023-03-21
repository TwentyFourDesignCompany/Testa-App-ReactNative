import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Svg, {G, Path, Circle} from 'react-native-svg';
import Ripple from 'react-native-material-ripple';
import Button from '../components/Button';

function PayWithTestaCard() {
  return (
    <Ripple rippleColor="rgba(0,0,0,0.3)" style={styles.card}>
      <Text
        style={[
          styles.paraText,
          {fontSize: 26, fontWeight: 'bold', marginSTop: 6},
        ]}>
        $255.20
      </Text>
      <Text style={[styles.paraText, {color: 'rgba(255,255,255,0.5)'}]}>
        Balance
      </Text>
    </Ripple>
  );
}

export default function PayWithTesta({navigation}) {
  return (
    <>
      <Header onPress={() => navigation.navigate('MyTabs')} />
      <ScrollView
        style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 16}}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
            color: '#000',
          }}>
          Health Loans
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#181059',
            marginTop: 2,
            marginBottom: 20,
          }}>
          lorem ipsum dolor sit
        </Text>
        <PayWithTestaCard />
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#000',
            marginTop: 20,
          }}>
          Bank & Card
        </Text>
        <Ripple rippleColor="rgba(0,0,0,0.3)" style={styles.cardOtlined}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View>
              <Text
                style={[styles.TextBlack, {fontSize: 22, fontWeight: 'bold'}]}>
                Make It loan
              </Text>
              <Text style={styles.TextBlack}>
                {' '}
                lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor
                sit lorem ipsum dolor sit
              </Text>
              <Button
                style={{
                  borderRadius: 30,
                  width: 200,
                  height: 44,
                  marginTop: 10,
                }}
                title="Home Loans"
              />
            </View>
          </View>
        </Ripple>

        <Button
          onPress={() => {
            navigation.navigate('SelectPaymentAmount');
          }}
          style={{marginTop: 60}}
          title="I Accept"
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 16,
    backgroundColor: '#1971F5',
    marginBottom: 10,
    borderRadius: 6,
  },
  cardOtlined: {
    width: '100%',
    padding: 16,
    borderWidth: 0.6,
    marginTop: 12,
    borderRadius: 6,
  },
  paraText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 2,
  },
  TextBlack: {
    fontSize: 14,
    color: '#000',
    marginTop: 2,
  },
});
