import {View, Text} from "react-native";
import React from "react";

export default function LittleLemonHeader() {
    return (
        <View style={{ flex: 0.12, backgroundColor: '#F4CE14' }}>
            <Text
                style={{ padding: 40, paddingTop: 60, fontSize: 30, color: 'black' }}
                numberOfLines={3}>
                Welcome
                <Text style={{ fontWeight: 'bold' }}> Little Lemon</Text>{' '}
            </Text>
        </View>
    );
}
