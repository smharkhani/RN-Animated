import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Animated } from 'react-native';

    const HEADER_MAX_HEIGHT = 200;
    const HEADER_MIN_HEIGHT = 60;
    const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

    const data = Array.from({ length: 30 });

const ScrollAnimation = () => {
      const animatedScrollYValue = useRef(new Animated.Value(0)).current;

      const headerHeight = animatedScrollYValue.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      });

      return (
        <View style={styles.fill}>
          <Animated.ScrollView
            style={styles.fill}
            contentContainerStyle={styles.scrollViewContent}
            scrollEventThrottle={16}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: animatedScrollYValue } } }])}
          >
            <View style={styles.scrollViewContent}>
              {data.map((_, i) => (
                <View key={i} style={styles.row}>
                  <Text>{i}</Text>
                </View>
              ))}
            </View>
          </Animated.ScrollView>
          <Animated.View opacity={headerHeight} style={[styles.header]}>
            <View style={styles.bar}>
              <Text style={styles.title}>Title</Text>
            </View>
          </Animated.View>
        </View>
      );
    };

    const styles = StyleSheet.create({
        fill: {
          flex: 1,
        },
        row: {
          height: 40,
          margin: 16,
          backgroundColor: '#D3D3D3',
          alignItems: 'center',
          justifyContent: 'center',
        },
        header: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: '#03A9F4',
          overflow: 'hidden',
        },
        bar: {
          marginTop: 28,
          height: 32,
          alignItems: 'center',
          justifyContent: 'center',
        },
        title: {
          backgroundColor: 'transparent',
          color: 'white',
          fontSize: 18,
        },
        scrollViewContent: {
          marginTop: 0,
        },
      });

    export default ScrollAnimation;
