import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function AppointmentCard({navigation, title, onPress}) {
  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <View style={styles.left}>
        <Text style={{fontSize: 24, color: 'white', fontWeight: 'bold'}}>
          15
        </Text>
        <Text style={{fontSize: 16, color: 'white'}}>Mon</Text>
      </View>
      <View style={styles.right}>
        <Text style={{fontSize: 14, color: 'white'}}>09:30 AM</Text>
        <Text style={{fontSize: 18, color: 'white', fontWeight: '700'}}>
          Dr. Mim Akhter
        </Text>
        <Text style={{fontSize: 14, color: 'rgba(255,255,255,0.6)'}}>
          Hematology
        </Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    width: 240,
    padding: 20,
    borderRadius: 24,
    backgroundColor: '#1971F5',
    marginRight: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    marginRight: 40,
  },
  left: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 20,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    width: 65,
  },
});
