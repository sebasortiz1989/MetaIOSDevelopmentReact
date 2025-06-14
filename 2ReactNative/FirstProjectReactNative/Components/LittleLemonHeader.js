import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function LittleLemonHeader() {
    return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.headerText}>
                Little Lemon
            </Text>
        </View>
    );
}

const headerStyles = StyleSheet.create({
    container: {
        backgroundColor: '#F4CE14',
    },
    headerText: {
        padding: 40,
        paddingTop: 60,
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    },
    innerText: {
        fontWeight: 'bold',
    },
});
