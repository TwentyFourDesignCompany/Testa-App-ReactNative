import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeSvg from '../assets/Svgs/HomeSvg';
import HomeScreen from '../screens/HomeScreen';
import TextPackagesSvg from '../assets/Svgs/TextPackagesSvg';
import TestaWalletSvg from '../assets/Svgs/TestaWalletSvg';
import ProfileSvg from '../assets/Svgs/ProfileSvg';
import TestPackages from '../screens/TestPackages';
import Profile from '../screens/Profile';
import TestaWallet from '../screens/TestaWallet';
import Chat from '../screens/Chat';
import ChatIcon from '../assets/Svgs/ChatIcon';

const Tab = createBottomTabNavigator();
function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1971F5',
        tabBarInactiveTintColor: '#7B8D9E',
        tabBarLabelStyle: {
          fontSize: 10,
          marginBottom: 8,
        },
        tabBarStyle: {
          height: 56,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home Screen',
          tabBarIcon: ({focused}) => <HomeSvg focused={focused} />,
        }}
      />
      <Tab.Screen
        name="TestaPackages"
        component={TestPackages}
        options={{
          tabBarLabel: 'Testa Packages',
          tabBarIcon: ({focused}) => <TextPackagesSvg focused={focused} />,
        }}
      />
      <Tab.Screen
        name="TestaWallet"
        component={TestaWallet}
        options={{
          tabBarLabel: 'Testa Wallet',
          tabBarIcon: ({focused}) => <TestaWalletSvg focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({focused}) => <ChatIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => <ProfileSvg focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
