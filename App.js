import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen1 from './src/screens/OnboardingScreen1';
import OnboardingScreen2 from './src/screens/OnboardingScreen2';
import {StatusBar} from 'react-native';
import TermConditions from './src/screens/TermConditions';
import SelectLocation from './src/screens/SelectLocation';
import FAQ from './src/screens/FAQ';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import BottomNavigation from './src/BottomNavigationTab/BottomNavigation';
import AcountSettings from './src/screens/AcountSettings';
import PaymentMethods from './src/screens/PaymentMethods';
import HeathLoans from './src/screens/HeathLoans';
import Appointments from './src/screens/Appointments';
import Calendars from './src/components/Calendar/Calendars';
import Agendas from './src/components/Calendar/Agendas';
import PayWithTesta from './src/screens/PayWithTesta';
import SelectPaymentAmount from './src/screens/SelectPaymentAmount';
import PaymentSuccess from './src/screens/PaymentSuccess';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}
        initialRouteName="main">
        <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
        <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="MyTabs" component={BottomNavigation} />
        <Stack.Screen name="TermConditions" component={TermConditions} />
        <Stack.Screen name="SelectLocation" component={SelectLocation} />
        <Stack.Screen name="FAQ" component={FAQ} />
        <Stack.Screen name="AcountSettings" component={AcountSettings} />
        <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
        <Stack.Screen name="HeathLoans" component={HeathLoans} />
        <Stack.Screen name="Appointments" component={Appointments} />
        <Stack.Screen name="Calendars" component={Calendars} />
        <Stack.Screen name="Agendas" component={Agendas} />
        <Stack.Screen name="PayWithTesta" component={PayWithTesta} />
        <Stack.Screen
          name="SelectPaymentAmount"
          component={SelectPaymentAmount}
        />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
