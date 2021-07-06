import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

export const ScrollAnim = () => {
  const [headerShown, setHeaderShown] = useState(false);
  
  return (
    <>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          backgroundColor: 'tomato',
          transform: [
            { translateX: headerShown ? 0 : - 100 },
          ],
        }}
      />
      
      <ScrollView
        onScroll={(event) => {
          const scrolling = event.nativeEvent.contentOffset.y;
          
          if (scrolling > 100) {
            setHeaderShown(true);
          } else {
            setHeaderShown(false);
          }
        }}
        // onScroll will be fired every 16ms
        scrollEventThrottle={16}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, height: 1000 }} />
      </ScrollView>
    </>
  );
}