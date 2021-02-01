import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import useColorScheme from '../hooks/useColorScheme';
import {TabBarParams} from '../types/navigation';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Theme from '../config/theme/theme';
import YourLibrary from '../screens/YourLibrary';
import AccountType from '../screens/AccountType';

const Tab = createBottomTabNavigator<TabBarParams>();

const TabBarNavigator = () => {
  const colorScheme = useColorScheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Theme[colorScheme].tabIconSelected,
        inactiveTintColor: Theme[colorScheme].tabIconDefault,
        style: {
          backgroundColor: Theme[colorScheme].backgroundTabBar,
          paddingTop: 8,
        },
        labelStyle: {fontSize: 14},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <IonIcon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="YourLibrary"
        component={YourLibrary}
        options={{
          tabBarLabel: 'Your Library',
          tabBarIcon: ({color, size}) => (
            <IonIcon name="library" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AccountType"
        component={AccountType}
        options={{
          tabBarLabel: 'Premium',
          tabBarIcon: ({color, size}) => (
            <MaterialComIcon name="spotify" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBarNavigator;
