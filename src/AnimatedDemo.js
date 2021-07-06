import React, { Component } from 'react';
import { Animated, Easing, StyleSheet, View, Image } from 'react-native';

export default class AnimatedDemo extends Component {
    constructor() {
        super()
        this.spinValue = new Animated.Value(0)
    }
    componentDidMount() {
        this.spin()
    }
    spin() {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.ease
            }
        ).start()
    }
    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '790deg']
        })
        return (
            <View style={styles.container}>
                <Animated.Image
                    style={{
                        width: 100,
                        height: 100,
                        transform: [{ rotate: spin }]
                    }}
                    source={require('./reactNative.png')}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})