import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Easing, StyleSheet, View } from 'react-native';


export const First = () => {
    const animatedValue = useRef(new Animated.Value(0)).current;
    const [isTop, setIsTop] = useState(true);

    const startAnimation = () => {
        Animated.timing(animatedValue, {
            toValue:1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start()
    }

    useEffect(() => {
        startAnimation();
    }, []);

    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1000, Dimensions.get('screen').width - 0],
        // outputRange:['0deg', '360deg'],
        // extrapolate: 'clamp'
    })

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.square, { transform: [{ translateY }] }]}>

            </Animated.View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'

    },
    square: {
        width: 70,
        height: 70,
        backgroundColor: 'red'
    }
});