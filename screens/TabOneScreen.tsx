import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Text, View } from '../components/Themed';
import { Button } from '../components/Button';
import { OrderListItem } from '../components/OrderListItem';
import { OrderItemType } from '../types';

const ORDER_LIST = [
  {
    image: 'https://www.verywellfit.com/thmb/a4580FjTjbub9q4kI5m9X-Po-p0=/2002x1334/filters:no_upscale():max_bytes(150000):strip_icc()/Bananas-5c6a36a346e0fb0001f0e4a3.jpg',
    title: 'Banana',
    price: 7,
    quantity: 1,
    id: 1,
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmnPqu9Z4_5rZ3xNVQsKmEpzJW0GYGtxLYxw&usqp=CAU',
    title: 'Apple',
    price: 5,
    quantity: 1,
    id: 2,
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-oL3W452hnk8V8NmPrqNkCe1pzma8jqyDw&usqp=CAU',
    title: 'Pineapple',
    price: 6,
    quantity: 1,
    id: 3,
  },
  {
    image: 'https://images.everydayhealth.com/images/ordinary-fruits-with-amazing-health-benefits-05-1440x810.jpg',
    title: 'Strawberry',
    price: 10,
    quantity: 1,
    id: 4,
  },
];

export default function TabOneScreen() {
  const [orderList, setOrderList] = React.useState(ORDER_LIST);

  const getTotal = () => {
    let total = 0;
    orderList.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const handleQty = (id: number, value: number) => {
    const newOrderList = JSON.parse(JSON.stringify(orderList));
    newOrderList.forEach((item: OrderItemType) => {
      if (item.id == id) {
        item.quantity += value;
      }
    });
    setOrderList(newOrderList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Summary</Text>
      <View style={styles.totalSection}>
        <Text style={styles.title}>Total: ${getTotal()}</Text>
        <Button backgroundColor="orange">
          <Ionicons name="add" size={24} color="white" />
        </Button>
      </View>
      <View style={styles.listContent}>
        {
          orderList.map(item => (
            <OrderListItem 
              key={`order-item-${item.id}`} 
              item={item} 
              handleQty={(value: number) => handleQty(item.id, value)}
            />
          ))
        }
      </View>
      <View style={styles.bottomButtons}>
        <View style={styles.bottomButtonContainer}>
          <Button width={50} height={50}>
            <Ionicons name="close" size={30} color="red" />
          </Button>
          <Text>Cancel</Text>
        </View>
        <View style={styles.bottomButtonContainer}>
          <Button width={50} height={50}>
            <Ionicons name="scan" size={30} color="green" />
          </Button>
          <Text>Checkout</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  totalSection: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    marginTop: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 30,
  },
  bottomButtons: {
    flexDirection: 'row',
    width: '100%',
  },
  bottomButtonContainer: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  listContent: {
    flex: 1,
    width: '100%',
    overflow: 'scroll',
  }
});
