import * as React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import LittleLemonHeader from './Components/LittleLemonHeader';
import LittleLemonFooter from './Components/LittleLemonFooter';
import MenuItems from './Components/MenuItems';
import FeedbackForm from './Components/FeedBackForm';

export default function App() {
    return (
        <>
            <View style={styles.container}>
                <LittleLemonHeader />
                <ScrollView>
                    <View style={styles.section}>
                        <MenuItems />
                    </View>
                    <View style={styles.section}>
                        <FeedbackForm />
                    </View>
                </ScrollView>
                {/*<FeedbackForm />*/}
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
    section: {
        flex: 1,
        marginBottom: 20,
    },
    footerContainer: {
        backgroundColor: '#333333'
    },
});
