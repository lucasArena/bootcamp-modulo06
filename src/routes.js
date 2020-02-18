import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createStackNavigator();

function Route() {
  const options = {
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#7159c1',
    },
    headerTintColor: '#FFF',
    headerBackTitleVisible: false,
  };

  return (
    <NavigationContainer>
      <Routes.Navigator>
        <Routes.Screen name="Github Fun" component={Main} options={options} />
        <Routes.Screen name="User" component={User} options={options} />
      </Routes.Navigator>
    </NavigationContainer>
  );
}

export default Route;
