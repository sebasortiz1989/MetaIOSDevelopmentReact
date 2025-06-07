import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './Components/LittleLemonHeader';
import LittleLemonFooter from './Components/LittleLemonFooter';
import MenuItems from './Components/MenuItems';

export default function App() {
    return (
        <>
            <View style={styles.container}>
                <LittleLemonHeader />
                <MenuItems />
            </View>
            <View style={styles.footerContainer}>
                <LittleLemonFooter />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    footerContainer: { backgroundColor: '#333333' },
});
