import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Svg, {G, Path, Circle} from 'react-native-svg';
import Ripple from 'react-native-material-ripple';
import Button from '../components/Button';

function BalanceCard() {
  return (
    <Ripple rippleColor="rgba(0,0,0,0.3)" style={styles.card}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={styles.paraText}>Balance</Text>
        <Svg
          width={3}
          height={12}
          viewBox="0 0 3 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Circle cx={1.5} cy={1.5} r={1.5} fill="#fff" />
          <Circle cx={1.5} cy={6} r={1.5} fill="#fff" />
          <Circle cx={1.5} cy={10.5} r={1.5} fill="#fff" />
        </Svg>
      </View>
      <Text
        style={[
          styles.paraText,
          {fontSize: 26, fontWeight: 'bold', marginSTop: 6},
        ]}>
        $255.20
      </Text>
      <Text style={[styles.paraText, {color: 'rgba(255,255,255,0.5)'}]}>
        Available Balance
      </Text>
    </Ripple>
  );
}

export default function TestaWallet({navigation}) {
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
          Testa Wallet
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#181059',
            marginTop: 2,
            marginBottom: 20,
          }}>
          Open in the Testa Wallet app
        </Text>
        <BalanceCard />
        <BalanceCard />
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
                Testa Wallet
              </Text>
              <Text style={styles.TextBlack}>Checking*********5499</Text>
            </View>
            <Svg
              width={40}
              height={40}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M23.42 3.055a2.5 2.5 0 00-3.535.375l-7.24 9.07h3.2l5.992-7.51 1.925 1.572-4.825 5.938h3.22L25.7 8.14l4.295 3.508-.745.852H30a7.5 7.5 0 012.2.328 2.5 2.5 0 00-.625-3.113l-8.155-6.66zM7.5 13.75a1.25 1.25 0 011.25-1.25h1.395l1.988-2.5H8.75A3.75 3.75 0 005 13.75v15A6.25 6.25 0 0011.25 35H30a5 5 0 005-5V20a5 5 0 00-5-5H8.75a1.25 1.25 0 01-1.25-1.25zM26.25 25h2.5a1.25 1.25 0 010 2.5h-2.5a1.25 1.25 0 010-2.5z"
                fill="#181059"
              />
            </Svg>
          </View>
        </Ripple>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
            marginTop: 70,
          }}>
          <Text style={styles.TextBlack}>
            Ⓒ 2022 Testa Wallet. All Rights Reserved.
          </Text>
          <Pressable
            onPress={() => navigation.navigate('TermConditions')}
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={[styles.TextBlack, {color: 'blue'}]}>
              Terms & Conditions
            </Text>
            <Text style={[styles.TextBlack, {color: 'blue'}]}>
              Privacy Policy
            </Text>
          </Pressable>
        </View>
        <Button
          onPress={() => {
            navigation.navigate('PayWithTesta');
          }}
          title="Pay with Testa wallet"
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
