import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

export const Button = (props) => {
    const { onPress, children, outline } = props;
    const containerStyles = [styles.container];
    const textStyles = [styles.text];
    if(outline) {
        containerStyles.push(styles.containerOutline);
        textStyles.push(styles.textOutline);
    }
    return (
        <TouchableOpacity onPress={(e) => onPress(e.persist())} style={containerStyles}>
            <Text style={textStyles}>{children}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        paddingVertical: 14,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: colors.primary,
        marginVertical: 30
    },
    containerOutline: {
        backgroundColor: 'transparent',
        borderColor: colors.border
    },
    text: {
        color: colors.white,
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '600'
    },
    textOutline: {
        color: colors.primary
    }
})