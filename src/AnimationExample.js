import React, { Component, useRef } from 'react'
import { Animated, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const AnimationExample = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

  const marginTop = useRef(new Animated.Value(20)).current;
    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 5000,
          useNativeDriver: true,
        }).start();
      }
    
      const fadeOut = () => {
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 5000,
          useNativeDriver: true,
        }).start();
      }
      const animate = () => {
        Animated.timing(marginTop, {
          toValue: 200,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }
    return (
        <View style={styles.container}>
           <Animated.View
          style={[styles.fadingContainer, {
            opacity: fadeAnim      // Bind opacity to animated value
          }]}>
                <Text style={styles.fadingText}>Fading View!</Text>
                </Animated.View>
                <Animated.View
          style={[styles.box, {
            marginTop: marginTop    // Bind opacity to animated value
          }]}>
          <TouchableOpacity>
              <Text>Animate Box</Text>
          </TouchableOpacity>
          <Button title="Animate Box" onPress={animate} />
          </Animated.View>
      <View style={styles.buttonRow}>
          <Button title='Fade In' onPress={fadeIn} />
          <Button title='Fade Out' onPress={fadeOut} />
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