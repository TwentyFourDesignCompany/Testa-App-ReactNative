import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function Header({navigation, title, onPress}) {
  return (
    <View style={styles.header}>
      <Pressable
        onPress={onPress ? onPress : null}
        style={styles.backNavigation}>
        <Svg
          width={26}
          height={26}
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M4.8 12.393h15M10.85 18.418L4.8 12.394l6.05-6.025"
            stroke="#200E32"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </Pressable>
      <Text style={styles.text}>{title}</Text>
      <View />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    paddingVertical: 4,
    paddingBottom: 10,
  },
  backNavigation: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    marginRight: 40,
  },
});
