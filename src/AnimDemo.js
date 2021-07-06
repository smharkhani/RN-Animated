import React, { Component, useEffect, useState } from 'react'
import { Text, View,Animated, SafeAreaView,Easing } from 'react-native'

export default class AnimDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),
            moveAnim: new Animated.Value(0)
        }
    }
    componentDidMount() {
        this.spin()
    }
    spin() {
        // this.state.fadeAnim.setValue(0)
        Animated.timing(this.state.fadeAnim,{
                toValue: 1,
                duration: 4000,
                useNativeDriver: true,
                easing: Easing.ease,
            }).start();
    }
    render(){
        return (
            <SafeAreaView style={{ flex:1 }}>
                <Animated.View style={{
                    flex:1, 
                    justifyContent:'center',
                    alignItems:'center',
                    opacity: this.state.fadeAnim
                }}>
                    <Animated.Text> textInComponent </Animated.Text>
                    <Animated.Text> Good Morning </Animated.Text>
                </Animated.View>
            </SafeAreaView>
        )
    }
}
