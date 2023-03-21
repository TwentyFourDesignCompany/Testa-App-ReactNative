import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Svg, {Path} from 'react-native-svg';
import Ripple from 'react-native-material-ripple';
import Button from '../components/Button';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

function CreditCard() {
  return (
    <Ripple rippleColor="rgba(0,0,0,0.3)" style={styles.card}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={[styles.paraText, {color: 'rgba(255,255,255,0.5)'}]}>
          Available Balance
        </Text>
        <View style={{width: 70, height: 40}}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../assets/VisaCard.png')}
          />
        </View>
      </View>
      <Text
        style={[
          styles.paraText,
          {fontSize: 26, fontWeight: 'bold', marginSTop: 6},
        ]}>
        $3,578.99
      </Text>
      <Text
        style={[
          styles.paraText,
          {color: 'rgba(255,255,255,0.5),', marginTop: 30},
        ]}>
        5172 4567 8888 0000
      </Text>
    </Ripple>
  );
}

export default function PaymentMethods({navigation}) {
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
          Payment Methods
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <CreditCard />
          <CreditCard />
          <CreditCard />
        </ScrollView>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
            marginTop: 30,
          }}>
          Bank & Card
        </Text>
        <BouncyCheckbox
          size={20}
          fillColor="#225897"
          unfillColor="#FFFFFF"
          style={{
            marginTop: 16,
          }}
          text={
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'rgba(0,0,0,0.9)',
                  marginLeft: -6,
                  fontSize: 26,
                  fontWeight: '500',
                }}>
                PayPal
              </Text>
            </View>
          }
          iconStyle={{borderColor: '#225897'}}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
          // onPress={(isChecked: boolean) => {}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#225897"
          unfillColor="#FFFFFF"
          style={{
            marginTop: 16,
            width: '100%',
          }}
          text={
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'rgba(0,0,0,0.9)',
                  marginLeft: -6,
                  fontSize: 26,
                  fontWeight: '500',
                }}>
                Payoneer
              </Text>
            </View>
          }
          iconStyle={{borderColor: '#225897'}}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
          // onPress={(isChecked: boolean) => {}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#225897"
          unfillColor="#FFFFFF"
          style={{
            marginTop: 16,
          }}
          text={
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'rgba(0,0,0,0.9)',
                  marginLeft: -6,
                  fontSize: 26,
                  fontWeight: '500',
                }}>
                Visa
              </Text>
            </View>
          }
          iconStyle={{borderColor: '#225897'}}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
          // onPress={(isChecked: boolean) => {}}
        />
        <Button style={{marginTop: 60}} title="Pay with Testa wallet" />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 270,
    marginRight: 20,
    padding: 22,
    backgroundColor: '#1971F5',
    marginBottom: 10,
    borderRadius: 20,
    marginTop: 20,
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
