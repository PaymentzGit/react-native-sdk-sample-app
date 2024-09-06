import React, { Component, FC, ReactNode, useState } from 'react';
import { View, Text, StyleSheet, Modal, Image, TouchableOpacity, Button } from 'react-native';
import { Icon, IconButton, MD3Colors } from 'react-native-paper';
import { Response } from 'react-native-pz-checkout-kit';

interface PaymentStatusModal {
    visibility: boolean,
    onSelect: () => void,
    isSuccess: boolean,
    response: Response | null
}
const PaymentStatusModal: FC<PaymentStatusModal> = ({
    visibility: visibility,
    onSelect: onSelect,
    isSuccess: isSuccess,
    response: response
}) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType='fade'
                transparent
                visible={visibility}
            >
                <View style={styles.centeredView}>
                    <IconButton
                        icon="close"
                        iconColor={'white'}
                        style={{ marginLeft: 40 }}
                        size={22}
                        onPress={onSelect} />
                    <View style={styles.modalView}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.text}>Transcation Details</Text>

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', alignSelf: 'center' }}>
                            <Icon source={isSuccess ? 'check' : 'close'} color={isSuccess ? 'green' : 'red'} size={60} />
                            <Text style={{ width: '80%' }}>{response?.resultDescription}</Text>
                            {/* <View style={{ flexDirection: 'column' }}>
                                <Text>{response?.firstName}</Text>
                                <Text>{response?.lastName}</Text>
                                <Text>{response?.custEmail}</Text>
                                <Text>{response?.amount}</Text>
                            </View> */}
                        </View>
                        <TouchableOpacity activeOpacity={0.7} onPress={onSelect} style={{
                            width: "100%",
                            padding: 10,
                            backgroundColor: '#1488CC',
                            alignItems: 'center',
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10
                        }}>
                            <Text style={{ color: 'white' }}>DONE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal >
        </View >

    );
}

export default PaymentStatusModal;


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        height: "100%",
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalView: {
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        borderRadius: 10,
    },
    textVehicle: {
        height: 50,
        width: 50,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        textAlign: 'center'
    },
    companyName: {
        marginHorizontal: 20,

        borderWidth: 2,
        borderColor: '#e8e8e8',
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textView: {
        width: '30%',
        alignItems: 'center',
        marginTop: 5,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#e8e8e8',
        borderRadius: 30,
        textAlign: 'center',
        margin: 5,
        padding: 10
    },
    modal: {
        flexWrap: 'wrap',
        width: '100%',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        marginBottom: 10,
        alignSelf: 'center',
        paddingBottom: 10
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: 10
    },
    tabTextStyle: {
        textAlign: 'center',
        // marginLeft: 5,
        // marginRight: 5,
        fontSize: 15,
        color: '#000',
        // marginTop: 20,
        padding: 20

    },
    tabUnderline: {
        // width: '100%',
        color: '#1488CC'
    },
    buttonsContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
    },
    buttonStyle: {
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,

        borderWidth: 1,
    },
    inputText: {
        padding: 10,
        marginVertical: 10,
        width: '90%',
        backgroundColor: "white",
        height: 40,
        borderColor: "#1488CC",
        alignSelf: 'center'
    },
    innerView: {
        width: "100%",
        height: 250
    },
    bottomButton: {
        alignItems: "center",
        padding: 20,
        backgroundColor: "#1488CC",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        marginTop: 20,
        width: '100%'
    },
    activeTab: {
        alignItems: 'center',
        width: '50%',
        borderBottomWidth: 2,
        borderBottomColor: '#1488CC',
    },
    inActiveTab: {
        alignItems: 'center',
        width: '50%',
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16
    },
    iconView: {
        position: "absolute",
        marginLeft: "90%"
    },
    selectedView: {
        backgroundColor: '#d1ebfa',
        borderWidth: 0.2,
        borderColor: '#1488CC'
        // marginHorizontal: 10
    },
    text: {
        fontSize: 20,
        color: "#1488CC",
        // marginBottom: 20
        padding: 10
    },
    button: {
        margin: 20,
        width: 200,
    }
});