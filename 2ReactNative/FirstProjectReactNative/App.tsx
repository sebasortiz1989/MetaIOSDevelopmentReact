
import React from 'react';
import {
  View,
} from 'react-native';

import LittleLemonHeader from './Components/LittleLemonHeader';
import LittleLemonFooter from './Components/LittleLemonFooter';

function App(): React.JSX.Element {
    return (
        <>
            <View
                style={{ flex: 1, backgroundColor: '#495E57' }}>
                <LittleLemonHeader />
            </View>
            <View style={{ backgroundColor: '#495E57' }}>
                <LittleLemonFooter />
            </View>
        </>
    );
}
export default App;
