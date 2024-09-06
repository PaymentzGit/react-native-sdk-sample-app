import React, { useEffect, useRef, useState } from 'react';
import { Button, NativeModules, Platform, StatusBar, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { PaymentBrand, PaymentMode, PaymentzCheckoutKit } from 'react-native-pz-checkout-kit'
export default function App() {

  const requestParameters = {
    "amount": "50.00",
    "city": "Mumbai",
    "country": "IN",
    "currency": "USD",
    "device": Platform.OS,
    "email": "test@abc.com",
    "hostUrl": "https://sandbox.paymentplug.com/transaction/Checkout",
    "memberId": "10558",
    "merchantTransactionId": "rng23972897",
    "orderDescription": "TestinTransaction",
    "paymentBrand": PaymentBrand.VISA,
    "paymentMode": PaymentMode.CC,
    "phone": "1234567890",
    "postCode": "400064",
    "state": "MH",
    "street": "Malad",
    "telnocc": "+91",
    "terminalId": "7079",
    "tmplAmount": "50.00",
    "tmplCurrency": "USD",
    "toType": "paymentz"
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={() =>
        PaymentzCheckoutKit.initPayment(requestParameters, "bzI93aEQeYDeE50Pa929NiDk3us8XTbU").then((data) => {
          // handle success
          console.log("SUCCESS", data)
        }).catch((error) => {
          // handle failure
          // console.log(JSON.parse(error).resultCode, "asdas")
          console.log("FAILED", error)
        })} title='pay' />
      <StatusBar barStyle={'default'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

