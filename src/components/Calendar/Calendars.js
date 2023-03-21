import React, {useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Header from '../Header';

const Calendars = ({navigation}) => {
  const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
  const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
  const workout = {key: 'workout', color: 'green'};
  const schedule = {
    '2022-09-16': [{name: 'item 1 - any js object'}],
    '2022-09-17': [{name: 'item 2 - any js object', height: 80}],
    '2022-09-19': [{name: 'item 3 - any js object'}, {name: 'any js object'}],
  };
  return (
    <>
      <Header onPress={() => navigation.navigate('Appointments')} />

      <View style={styles.container}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
            color: '#000',
          }}>
          Schedule Date
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
        <Calendar
          markingType={'multi-dot'}
          current={'2022-09-11'}
          markedDates={{
            '2022-09-16': {
              dots: [vacation, massage, workout],
              selected: true,
              selectedColor: 'blue',
            },
            '2022-09-17': {dots: [massage, workout], disabled: true},
            '2022-09-18': {marked: true, dotColor: 'red', activeOpacity: 0},
            '2022-09-19': {disabled: true, disableTouchEvent: true},
          }}
          onDayPress={day => {
            navigation.navigate('Agendas', {day: day});
          }}
        />
      </View>
    </>
  );
};

export default Calendars;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
});
