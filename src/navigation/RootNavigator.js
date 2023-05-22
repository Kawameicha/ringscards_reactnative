import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import screens
import Cards from '../screens/Cards';
import Settings from '../screens/Settings';
const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarActiveTintColor: '#efb810',
  tabBarInactiveTintColor: 'black',
  tabBarStyle: [
    {
      display: "flex"
    },
    null
  ]
}

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Cards"
          component={Cards}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="style" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="settings" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;