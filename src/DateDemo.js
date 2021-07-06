import React, { useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import moment from 'moment';

export const formateDate = (time) => {
    const outputDate = moment(time).format("DD-MM-YYYY");
    return outputDate;
}

const DateDemo = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const outputDate = moment().format("DD-MM-YYYY");
  const [dateString, setDateString] = useState('');
  

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    hideDatePicker();
    setDateString(outputDate);
  };

//   const handleDateChange = (date) => {
//     setDateString(date);
//     console.log(date);
//     props.handleDate(date);
//   };

  return (
      <SafeAreaView>
        <View>
        <Button title="Show Date Picker" onPress={showDatePicker} />
        <Text>{dateString.toString()}</Text>
        <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode={dateString}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
        />
        </View>
    </SafeAreaView>
  );
};

export default DateDemo;