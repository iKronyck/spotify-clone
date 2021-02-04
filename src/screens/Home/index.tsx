import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useColorScheme from '../../hooks/useColorScheme';
import Theme from '../../config/theme/theme';

const Home = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: Theme[colorScheme].background}}>
      <View style={{flex: 1}}>
        <Text>Hello home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
