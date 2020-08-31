import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomButton = (props) => {
  const {isDisable, title, onSubmit} = props;

  return (
    <TouchableOpacity
      disabled={isDisable}
      style={[styles.btn, {backgroundColor: isDisable ? '#ececec' : 'orange'}]}
      onPress={onSubmit}>
      <Text style={[styles.btnText, {color: isDisable ? '#767676' : '#fff'}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 180,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  btnText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default CustomButton;
