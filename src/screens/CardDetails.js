import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const CardDetails = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{
          width: '50%',
          marginTop: 2,
          borderColor: '#FFDF20',
          borderWidth: 1,
          borderRadius: 3,
        }}>
          <Text>Card name</Text>
          <View style={{ marginLeft: 5, marginTop: 5 }}>
            <Text>
              <Text>More text</Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default CardDetails;

// styles
const styles = StyleSheet.create({
  typeText: {
    fontWeight: '700',
  },
  traitsText: {
    fontWeight: '700',
    fontStyle: 'italic',
  },
  flavorText: {
    fontSize: 11,
    fontWeight: '600',
    fontStyle: 'italic',
  },
  container: {
    margin: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  metaContainer: {
    marginTop: 5,
    marginBottom: 5,
  },
  cardText: {
    width: '50%',
  },
  cardImage: {
    height: 250,
    width: '50%',
    resizeMode: 'contain',
  },
});