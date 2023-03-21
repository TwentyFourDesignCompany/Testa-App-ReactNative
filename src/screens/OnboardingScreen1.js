import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import Ripple from 'react-native-material-ripple';

export default function OnboardingScreen1({navigation}) {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#fff',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={styles.image}
          source={require('../assets/onboarding1.png')}
        />
        <Text style={[styles.headingText, {width: '60%', textAlign: 'center'}]}>
          Healthier and wellness starts here
        </Text>
        <Text style={styles.text}>
          Testa members have full access to our ever-expanding suite of tools,
          features, and programs. Non-members can still use the Testa app to
          access basic features.
        </Text>
        <View style={styles.dotWrapper}>
          <View style={styles.dot}></View>
          <View style={styles.Activedot}></View>
          <View style={styles.dot}></View>
        </View>
        <Ripple
          rippleColor="rgba(255, 255, 255, 0.5)"
          rippleCentered={true}
          rippleDuration={200}
          onPress={() => {
            navigation.navigate('Onboarding2');
          }}
          style={styles.btn}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="#fff"
            width={26}
            height={26}>
            <Path d="M438.6 278.6l-160 160c-6.2 6.3-14.4 9.4-22.6 9.4s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .002 273.7.002 256S14.33 224 32 224h306.8L233.4 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.45 12.55 12.45 32.75-.05 45.25z" />
          </Svg>
        </Ripple>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
  },
  headingText: {
    fontSize: 22,
    color: '#000',
    fontWeight: '600',
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    width: '80%',
  },
  dotWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 80,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#E4E4E4',
    borderRadius: 8,
    marginHorizontal: 2,
  },
  Activedot: {
    width: 20,
    height: 8,
    backgroundColor: '#1971F5',
    borderRadius: 8,
    marginHorizontal: 2,
  },
  btn: {
    height: 55,
    width: 55,
    borderRadius: 55,
    backgroundColor: '#1971F5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});
