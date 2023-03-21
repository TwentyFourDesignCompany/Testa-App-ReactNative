import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Svg, {G, Path, Defs, ClipPath, Mask} from 'react-native-svg';
import Ripple from 'react-native-material-ripple';

function ProfileCard({title, svg, onPress}) {
  return (
    <Ripple onPress={onPress} rippleColor="rgba(0,0,0,0.3)" style={styles.card}>
      <View style={{marginRight: 12}}>{svg}</View>
      <Text style={styles.text}>{title}</Text>
    </Ripple>
  );
}

export default function Profile({navigation}) {
  return (
    <>
      <Header />
      <View style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 16}}>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginBottom: 20,
          }}>
          <View style={{width: 80, height: 80, borderRadius: 40}}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={require('../assets/userPic.png')}
            />
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: '#181059',
              marginTop: 14,
            }}>
            Adnan Karim
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#181059',
              marginTop: 2,
            }}>
            Check your schedule Today
          </Text>
        </View>

        <ScrollView style={{flex: 1}}>
          <ProfileCard
            svg={
              <Svg
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <G
                  clipPath="url(#clip0_2_1657)"
                  stroke="#4A545E"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <Path d="M12.31 15a3 3 0 100-6 3 3 0 000 6z" />
                  <Path d="M19.71 15a1.65 1.65 0 00.33 1.82l.06.06a1.998 1.998 0 010 2.83 1.998 1.998 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1.08-1.51 1.65 1.65 0 00-1.82.33l-.06.06a1.998 1.998 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1h-.17a2 2 0 110-4h.09A1.65 1.65 0 004.91 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33h.08a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1h.17a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1v0z" />
                </G>
                <Defs>
                  <ClipPath id="clip0_2_1657">
                    <Path
                      fill="#fff"
                      transform="translate(.31)"
                      d="M0 0H24V24H0z"
                    />
                  </ClipPath>
                </Defs>
              </Svg>
            }
            onPress={() => navigation.navigate('AcountSettings')}
            title="Account Settings"
          />
          <ProfileCard
            onPress={() => navigation.navigate('TermConditions')}
            svg={
              <Svg
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M12.7 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
                  stroke="#4A545E"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M16.94 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"
                  stroke="#4A545E"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            }
            title="Privacy Policy "
          />
          <ProfileCard
            onPress={() => navigation.navigate('TestaWallet')}
            svg={
              <Svg
                width={26}
                height={26}
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M22 5H4a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V7a2 2 0 00-2-2zM2 11h22"
                  stroke="#4A545E"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            }
            title="Testa wallet"
          />
          <ProfileCard
            onPress={() => navigation.navigate('HeathLoans')}
            svg={
              <Svg
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M10.041 15.625h3.25v-2.708H16v-3.25H13.29V6.958h-3.25v2.709H7.333v3.25h2.708v2.708zm1.625 7.042c-2.51-.632-4.58-2.072-6.215-4.32C3.817 16.098 3 13.602 3 10.857V4.25L11.666 1l8.667 3.25v6.608c0 2.745-.817 5.24-2.45 7.488-1.635 2.249-3.707 3.689-6.216 4.32zm0-2.275c1.878-.596 3.431-1.788 4.659-3.575 1.228-1.788 1.841-3.774 1.841-5.959V5.74l-6.5-2.438-6.5 2.438v5.118c0 2.185.614 4.171 1.842 5.959 1.228 1.787 2.78 2.979 4.658 3.575z"
                  fill="#4A545E"
                />
              </Svg>
            }
            title="Health Loans"
          />
          <ProfileCard
            svg={
              <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M4.095 14.523l3.402-3.402 2.829 2.829 3.156-3.157L11.69 9h5v5l-1.794-1.793-4.57 4.571-2.829-2.828-2.475 2.474a8 8 0 10-.927-1.9v-.001zm-1.538 1.558l-.01-.01.004-.004A9.965 9.965 0 011.69 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c-4.07 0-7.57-2.43-9.132-5.919z"
                  fill="#4A545E"
                />
              </Svg>
            }
            title="Testa FundMe"
          />
          <ProfileCard
            svg={
              <Svg
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Mask
                  id="a"
                  style={{
                    maskType: 'alpha',
                  }}
                  maskUnits="userSpaceOnUse"
                  x={1}
                  y={1}
                  width={20}
                  height={20}>
                  <Path
                    d="M2.75 11a8.25 8.25 0 0016.5 0M11 6.417V19.25"
                    stroke="#fff"
                    strokeWidth={1.83333}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <Path
                    d="M11 6.417a1.833 1.833 0 100-3.667 1.833 1.833 0 000 3.667z"
                    fill="#fff"
                    stroke="#fff"
                    strokeWidth={1.83333}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Mask>
                <G mask="url(#a)">
                  <Path d="M0 0h22v22H0V0z" fill="#4A545E" />
                </G>
              </Svg>
            }
            title="Connect Insurance"
          />
          <ProfileCard
            svg={
              <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M17.25 12a.75.75 0 100-1.5.75.75 0 000 1.5zM6 12a.75.75 0 100-1.5.75.75 0 000 1.5zM15.75 8.25a.75.75 0 100-1.5.75.75 0 000 1.5zM11.25 18a.75.75 0 100-1.5.75.75 0 000 1.5zM15.75 14.25c-.13.002-.259.02-.384.056L14.03 12.97l-.02.02c.156-.308.238-.646.24-.99A2.253 2.253 0 0012 9.75a2.223 2.223 0 00-.99.24l.02-.02-1.336-1.336a1.525 1.525 0 10-1.06 1.06L9.97 11.03l.02-.02a2.222 2.222 0 00-.24.99A2.252 2.252 0 0012 14.25c.344-.002.682-.084.99-.24l-.02.02 1.335 1.336a1.497 1.497 0 101.445-1.116zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  fill="#4A545E"
                />
                <Path
                  d="M12 23.25a.75.75 0 01-.378-.102l-9-5.25a.75.75 0 01-.372-.648V6.75a.75.75 0 01.372-.648l9-5.25a.75.75 0 01.756 0l9 5.25-.756 1.296L12 2.368 3.75 7.18v9.64L12 21.632l8.25-4.813V11.25h1.5v6a.75.75 0 01-.372.648l-9 5.25a.75.75 0 01-.378.102z"
                  fill="#4A545E"
                />
              </Svg>
            }
            title="Health Data"
          />
          <ProfileCard
            onPress={() => navigation.navigate('PaymentMethods')}
            svg={
              <Svg
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <G
                  clipPath="url(#clip0_2_1682)"
                  stroke="#4A545E"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <Path d="M21.31 4h-18a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2zM1.31 10h22" />
                </G>
                <Defs>
                  <ClipPath id="clip0_2_1682">
                    <Path
                      fill="#fff"
                      transform="translate(.31)"
                      d="M0 0H24V24H0z"
                    />
                  </ClipPath>
                </Defs>
              </Svg>
            }
            title="Payment Method"
          />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 20,
    backgroundColor: '#F1F4FA',
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#0E1012',
    marginTop: 2,
  },
});
