import {ScrollView, View, Text} from 'react-native';

const green = "#495E57";
const yellow = '#F4CE14';

const menuItemsToDisplay = [
    'Item1\nItem2\nItem3\nItem4\nItem5\nItem6\nItem7\nItem8\nItem9' +
    '\nItem10\nItem1\nItem2\nItem3\nItem4\nItem5\nItem6\nItem7\nItem8' +
    '\nItem9\nItem10\nItem1\nItem2\nItem3\nItem4\nItem5\nItem6\nItem7' +
    '\nItem8\nItem9\nItem10\nItem1\nItem2\nItem3\nItem4\nItem5\nItem6' +
    '\nItem7\nItem8\nItem9\nItem10\n',
];

const MenuItems = () => {
    return (
      <View style={{ flex: 0.75 }}>
          <ScrollView indicatorStyle={'white'} style={{padding: 40, backgroundColor: green}}>
              <Text style={{fontSize: 40, flexWrap: 'wrap', color: 'white'}}>
                  View Menu
              </Text>
              <Text style={{color: yellow, fontSize: 30}}>{menuItemsToDisplay[0]}</Text>
          </ScrollView>
      </View>
    );
};

export default MenuItems;
