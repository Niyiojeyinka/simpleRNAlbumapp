import * as React from 'react';
import {TouchableOpacity, Text} from 'react-native';
const ControlBtn = (props) => {
  return (
    <TouchableOpacity
      onPress={props.handleClick}
      style={{
        position: 'absolute',
        paddingHorizontal: 8,
        paddingVertical: 5,
        backgroundColor: 'red',
        width: 60,
        ...props.styles,
      }}>
      <Text style={{color: 'white'}}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default ControlBtn;
