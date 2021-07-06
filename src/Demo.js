import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export const Demo = () => {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{alignItems:'center'}}>
                  <View>
                    <View>
                      <Button onPress={showDatepicker} title="Show date picker!" />
                    </View>
                    
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={'date'}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        // neutralButtonLabel="clear"
                      />
                  </View>
                </View>
            </SafeAreaView>
        )
}