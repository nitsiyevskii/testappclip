import React, {useEffect, useState} from 'react';
import {
  NativeModules,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Button} from '../components/Button';
import {RootStackScreenProps} from '../navigation/types';

export const Home = ({navigation, route}: RootStackScreenProps<'Home'>) => {
  const [header, setHeader] = useState('Welcome!');
  const {SharingManager} = NativeModules;

  const getData = () => {
    SharingManager.getItem(
      'item',
      'group.nitsil',
      (error: string, loadedData: string) => {
        if (!loadedData) return;
        const data = JSON.parse(loadedData);
        data?.text && setHeader(data.text);
      },
    );
  };

  const clearData = () => {
    setHeader('Welcome');
    SharingManager.setItem('item', null, 'group.nitsil');
  };

  const onGroupPress = (groupId: string | null) => () =>
    navigation.navigate('Group', {groupId});

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{header}</Text>
      <Button title="Group 1" bgColor="red" onPress={onGroupPress('1')} />
      <Button title="Group 2" bgColor="blue" onPress={onGroupPress('2')} />
      <Button title="GET DATA" bgColor="yellow" onPress={getData} />
      <Button title="CLEAR DATA" bgColor="green" onPress={clearData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightGray',
    justifyContent: 'center',
    alignContent: 'center',
  },
  headerText: {
    textAlign: 'center',
    color: 'green',
  },
});
