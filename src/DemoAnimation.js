import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const DemoAnimation = () => {
    return (
        <View style={styles.container}>
           <View>
                <Text style={styles.fadingText}>Fading View!</Text>
            </View>
            <View style={styles.box}>
                <TouchableOpacity>
                    <Text>Animate Box</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    fadingContainer: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor: "powderblue"
    },
    fadingText: {
      fontSize: 28,
      textAlign: "center",
      margin: 10
    },
    buttonRow: {
      flexDirection: "row",
      marginVertical: 16
    },
    box: {
      width: 150,
      height: 150,
      backgroundColor: 'red'
    }
  });