
import React from 'react';
import {View} from 'react-native';

import LittleLemonHeader from './Components/LittleLemonHeader';
import MenuItems from "./Components/MenuItems";

function App(): React.JSX.Element {
    return (
        <>
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#495E57',
                }}>
                <LittleLemonHeader />
                <MenuItems/>
                {/*<WelcomeScreen />*/}
            </View>
            {/*<View style={{ backgroundColor: '#495E57' }}>*/}
            {/*    <LittleLemonFooter />*/}
            {/*</View>*/}
        </>
    );
}

export default App;
