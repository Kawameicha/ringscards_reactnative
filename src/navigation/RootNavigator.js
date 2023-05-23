import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import screens
import CardSearch from '../screens/CardSearch';
import Settings from '../screens/Settings';
import CardDetails from '../screens/CardDetails';

const HomeStack = createNativeStackNavigator();

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Player Cards" component={CardSearch} />
      <HomeStack.Screen name="Card Details" component={CardDetails} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

export function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings Screen" component={Settings} />
    </SettingsStack.Navigator>
  );
}

export const Tab = createBottomTabNavigator();