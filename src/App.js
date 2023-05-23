import React from 'react';
import {Provider} from 'react-redux';

import {store} from './redux/store';
import {Tab} from './navigation/RootNavigator';

// import screens
import {NavigationContainer} from '@react-navigation/native';
import {HomeStackScreen} from './navigation/RootNavigator';
import {SettingsStackScreen} from './navigation/RootNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="CardSearch" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;