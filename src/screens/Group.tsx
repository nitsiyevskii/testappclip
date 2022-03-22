import React, {useCallback} from 'react';
import {NativeModules, Text, View} from 'react-native';
import {Button} from '../components/Button';
import {RootStackScreenProps} from '../navigation/types';

export const Group = ({navigation, route}: RootStackScreenProps<'Group'>) => {
  const {text} = route.params;
  const {SharingManager} = NativeModules;

  const onPress = useCallback(
    () =>
      SharingManager.setItem(
        'item',
        JSON.stringify({text: 'Well done!'}),
        'group.nitsil',
      ),
    [],
  );

  return (
    <View
      style={{marginTop: 20, alignContent: 'center', justifyContent: 'center'}}>
      <Text style={{textAlign: 'center'}}>{text}</Text>
      <Button title="Press ME" {...{onPress}} bgColor="orange" />
    </View>
  );
};
