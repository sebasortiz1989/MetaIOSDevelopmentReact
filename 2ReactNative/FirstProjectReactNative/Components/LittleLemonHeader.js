import {View, Text} from "react-native";
import React from "react";

export default function LittleLemonHeader() {
    return (
        <View style={{ flex: 0.2, backgroundColor: '#F4CE14' }}>
            <Text style={{ padding: 40, paddingTop: 60, fontSize: 30, color: 'black' }}>
                Welcome to Little Lemon
            </Text>
        </View>
    );
}
