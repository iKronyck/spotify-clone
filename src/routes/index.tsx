import * as React from 'react';
import {ColorSchemeName} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabBarNavigator from './TabBarNavigator';
import {RootStackParams} from '../types/navigation';

type NavigationProps = {
  colorScheme: ColorSchemeName;
};

const Stack = createStackNavigator<RootStackParams>();

const Navigation: React.FC<NavigationProps> = ({colorScheme}) => {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Root" component={TabBarNavigator} />
    </Stack.Navigator>
  );
};

export default Navigation;
