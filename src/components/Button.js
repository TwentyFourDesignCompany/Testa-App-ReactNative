import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ripple from 'react-native-material-ripple';

export default function Button({title, onPress, style}) {
  return (
    <Ripple
      rippleColor="rgba(255, 255, 255, 0.4)"
      rippleDuration={600}
      onPress={onPress}
      style={[styles.loginBtn, {...style}]}>
      <Text style={{color: '#fff', fontSize: 15, fontWeight: '600'}}>
        {title}
      </Text>
    </Ripple>
  );
}
const styles = StyleSheet.create({
  loginBtn: {
    height: 55,
    width: '100%',
    borderRadius: 14,
    backgroundColor: '#1971F5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
