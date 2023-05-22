import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
// sandbox
import { useState } from "react";

// import actions
import {getMovies} from '../redux/actions';

export default function BooksList() {

  const {cards} = useSelector(state => state.moviesReducer);
  const dispatch = useDispatch();
  const fetchMovies = () => dispatch(getMovies());
  
  useEffect(() => {
    fetchMovies();
  }, []);

  // sandbox
  // const [movies, setData] = useState([]);

  // const fetchData = async () => {
  //   const resp = await fetch("https://www.ringsdb.com/api/public/cards/");
  //   const movies = await resp.json();
  //   setData(movies);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <View style={{flex: 1, marginTop: 44, paddingHorizontal: 20}}>
      <Text style={{fontSize: 22}}>Popular Movies</Text>
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