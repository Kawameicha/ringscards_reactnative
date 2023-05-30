import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, TextInput, ScrollView} from 'react-native';
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

  // sort
  const sortedDataSource = filteredDataSource.sort(function(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  // filter
  const filteredHero = sortedDataSource.filter(x => x.type_code.includes('hero'));
  const filteredAlly = sortedDataSource.filter(x => x.type_code.includes('ally'));
  const filteredAttachment = sortedDataSource.filter(x => x.type_code.includes('attachment'));
  const filteredEvent = sortedDataSource.filter(x => x.type_code.includes('event'));

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
      <Text style={styles[item.sphere_code]}
      onPress={() => 
      // navigate to the details with params
      navigation.navigate('Card Details', {
        pack_name: item.pack_name,
        type_name: item.type_name,
        sphere_code: item.sphere_code,
        position: item.position,
        name: item.name,
        traits: item.traits,
        text: item.text,
        flavor: item.flavor,
        is_unique: item.is_unique,
        threat: item.threat,
        cost: item.cost,
        willpower: item.willpower,
        attack: item.attack,
        defense: item.defense,
        health: item.health,
        illustrator: item.illustrator,
        has_errata: item.has_errata
      })}>
        {/* {`${item.type_name} `} */}
        <Text style={styles[item.sphere_code]}>
          {`${item.name} `}
        </Text>
          <Text style={styles.subTypeText}>
            {item.pack_name}
          </Text>
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          style={styles.searchInput}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
      </View>
      <Text style={styles.typeText}>Ally</Text>
      <View style={[styles.ally]}>
        <FlatList
          data={filteredAlly}
          renderItem={ItemView}
          keyExtractor={item => item.code.toString()} // can be used to sort but need to remove starter decks
          ItemSeparatorComponent = {FlatListItemSeparator}
        />
      </View>
      {/* <Text style={styles.typeText}>Attachment</Text>
      <View style={[styles.ally]}>
        <FlatList
          data={filteredAttachment}
          renderItem={ItemView}
          keyExtractor={item => item.code.toString()} // can be used to sort but need to remove starter decks
          ItemSeparatorComponent = {FlatListItemSeparator}
        />
      </View> */}
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    margin: 5,
  },
  search: {
    flex: 1,
    padding: 5,
    margin: 5,
  },
  hero: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  ally: {
    flex: 1,
    borderWidth: 0,
    borderBottomWidth: 0,
  },
  attachment: {
    flex: 1,
    borderWidth: 1,
    borderBottomWidth: 0,
  },
  event: {
    flex: 1,
    borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopWidth: 0,
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