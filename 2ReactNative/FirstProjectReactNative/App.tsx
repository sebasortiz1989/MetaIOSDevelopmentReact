import * as React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import LittleLemonHeader from './Components/LittleLemonHeader';
import MenuItems from './Components/MenuItems';
import LittleLemonFooter from './Components/LittleLemonFooter';

export default function App() {
    return (
        <>
            {/*<View style={styles.container}>*/}
            {/*    <LittleLemonHeader/>*/}
            {/*    <FeedbackForm />*/}
            {/*</View>*/}

            {/*<View style={styles.container}>*/}
            {/*    <LittleLemonHeader />*/}
            {/*    <LoginScreen />*/}
            {/*</View>*/}
            {/*<View style={styles.footerContainer}>*/}
            {/*    <LittleLemonFooter />*/}
            {/*</View>*/}

            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <LittleLemonHeader />
                </View>
                <ScrollView style={styles.scrollViewContainer}>
                    <View style={styles.section}>
                        <MenuItems />
                    </View>
                </ScrollView>
                <View style={styles.footerContainer}>
                    <LittleLemonFooter />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    headerContainer: {
        flex: 0.15,
    },
    scrollViewContainer: {
        flex: 0.8,
    },
    footerContainer: {
        flex: 0.05,
    },
    section: {
        flexGrow: 1,
    },
});
