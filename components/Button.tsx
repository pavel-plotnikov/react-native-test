import React, { ReactElement } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

type ButtonProps = {
  width?: number;
  height?: number;
  backgroundColor?: string;
  disabled?: boolean;
  children?: ReactElement;
  handleClick?: Function;
};

export function Button(props: ButtonProps) {
  const { children, handleClick, disabled, ...otherStyles } = props;

  return (
    <TouchableOpacity 
      onPress={() => handleClick ? handleClick() : null} 
      disabled={disabled} 
      style={[styles.button, {...otherStyles}, disabled ? styles.disabled : {}]}
    >
      { children }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 10,
    width: 35,
    height: 35,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5
  }
});