import React, { Component, useEffect } from 'react'
import { SafeAreaView, Text, View, Animated, PanResponder } from 'react-native'

export const AnimationEx = () => {
        const position = new Animated.ValueXY({x:0,y:0});
        // Animated.timing(position,{
        //     toValue:{x:200, y:200},
        //     duration:2000,
        //     useNativeDriver: true
        // }).start();

        const rotate = position.x.interpolate({
            inputRange:[0,10],
            outputRange:['0deg','60deg']
        });
        const pan = PanResponder.create({
            onMoveShouldSetPanResponder:()=>true,
            onPanResponderMove:Animated.event([
                null,
                {dx:position.x,dy:position.y}
            ]),
            onPanResponderRelease:()=>{
                // position.setValue({x:0,y:0})
                Animated.timing(position,{
                    toValue:{x:0, y:0},
                    useNativeDriver: true
                }).start();
            }
        })
        
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{flex: 1 , justifyContent:'center',alignItems:'center'}}>
                <Animated.View 
                {...pan.panHandlers}
                style={{
                    height:100,
                    width:100,
                    alignItems:'center',
                    justifyContent: 'center',
                    backgroundColor:'green',
                    transform:[
                        {translateX:position.x},
                        {translateY:position.y},
                        {rotate:rotate}
                    ],
                }}>
                    <Text> Hello </Text>
                </Animated.View>
            </View>
            </SafeAreaView>
        )
}
