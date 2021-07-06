import React, { useState } from 'react';
import { Animated, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const AnimationDemo = () => {
    const [animatedWidth] = useState(new Animated.Value(100));
    const [animatedHeight] = useState(new Animated.Value(100));
    const animatedBox = () => {
        Animated.timing(animatedWidth, {
            toValue: 300,
            duration: 300,
            // useNativeDriver: true
        }).start()
        Animated.timing(animatedHeight, {
            toValue: 500,
            duration: 500,
            // useNativeDriver: true
        }).start()
    }
    const animatedStyle = { width: animatedWidth, height: animatedHeight }
    return (
        <SafeAreaView>
            <TouchableOpacity style={styles.container} onPress={() => animatedBox()}>
                <Animated.View style={[styles.box, animatedStyle]} />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        backgroundColor: 'blue',
        width: 50,
        height: 100
    }
})
