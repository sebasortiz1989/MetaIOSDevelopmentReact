import React from 'react';

import { View, Text, StyleSheet, SectionList } from 'react-native';

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

const Header = () => <Text style={menuStyles.headerText}>View Menu</Text>;

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
    const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

    const renderSectionHeader = ({ section: { title } }) => (
        <View style={menuStyles.headerStyle}>
            <Text style={menuStyles.sectionHeader}>{title}</Text>
        </View>
    );

    return (
        <View style={menuStyles.container}>
            <SectionList
                sections={menuItemsToDisplay}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                ListHeaderComponent={Header}
                ListFooterComponent={Footer}
                ItemSeparatorComponent={Separator}
            />
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
});

export default MenuItems;
