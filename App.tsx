import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './src/navigation/types';
import {Group} from './src/screens/Group';
import {Home} from './src/screens/Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

const RootStack = createStackNavigator<RootStackParamList>();

export default () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen
          name="Group"
          component={Group}
          options={({route}) => ({title: `Group ${route.params.groupId}`})}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);
