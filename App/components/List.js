import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

const arr = [
    {
        id: 1,
        name: 'Krishna',
        sname: 'Dobariya'
    },
    {
        id: 2,
        name: 'Aradhna',
        sname: 'Dobariya'
    },
    {
        id: 3,
        name: 'Yogita',
        sname: 'Dobariya'
    },
    {
        id: 4,
        name: 'Shiv',
        sname: 'Dobariya'
    },
    {
        id: 4,
        name: 'Ravi',
        sname: 'Dobariya'
    }
]

export const List = () => {
    return (
       <FlatList
            data={arr}
            renderItem={({ item }) => 
                <View>
                    <Text>{item.name}{'  '}{item.sname}</Text>
                </View>
            }
            keyExtractor={(item) => item.id}
        />
    )
}
const styles = StyleSheet.create({
})