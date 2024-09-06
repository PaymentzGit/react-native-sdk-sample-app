import { StyleProp, StyleSheet, Text, Touchable, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'

const FullSizeButton = (onPress: () => Promise<void>, style?: StyleProp<ViewStyle>, title?: string) => {
    return (
        <TouchableOpacity style={[styles.appButtonContainer, style]} onPress={onPress}>
            <Text style={styles.appButtonText}>{title || "Pay"}</Text>
        </TouchableOpacity>
    )
}

export default FullSizeButton

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})