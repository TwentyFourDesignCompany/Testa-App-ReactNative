import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Agenda} from 'react-native-calendars';

const AgendaPage = ({navigation, route}) => {
  const items = {
    '2022-09-11': [
      {
        name: 'class of physics',
        height: 8,
        day: '01 pm',
      },
      {
        name: 'class of chemistry',
        height: 8,
        day: '02 pm',
      },
      {
        name: 'class of nothing',
        height: 8,
        day: '03 pm',
      },
      {
        name: 'class of chemistry',
        height: 8,
        day: '05 pm',
      },
      {
        name: 'class of chemistry',
        height: 8,
        day: '05 pm',
      },
      {
        name: 'class of chemistry',
        height: 8,
        day: '05 pm',
      },
      {
        name: 'class of chemistry',
        height: 8,
        day: '05 pm',
      },
    ],
    '2022-09-12': [
      {
        name: 'class of urdu',
        height: 8,
        day: '8 am',
      },
      {
        name: 'class of math',
        height: 8,
        day: '9 am',
      },
    ],
  };

  const renderItem = item => {
    return (
      <View style={[styles.item]}>
        {/* <View style={[styles.rowContainer, {marginTop:5}]}> */}
        <View>
          <Text style={{fontSize: 22}}>{item.day}</Text>
          <Text>{item.name}</Text>
        </View>
        {/* </View> */}
      </View>
    );
  };

  const rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  };

  return (
    <View style={styles.container}>
      <Agenda
        items={items}
        selected={new Date().toISOString().split('T')[0]}
        renderItem={renderItem}
        rowHasChanged={rowHasChanged}
        hideKnob={true}
        refreshControl={null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "flex-start"
  },
  contents: {
    flex: 1,
    paddingBottom: 10,
  },
  bottomfundy: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: 'skyblue',
  },
  item: {
    backgroundColor: 'skyblue',
    flex: 1,
    borderRadius: 3,
    padding: 10,
    marginRight: 5,
    marginTop: 5,
  },
});

export default AgendaPage;
