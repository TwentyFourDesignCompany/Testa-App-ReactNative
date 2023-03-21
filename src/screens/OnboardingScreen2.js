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

export default function OnboardingScreen2({navigation}) {
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
          source={require('../assets/onboarding2.png')}
        />
        <Text style={styles.headingText}>Testa grows with you!</Text>
        <Text style={styles.text}>
          Testa is a new approach to improving your health. The more you know
          about your health, the healthier you live.
        </Text>
        <View style={styles.dotWrapper}>
          <View style={styles.dot}></View>
          <View style={styles.Activedot}></View>
          <View style={styles.dot}></View>
        </View>
        <Ripple
          rippleColor="rgba(255, 255, 255, 0.9)"
          rippleCentered={true}
          rippleDuration={300}
          onPress={() => {
            navigation.navigate('login');
          }}
          style={styles.btn}>
          <Text style={{fontSize: 16, color: '#fff'}}>GET STARTED!</Text>
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
    height: 45,
    width: 200,
    borderRadius: 20,
    backgroundColor: '#1971F5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});
