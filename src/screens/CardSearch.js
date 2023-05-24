import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

// import actions
import {getCards} from '../redux/actions';

export default function BooksList({ navigation }) {

  const {cards} = useSelector(state => state.cardsReducer);
  const dispatch = useDispatch();
  const fetchCards = () => dispatch(getCards());
  
  useEffect(() => {
    fetchCards()
    // add masterDataSource and filteredDataSource
    .then(() => {
      setFilteredDataSource(cards);
      setMasterDataSource(cards);
    })
  }, []);

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const searchFilterFunction = (text) => {
    // check if searched text is not blank
    if (text) {
      // inserted text is not blank
      // filter the masterDataSource
      // update filteredDataSource
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  // click on item WIP
  const getItem = (item) => {
    // function for click on an item
    alert('Type : ' + item.type_name.toUpperCase() + ' Name : ' + item.name);
  };

  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#f5f5b8",
        }}
      />
    );
  }

  const ItemView = ({item}) => {
    return (
      // return FlatList item
      // <Text
      //   onPress={() => getItem(item)}>
      //   {item.type_name.toUpperCase()}
      //   {' '}
      //   {item.name}
      // </Text>
      <Text style={styles[item.sphere_code]}
      onPress={() => 
      // navigate to the details with params
      navigation.navigate('Card Details', {
        type_name: item.type_name,
        sphere_name: item.sphere_name,
        name: item.name,
        traits: item.traits,
        text: item.text,
        attack: item.attack,
        defense: item.defense,
        health: item.health,
      })}>
        {`${item.type_name} `}
        <Text style={styles.defaultText}>
          {`${item.name} `}
        </Text>
          <Text style={styles.subTypeText}>
            {item.pack_name}
          </Text>
      </Text>
    );
  };

  return (
    <View style={{flex: 1, /*marginTop: 44,*/ paddingHorizontal: 20}}>
      <View>
        <TextInput
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          style={styles.searchInput}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <FlatList
          data={filteredDataSource}
          renderItem={ItemView}
          // {({item}) => {
          //   return (
          //     <View style={{marginVertical: 12}}>
          //       <View style={{flexDirection: 'row', flex: 1}}>
          //         <View style={{flex: 1, marginLeft: 12}}>
          //           <View>
          //             <Text style={{fontSize: 22, paddingRight: 16}}>
          //               {item.name}
          //             </Text>
          //           </View>
          //         </View>
          //       </View>
          //     </View>
          //   );
          // }}
          keyExtractor={item => item.code.toString()}
          ItemSeparatorComponent = {FlatListItemSeparator}
        />
      </View>
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  searchInput:{
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#e0b81f',
  },
  defaultText: {
    color: '#000000',
    fontSize: 14,
  },
  typeText: {
    color: '#000000',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
  },
  subTypeText: {
    color: '#646464',
    fontSize: 10,
    fontStyle:'italic',
    fontWeight: '200',
    borderBottomColor: '#0A0A0A',
    borderBottomWidth: 1,
  },
  leadership: {
    color: '#892F69',
    fontSize: 14,
    lineHeight: 20,
  },
  lore: {
    color: '#008A46',
    fontSize: 14,
    lineHeight: 20,
  },
  spirit: {
    color: '#039ABF',
    fontSize: 14,
    lineHeight: 20,
  },
  tactics: {
    color: '#BB2A2E',
    fontSize: 14,
    lineHeight: 20,
  },
  neutral: {
    color: '#C8C8C8',
    fontSize: 14,
    lineHeight: 20,
  },
  baggins: {
    color: '#E7AF30',
    fontSize: 14,
    lineHeight: 20,
  },
  fellowship: {
    color: '#C55839',
    fontSize: 14,
    lineHeight: 20,
  },
});