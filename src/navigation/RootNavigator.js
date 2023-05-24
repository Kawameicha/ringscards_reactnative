import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import screens
import CardSearch from '../screens/CardSearch';
import Settings from '../screens/Settings';
import CardDetails from '../screens/CardDetails';

const HomeStack = createNativeStackNavigator();

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator 
    screenOptions={{ headerTintColor: '#e0b81f', headerStyle: { backgroundColor: '#730f1f' } }} >
      <HomeStack.Screen name="Player Cards" component={CardSearch}
      options={{ contentStyle:{backgroundColor: '#ffffff'} }} />
      <HomeStack.Screen name="Card Details" component={CardDetails}
      options={{ contentStyle:{backgroundColor: '#ffffff'} }} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

export function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator
    screenOptions={{ headerTintColor: '#e0b81f', headerStyle: { backgroundColor: '#730f1f' } }} >
      <SettingsStack.Screen name="Settings Screen" component={Settings}
      options={{ contentStyle:{backgroundColor: '#ffffff'} }} />
    </SettingsStack.Navigator>
  );
}

export const Tab = createBottomTabNavigator();