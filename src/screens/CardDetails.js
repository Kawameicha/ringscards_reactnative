import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

// import icons
import RingsIcons from '../icons/RingsIcons';

const CardDetails = ({ route, navigation }) => {
  // retrive the parameter
  const { type_name, sphere_name, name, traits, text, attack, defense, health }  = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{
          width: '100%',
          marginTop: 2,
          borderColor: '#892F69',
          borderWidth: 1,
          borderRadius: 3,
        }}>
          <Text>{type_name}{"\n"}
                <RingsIcons name='Leadership' size={14} color="#892F69"/> {sphere_name}{"\n"}
                <RingsIcons name='Unique' size={14} color="#000000"/> {name}{"\n"}
                Traits: {traits}{"\n"}
                Text: {text}</Text>
          <View style={{ marginLeft: 5, marginTop: 5 }}>
            <Text>
              <Text>
                <RingsIcons name='Attack' size={14} color="#000000"/> {attack}{"\n"}
                <RingsIcons name='Defense' size={14} color="#000000"/> {defense}{"\n"}
                <RingsIcons name='HitPoint' size={14} color="#000000"/> {health}{"\n"}</Text>
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