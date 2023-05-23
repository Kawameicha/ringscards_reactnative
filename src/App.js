import React from 'react';
import {Provider} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {store} from './redux/store';
import {Tab} from './navigation/RootNavigator';

// import screens
import {NavigationContainer} from '@react-navigation/native';
import {HomeStackScreen} from './navigation/RootNavigator';
import {SettingsStackScreen} from './navigation/RootNavigator';

const screenOptions = {
  headerShown: false,
  tabBarActiveTintColor: '#efb810',
  tabBarInactiveTintColor: 'black',
  tabBarStyle: [
    {
      display: "flex"
    },
    null
  ]
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Cards"
          component={HomeStackScreen} 
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="style" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="settings" color={color} size={size} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;