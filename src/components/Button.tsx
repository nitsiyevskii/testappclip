import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

type ButtonProps = {
  title: string;
  bgColor: string;
  onPress: () => void;
};

export const Button = ({title, bgColor, onPress}: ButtonProps) => (
  <TouchableOpacity
    {...{onPress}}
    style={{
      alignSelf: 'center',
      width: 150,
      marginVertical: 10,
      padding: 20,
      backgroundColor: bgColor,
    }}>
    <Text style={{textAlign: 'center', fontSize: 18}}>{title}</Text>
  </TouchableOpacity>
);
