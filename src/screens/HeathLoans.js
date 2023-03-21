import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Svg, {G, Path, Circle} from 'react-native-svg';
import Ripple from 'react-native-material-ripple';
import Button from '../components/Button';

function LoanCard() {
  return (
    <Ripple rippleColor="rgba(0,0,0,0.3)" style={styles.card}>
      <Text style={[styles.paraText, {fontSize: 14, marginBottom: 4}]}>
        Balance
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={styles.paraText}> $255.20</Text>
        <Svg
          width={26}
          height={16}
          viewBox="0 0 26 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Circle cx={7.8} cy={7.8} r={7.8} fill="#EB001B" fillOpacity={0.83} />
          <Circle
            cx={18.2}
            cy={7.8}
            r={7.8}
            fill="#F79E1B"
            fillOpacity={0.72}
          />
        </Svg>
      </View>
    </Ripple>
  );
}

export default function HeathLoans({navigation}) {
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
        <LoanCard />

        <Ripple rippleColor="rgba(0,0,0,0.3)" style={styles.makeLoanCard}>
          <Text
            style={{
              fontSize: 18,
              color: '#000',
              fontWeight: '500',
            }}>
            Make a loan
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#000',
            }}>
            Looking forword to seeing the change you make in world!
          </Text>
          <Pressable
            style={{
              padding: 12,
              width: '50%',
              borderRadius: 14,
              backgroundColor: '#1971F5',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text style={{color: '#fff', fontSize: 15, fontWeight: '600'}}>
              Create Application
            </Text>
          </Pressable>
        </Ripple>

        <Button style={{marginTop: 50}} title="I Accept" />
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
    marginTop: 20,
  },
  makeLoanCard: {
    width: '100%',
    padding: 16,
    marginVertical: 20,
    borderRadius: 16,
    backgroundColor: '#F5F6FA',
  },
  paraText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 2,
  },
  TextBlack: {
    fontSize: 14,
    color: '#000',
    marginTop: 2,
  },
});
