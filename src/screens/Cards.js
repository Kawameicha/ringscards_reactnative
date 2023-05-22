import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, SearchBar, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import SearchInput, { createFilter } from 'react-native-search-filter';

// import actions
import {getCards} from '../redux/actions';

export default function BooksList() {

  const {cards} = useSelector(state => state.cardsReducer);
  const dispatch = useDispatch();
  const fetchCards = () => dispatch(getCards());
  
  useEffect(() => {
    fetchCards()
    .then(() => {
      setFilteredDataSource(cards);
      setMasterDataSource(cards);
    })
}, []);

  // sandbox
  // useEffect(() => {
  //   fetch('https://ringsdb.com/api/public/cards/')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       setFilteredDataSource(responseJson);
  //       setMasterDataSource(responseJson);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
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
    // Function for click on an item
    alert('Id : ' + item.id + ' Name : ' + item.name);
  };

  return (
    <View style={{flex: 1, marginTop: 44, paddingHorizontal: 20}}>
      {/* <Text style={{fontSize: 22}}>Player Cards</Text> */}
      <View style={{flex: 1, marginTop: 12}}>
      <TextInput
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <FlatList
          data={filteredDataSource}
          renderItem={({item}) => {
            return (
              <View style={{marginVertical: 12}}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <View style={{flex: 1, marginLeft: 12}}>
                    <View>
                      <Text style={{fontSize: 22, paddingRight: 16}}>
                        {item.name}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
          keyExtractor={item => item.code.toString()}
        />
      </View>
    </View>
  );
}