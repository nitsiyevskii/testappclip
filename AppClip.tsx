import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './src/navigation/types';
import {Group} from './src/screens/Group';
import {Home} from './src/screens/Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator, Linking, NativeModules, View} from 'react-native';

const RootStack = createStackNavigator<RootStackParamList>();

export default () => {
  const [text, setText] = useState('');
  const {AppLinkingManager} = NativeModules;

  useEffect(() => {
    AppLinkingManager.getInitialLink().then((link: string) => {
      const formattedText = link ? text + link : null;
      setText(formattedText || 'Something is going wrong');
    });
  }, []);

  if (text === '') {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Group">
          <RootStack.Screen
            name="Group"
            component={Group}
            initialParams={{groupId: '5', text}}
            options={({route}) => ({title: `Group ${route.params.groupId}`})}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
