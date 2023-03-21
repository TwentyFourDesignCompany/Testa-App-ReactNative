import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function TestPackages({navigation}) {
  const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 16}}>
      <Text
        style={{
          fontSize: 26,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 20,
        }}>
        Test Packages
      </Text>

      <FlatList
        data={DATA}
        renderItem={() => {
          return (
            <View style={styles.card}>
              <View style={{width: 60, height: 60, borderRadius: 20}}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={require('../assets/userPic.png')}
                />
              </View>
              <View style={{marginLeft: 14}}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '600',
                    color: '#000',
                  }}>
                  Basic Medical Test
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#7B8D9E',
                    marginTop: 2,
                  }}>
                  Check your schedule Today
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 14,
    borderWidth: 0.6,
    borderColor: 'rgba(123,141,158,0.3)',
    marginBottom: 14,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});
