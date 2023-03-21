import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

function AppointmentType({onPress}) {
  return (
    <Pressable style={styles.card}>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: '#000',
        }}>
        Vacination Type
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: 'gray',
          marginTop: 2,
          marginBottom: 20,
        }}>
        Please select type of appointment you like to schedule for
      </Text>
      <Button onPress={onPress} title="Book Now" />
    </Pressable>
  );
}

export default function Appointments({navigation}) {
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
          Appointment Type
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: 'gray',
            marginTop: 2,
            marginBottom: 20,
          }}>
          Please select type of appointment you like to schedule for
        </Text>
        <AppointmentType
          onPress={() => {
            navigation.navigate('Calendars');
          }}
        />
        <AppointmentType
          onPress={() => {
            navigation.navigate('Calendars');
          }}
        />
        <AppointmentType
          onPress={() => {
            navigation.navigate('Calendars');
          }}
        />
        <AppointmentType
          onPress={() => {
            navigation.navigate('Calendars');
          }}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 12,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
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
