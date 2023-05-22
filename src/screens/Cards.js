import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

// import actions
import {getCards} from '../redux/actions';

export default function BooksList() {

  const {cards} = useSelector(state => state.cardsReducer);
  const dispatch = useDispatch();
  const fetchCards = () => dispatch(getCards());
  
  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <View style={{flex: 1, marginTop: 44, paddingHorizontal: 20}}>
      <Text style={{fontSize: 22}}>Player Cards</Text>
      <View style={{flex: 1, marginTop: 12}}>
        <FlatList
          data={cards} // this array needs a name
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