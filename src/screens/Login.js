import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
import InputBox from '../components/InputBox';
import Header from '../components/Header';
import Ripple from 'react-native-material-ripple';

export default function Login({navigation}) {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header
        onPress={() => navigation.navigate('Onboarding1')}
        title="Login"
      />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            paddingHorizontal: 20,
            marginTop: 20,
          }}>
          <InputBox
            svg={
              <Svg
                width={20}
                height={20}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M19.757 3.667a1.222 1.222 0 00-.25 0H2.396c-.11.001-.219.018-.324.048l8.83 8.794 8.855-8.842z"
                  fill="#B4B4B7"
                />
                <Path
                  d="M20.662 4.516l-8.898 8.861a1.222 1.222 0 01-1.723 0L1.222 4.583c-.027.1-.041.203-.043.306V17.11a1.222 1.222 0 001.223 1.222h17.11a1.222 1.222 0 001.223-1.222V4.89a1.224 1.224 0 00-.073-.373zM3.239 17.111h-.85v-.874l4.443-4.406.862.862-4.455 4.418zm16.262 0h-.856l-4.455-4.418.862-.862 4.442 4.406.007.874z"
                  fill="#B4B4B7"
                />
              </Svg>
            }
            placeholder="Email"
          />
          <InputBox
            svg={
              <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M17 12a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6a2 2 0 012-2V7a5 5 0 1110 0v5zm-5 7a2 2 0 100-4 2 2 0 000 4zm3-7V7a3 3 0 00-6 0v5h6z"
                  fill="#B4B4B7"
                />
              </Svg>
            }
            placeholder="Password"
            secureTextEntry={true}
          />
          <Ripple
            rippleColor="rgba(255, 255, 255, 0.9)"
            rippleCentered={true}
            rippleDuration={300}
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              width: '100%',
            }}>
            <Text style={{color: '#000000', fontSize: 14}}>
              Forgot Password?
            </Text>
          </Ripple>
          <Ripple
            rippleColor="rgba(255, 255, 255, 0.4)"
            rippleDuration={600}
            onPress={() => {
              navigation.navigate('MyTabs');
            }}
            style={style.loginBtn}>
            <Text style={{color: '#fff', fontSize: 15, fontWeight: '600'}}>
              Login
            </Text>
          </Ripple>
          <Pressable
            onPress={() => navigation.navigate('Signup')}
            style={style.alreadtbtn}>
            <Text style={{color: '#000', fontSize: 15}}>
              Do not have an account?
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 15,
                fontWeight: '600',
                marginLeft: 4,
              }}>
              Sign up
            </Text>
          </Pressable>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: '#C4C4C4',
              marginTop: 30,
              marginBottom: 16,
            }}></View>
          <Text
            style={{
              color: '#C4C4C4',
              fontSize: 14,
              top: -30,
              backgroundColor: '#fff',
              paddingHorizontal: 10,
            }}>
            OR
          </Text>
          <Ripple
            rippleColor="rgba(0, 0, 0, 0.5)"
            rippleCentered={true}
            rippleDuration={300}
            style={style.socialBtn}>
            <Svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M19.805 8.041H19V8h-9v4h5.652A5.998 5.998 0 014 10a6 6 0 016-6c1.53 0 2.921.577 3.98 1.52L16.81 2.69A9.954 9.954 0 0010 0C4.478 0 0 4.478 0 10c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-.67-.069-1.325-.195-1.959z"
                fill="#FFC107"
              />
              <Path
                d="M1.153 5.346L4.44 7.755A5.997 5.997 0 0110 4c1.53 0 2.921.577 3.98 1.52l2.83-2.829A9.954 9.954 0 0010 0a9.994 9.994 0 00-8.847 5.346z"
                fill="#FF3D00"
              />
              <Path
                d="M10 20c2.583 0 4.93-.989 6.704-2.596l-3.095-2.62A5.956 5.956 0 0110 16a5.997 5.997 0 01-5.64-3.973l-3.262 2.512C2.752 17.778 6.113 20 10 20z"
                fill="#4CAF50"
              />
              <Path
                d="M19.805 8.041H19V8h-9v4h5.652a6.02 6.02 0 01-2.044 2.786l.002-.002 3.095 2.62C16.485 17.602 20 15 20 10c0-.67-.069-1.325-.195-1.959z"
                fill="#1976D2"
              />
            </Svg>
            <Text style={{color: '#000000', fontWeight: '600', marginLeft: 20}}>
              Continue with Google
            </Text>
          </Ripple>
          <Ripple
            rippleColor="rgba(0, 0, 0, 0.5)"
            rippleCentered={true}
            rippleDuration={300}
            style={style.socialBtn}>
            <Svg
              width={18}
              height={22}
              viewBox="0 0 18 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M4.462 20.608A4.794 4.794 0 013.315 19.6c-.355-.405-.683-.83-.984-1.272a12.134 12.134 0 01-1.645-3.182C.224 13.833 0 12.576 0 11.345 0 9.97.314 8.77.927 7.763a5.173 5.173 0 011.937-1.907 5.37 5.37 0 012.623-.735c.324 0 .674.044 1.045.13.267.071.592.184.989.325.505.184.782.297.876.324.296.103.545.147.74.147.148 0 .357-.044.595-.112.134-.045.386-.124.747-.27.357-.124.638-.23.862-.308.343-.096.675-.184.97-.229.35-.052.707-.066 1.06-.041a6.575 6.575 0 011.794.365c.94.36 1.702.92 2.268 1.716-.239.14-.464.301-.67.482-.451.378-.835.823-1.137 1.316a4.296 4.296 0 00-.595 2.204c.014.947.27 1.781.776 2.502.37.535.853.992 1.417 1.344.29.184.538.31.776.396-.111.328-.23.646-.371.96a12.392 12.392 0 01-1.155 2.024c-.4.55-.714.96-.952 1.234-.371.417-.729.735-1.09.957a2.53 2.53 0 01-1.342.382 3.199 3.199 0 01-.955-.11c-.267-.085-.53-.177-.79-.283a6.564 6.564 0 00-.834-.297 4.573 4.573 0 00-2.146-.003 7.09 7.09 0 00-.84.283c-.387.154-.643.257-.791.3a4.309 4.309 0 01-.913.151c-.48 0-.927-.13-1.37-.393l.011-.01zm6.33-16.154c-.627.297-1.226.424-1.821.383-.094-.568 0-1.149.249-1.785a4.723 4.723 0 01.923-1.47c.42-.456.932-.83 1.504-1.1.61-.298 1.19-.458 1.746-.482.072.595 0 1.18-.23 1.811a5.174 5.174 0 01-.924 1.539 4.698 4.698 0 01-1.465 1.103l.018.001z"
                fill="#000"
              />
            </Svg>
            <Text style={{color: '#000000', fontWeight: '600', marginLeft: 20}}>
              Continue with Apple
            </Text>
          </Ripple>
          <Ripple
            rippleColor="rgba(0, 0, 0, 0.5)"
            rippleCentered={true}
            rippleDuration={300}
            style={style.socialBtn}>
            <Svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M18.896 20c.61 0 1.104-.494 1.104-1.104V1.104C20 .494 19.506 0 18.896 0H1.104C.494 0 0 .494 0 1.104v17.792C0 19.506.494 20 1.104 20h17.792z"
                fill="#395185"
              />
              <Path
                d="M13.8 20v-7.745h2.6l.389-3.019h-2.99V7.31c0-.874.243-1.47 1.497-1.47h1.598v-2.7a21.363 21.363 0 00-2.33-.118c-2.304 0-3.881 1.406-3.881 3.99v2.225H8.076v3.019h2.607V20H13.8z"
                fill="#fff"
              />
            </Svg>
            <Text style={{color: '#000000', fontWeight: '600', marginLeft: 20}}>
              Continue with Facebook
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
    marginVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    marginTop: 40,
  },
  socialBtn: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
  loginBtn: {
    height: 55,
    width: '90%',
    borderRadius: 14,
    backgroundColor: '#1971F5',
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alreadtbtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
});
