import FullSizeButton from '@/components/FullSizeButton';
import PaymentStatusModal from '@/components/PaymentStatusModal';
import React, { FC, useEffect, useRef, useState } from 'react';
import { Alert, Button, Modal, NativeModules, Platform, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { PaymentzCheckoutKit, RequestParameter, Response } from 'react-native-pz-checkout-kit'
export default function App(
) {
  const [merchantTransactionId, setMerchantTranscationId] = useState<string>('')
  const [amount, setAmount] = useState<string>('')
  const [result, setResult] = useState<Response | null>(null)
  const [error, setError] = useState<Response | null>(null);
  const [visible, setVisible] = useState<boolean>(false)

  const requestParameters: RequestParameter = {
    "amount": amount,
    "city": "Mumbai",
    "country": "IN",
    "currency": "INR",
    "device": Platform.OS,
    "email": "test@abc.com",
    "hostUrl": "https://test.paymentz.com/transaction/Checkout",
    "memberId": "13219",
    "merchantTransactionId": merchantTransactionId,
    "orderDescription": "TestinTransaction",
    "paymentBrand": "",
    "paymentMode": "",
    "phone": "1234567890",
    "postCode": "400064",
    "state": "MH",
    "street": "Malad",
    "telnocc": "+91",
    "terminalId": "",
    "toType": "paymentz"
  }

  useEffect(() => {
    if (error) {
      setVisible(true)
      console.log("Asfasfd", error, visible)
    } else {
      console.log(error, visible, "outside")
    }
  }, [error])

  return (
    <>
      <View style={styles.container}>
        <View style={{ flexDirection: 'column', width: "100%", height: '100%', padding: 10, justifyContent: 'center', gap: 30 }}>
          <TextInput
            style={{ height: 40, borderWidth: 1, width: "100%", padding: 10 }}
            placeholder="Unique Transcation ID"
            onChangeText={newText => setMerchantTranscationId(newText)}
            defaultValue={merchantTransactionId}
          />
          <TextInput
            style={{ height: 40, borderWidth: 1, width: "100%", padding: 10 }}
            placeholder="Amount"
            onChangeText={newText => setAmount(newText)}
            defaultValue={amount}
          />
          <View>
            <Text>Result: {result?.resultDescription}</Text>
            <Text>Error: {error?.resultDescription}</Text>
          </View>


          <TouchableOpacity style={{ width: "100%", padding: 10, backgroundColor: '#1488CC' }} onPress={() => {
            PaymentzCheckoutKit.initPayment(requestParameters, "YOiHKCvM2XSHcMEMbBrHCYzNS8iIZOi4").then((data) => {
              // handle success
              if (data) {
                setResult(data)
                setVisible(true)
              }

            }).catch((error) => {
              if (error) {
                setError(error)
                setVisible(true)
              }
            })
          }}>
            <Text style={{ color: 'white', alignSelf: 'center' }}>Pay</Text>
          </TouchableOpacity>
        </View>

        <PaymentStatusModal visibility={visible} onSelect={() => setVisible(false)} isSuccess={result ? true : false} response={result ? result : error} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "100%"
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

