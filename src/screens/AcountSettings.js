import {
  View,
  Text,
  StatusBar,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import Ripple from 'react-native-material-ripple';
import Svg, {Path} from 'react-native-svg';

function SettingEntry({title, svg}) {
  return (
    <Ripple
      rippleColor="rgba(0,0,0,0.2)"
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
      }}>
      <Text style={{color: '#000', fontSize: 18}}>{title}</Text>
      {svg}
    </Ripple>
  );
}

export default function AcountSettings({navigation}) {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              color: '#000',
              fontWeight: '600',
              fontSize: 26,
              marginBottom: 40,
            }}>
            Settings
          </Text>
          <SettingEntry
            title="Profile"
            svg={
              <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M20 20.772v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 10.772a4 4 0 100-8 4 4 0 000 8z"
                  stroke="#12121D"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            }
          />
          <SettingEntry
            title="Contacts"
            svg={
              <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2V3zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7V3z"
                  stroke="#12121D"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            }
          />
          <SettingEntry
            title="Payment  Information"
            svg={
              <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M21 4H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2zM1 10h16"
                  stroke="#12121D"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            }
          />
          <SettingEntry
            title="Payout Information"
            svg={
              <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M21 4H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2zM6 12h16"
                  stroke="#12121D"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M10 8l-4 4 4 4"
                  stroke="#12121D"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            }
          />
          <SettingEntry
            title="Notification"
            svg={
              <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9zM13.73 21a1.999 1.999 0 01-3.46 0"
                  stroke="#12121D"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            }
          />
          <SettingEntry
            title="Terms of Service"
            svg={
              <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"
                  stroke="#12121D"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z"
                  stroke="#000"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            }
          />
          <SettingEntry
            title="Privacy Policy"
            svg={
              <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  stroke="#12121D"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            }
          />
          <SettingEntry
            title="Open Source License"
            svg={
              <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M15.514 17.765l6-6-6-6M7.514 5.765l-6 6 6 6"
                  stroke="#12121D"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            }
          />
          <Ripple
            onPress={() => navigation.navigate('login')}
            rippleColor="rgba(0,0,0,0.2)"
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 90,
            }}>
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"
                stroke="#1971F5"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <Text style={{color: '#1971F5', fontSize: 18, marginLeft: 20}}>
              Log Out
            </Text>
          </Ripple>
        </View>
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
  navWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
  },
  socialBtn: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
});
