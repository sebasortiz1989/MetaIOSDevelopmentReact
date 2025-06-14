import React from 'react';

import { View, Text, StyleSheet, SectionList, Pressable, ScrollView } from 'react-native';

const menuItemsToDisplay = [
    {
        title: 'Appetizers',
        data: [
            { name: 'Hummus', price: '$5.00' },
            { name: 'Moutabal', price: '$5.00' },
            { name: 'Falafel', price: '$7.50' },
            { name: 'Marinated Olives', price: '$5.00' },
            { name: 'Kofta', price: '$5.00' },
            { name: 'Eggplant Salad', price: '$8.50' },
        ],
    },
    {
        title: 'Main Dishes',
        data: [
            { name: 'Lentil Burger', price: '$10.00' },
            { name: 'Smoked Salmon', price: '$14.00' },
            { name: 'Kofta Burger', price: '$11.00' },
            { name: 'Turkish Kebab', price: '$15.50' },
        ],
    },
    {
        title: 'Sides',
        data: [
            { name: 'Fries', price: '$3.00', id: '11K' },
            { name: 'Buttered Rice', price: '$3.00' },
            { name: 'Bread Sticks', price: '$3.00' },
            { name: 'Pita Pocket', price: '$3.00' },
            { name: 'Lentil Soup', price: '$3.75' },
            { name: 'Greek Salad', price: '$6.00' },
            { name: 'Rice Pilaf', price: '$4.00' },
        ],
    },
    {
        title: 'Desserts',
        data: [
            { name: 'Baklava', price: '$3.00' },
            { name: 'Tartufo', price: '$3.00' },
            { name: 'Tiramisu', price: '$5.00' },
            { name: 'Panna Cotta', price: '$5.00' },
        ],
    },
];

const Separator = () => <View style={menuStyles.separator}/>;

// const Header = () => <Text style={menuStyles.headerText}>View Menu</Text>;

const Footer = () => (
    <Text style={menuStyles.footerText}>
        All Rights Reserved by Little Lemon 2022
    </Text>
);

const Item = ({ name, price }) => (
    <View style={menuStyles.innerContainer}>
        <Text style={menuStyles.itemText}>{name}</Text>
        <Text style={menuStyles.itemText}>{price}</Text>
    </View>
);

const MenuItems = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

    const renderSectionHeader = ({ section: { title } }) => (
        <View style={menuStyles.headerStyle}>
            <Text style={menuStyles.sectionHeader}>{title}</Text>
        </View>
    );

    return (
        <View style={menuStyles.container}>
            <ScrollView contentContainerStyle={menuStyles.scrollViewContent}>
                {!showMenu && (
                    <Text style={menuStyles.infoSection}>
                        Little Lemon is a charming neighborhood bistro that serves simple food
                        and classic cocktails in a lively but casual environment. We would love
                        to hear your experience with us!
                    </Text>
                )}

                <Pressable
                    style={({pressed}) => [
                        menuStyles.button,
                        pressed && menuStyles.buttonPressed,
                    ]}
                    onPress={() => setShowMenu(!showMenu)}
                >
                    <Text style={menuStyles.buttonText}>
                        {showMenu ? 'Home' : 'View Menu'}
                    </Text>
                </Pressable>

                {showMenu && (
                    <SectionList
                        sections={menuItemsToDisplay}
                        keyExtractor={(item, index) => item + index}
                        renderItem={renderItem}
                        renderSectionHeader={renderSectionHeader}
                        ListFooterComponent={Footer}
                        ItemSeparatorComponent={Separator}
                        scrollEnabled={false}  // Disable scrolling for this list
                    />
                )}
            </ScrollView>
        </View>
    );
};

const menuStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemText: {
        color: '#F4CE14',
        fontSize: 20,
    },
    headerStyle: {
        backgroundColor: '#F4CE14',
    },
    sectionHeader: {
        color: 'black',
        fontSize: 26,
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: '#EDEFEE',
    },
    headerText: {
        flexWrap: 'wrap',
        textAlign: 'center',
        paddingVertical: 8,
        fontSize: 40,
        color: '#EDEFEE',
    },
    footerText: {
        flexWrap: 'wrap',
        textAlign: 'center',
        paddingVertical: 8,
        fontSize: 30,
        color: '#EDEFEE',
    },
    button: {
        backgroundColor: '#F4CE14',
        padding: 10,
        width: '70%',
        marginVertical: 8,
        borderRadius: 30,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
    buttonPressed: {
        backgroundColor: '#E1BD13',
        elevation: 3,
    },
    buttonText: {
        flexWrap: 'wrap',
        textAlign: 'center',
        fontSize: 30,
        color: 'black',
    },
    infoSection: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
    },
});

export default MenuItems;
