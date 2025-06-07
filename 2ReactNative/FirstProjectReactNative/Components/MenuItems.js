import {ScrollView, View, Text, StyleSheet} from 'react-native';

const menuItemsToDisplay = [
    'Hummus\nMoutabal\nFalafel\nMarinated Olives\nKofta\nEggplant Salad\n' +
    'Lentil Burger\nSmoked Salmon\nKofta Burger\nTurkish Kebab\nFries\n' +
    'Buttered Rice\nBread Sticks\nPita Pocket\nLentil Soup\nGreek Salad\n' +
    'Rice Pilaf\nBaklava\nTartufo\nTiramisu\nPanna Cotta',
];

const MenuItems = () => {
    return (
        <View style={menuStyles.container}>
            <ScrollView
                style={menuStyles.innerContainer}>
                <Text style={menuStyles.headerText}>
                    View Menu
                </Text>
                <Text style={menuStyles.itemText}>
                    {menuItemsToDisplay[0]}
                </Text>
            </ScrollView>
        </View>
    );
};

export default MenuItems;

const menuStyles = StyleSheet.create({
    container: {
        flex: 0.75,
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 40,
        backgroundColor: 'black',
    },
    headerText: {
        color: 'white',
        fontSize: 40,
        flexWrap: 'wrap',
    },
    itemText: {
        color: '#F4CE14',
        fontSize: 36,
    },
});
