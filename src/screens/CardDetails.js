import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import HTML from 'react-native-render-html';

// import icons
import RingsIcons from '../icons/RingsIcons';
import colors from '../styles/colors';

const CardDetails = ({ route, navigation }) => {
  const { type_name, sphere_code, sphere_name, name, traits, text, threat, willpower, attack, defense, health, unique, flavor }  = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={[styles.top, { backgroundColor: colors.sphere[sphere_code] }]}>
          <Text style={{fontVariant: 'small-caps', textAlign: 'center'}}>
            { unique == true ? <RingsIcons name='Unique' size={14}/> : null } { `${name}` }
          </Text>
          <Text style={{fontStyle: 'italic', fontWeight: '700', fontSize: 11, textAlign: 'center'}}>
            { ` ${traits} ` }
          </Text>
        </View>
        <View style={[styles.middle, { borderColor: colors.sphere[sphere_code] }]}>
          { threat ?
            <Text style={{fontVariant: 'small-caps', textAlign: 'center'}}>
              { ` ${threat} ` } <RingsIcons name='Threat' size={14}/>
            </Text>
          : null }
          { health ?
            <Text style={{fontVariant: 'small-caps', textAlign: 'center'}}>
              { ` ${willpower} ` }<RingsIcons name='Willpower' size={14}/>
              { ` ${attack} ` }<RingsIcons name='Attack' size={14}/>
              { ` ${defense} ` }<RingsIcons name='Defense' size={14}/>
              { ` ${health} ` }<RingsIcons name='HitPoint' size={14}/>
            </Text>
          : null }
          <Text></Text>
          <HTML source={{ html: text }} />
          <Text></Text>
          { flavor ?
            <HTML source={{ html: flavor }} />
          : null }
        </View>
        <View style={[styles.bottom, { borderColor: colors.sphere[sphere_code] }]}>
          <Text></Text>
          <Text style={{fontVariant: 'small-caps', fontWeight: '500', textAlign: 'center'}}>
            { ` ${type_name} ` }
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default CardDetails;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    margin: 5,
  },
  top: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  middle: {
    flex: 1,
    borderWidth: 1,
    borderBottomWidth: 0,
  },
  bottom: {
    flex: 1,
    borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopWidth: 0,
  },
});