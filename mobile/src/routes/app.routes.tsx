import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Main from '../pages/Main';
import Profile from '../pages/Profile';

const App = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName = '';
        if (route.name === 'Main') {
          iconName = 'home';
        } else if (route.name === 'User') {
          iconName = 'user';
        } else if (route.name === 'Add') {
          iconName = 'plus-circle';
        }
        return <Icon name={iconName} size={size + 8} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#6C63FF',
      inactiveTintColor: '#3f3d56',
      showLabel: false,
      style: {
        backgroundColor: '#EEE',
      },
    }}
  >
    <App.Screen name="Main" component={Main} />
    <App.Screen name="User" component={Profile} />
  </App.Navigator>
);

export default AppRoutes;
