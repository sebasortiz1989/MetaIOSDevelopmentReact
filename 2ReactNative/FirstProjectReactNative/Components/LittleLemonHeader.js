import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function LittleLemonHeader() {
    return (
        <View style={headerStyles.container}>
            <Text
                style={headerStyles.headerText}
                numberOfLines={3}>
                Welcome
                <Text style={headerStyles.innerText}>
                    Little Lemon
                </Text>
            </Text>
        </View>
    );
}

const headerStyles = StyleSheet.create({
    container: {
        flex: 0.1,
        backgroundColor: '#F4CE14',
    },
    headerText: {
        padding: 40,
        paddingTop: 60,
        fontSize: 30,
        color: 'black',
    },
    innerText: {
        fontWeight: 'bold',
    },
});
