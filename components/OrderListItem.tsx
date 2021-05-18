import React from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';
import { Button } from './Button';
import { Ionicons } from '@expo/vector-icons';
import { Text } from './Themed';
import { OrderItemType } from '../types';

type OrderListItemProps = {
  item: OrderItemType;
  handleDelete?: Function;
  handleQty?: Function;
};

export function OrderListItem(props: OrderListItemProps) {
  const { item, handleDelete, handleQty } = props;

  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.infoSection}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.title}>${item.price}</Text>
        <View style={styles.quantitySection}>
          <Button 
            backgroundColor="transparent" 
            width={30} 
            height={30} 
            handleClick={() => handleQty ? handleQty(-1) : null}
            disabled={item.quantity === 1}
          >
            <Ionicons name="arrow-back" size={30} color="white" />
          </Button>
          <TextInput style={styles.input} value={item.quantity.toString()} editable={false} />
          <Button 
            backgroundColor="transparent" 
            width={30} 
            height={30} 
            handleClick={() => handleQty ? handleQty(1) : null}
          >
            <Ionicons name="arrow-forward" size={30} color="white" />
          </Button>
        </View>
      </View>
      <Button handleClick={handleDelete}>
        <Ionicons name="trash" size={24} color="red" />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  },
  infoSection: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
  },
  image: {
    width: 120,
    height: 100,
  },
  quantitySection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    textAlign: 'center',
    width: 50,
    height: 24,
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
  }
});