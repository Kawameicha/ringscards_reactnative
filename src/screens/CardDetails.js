import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { MarkdownView } from 'react-native-markdown-view'
import SimpleMarkdown from 'simple-markdown';

// import icons
import RingsIcons from '../icons/RingsIcons';
import colors from '../styles/colors';

const CardDetails = ({ route, navigation }) => {
  const { pack_name, type_name, sphere_code, position, name, traits, text, flavor, is_unique, threat, cost,  willpower, attack, defense, health, illustrator, has_errata }  = route.params;
  const { width } = useWindowDimensions();

  const flavorStyles = {
    body: {
      color: 'grey'
    }
  };

  const CAP_ICON_NAMES = {
    'unique': 'Unique',
    'threat': 'Threat',
    'willpower': 'Willpower',
    'attack': 'Attack',
    'defense': 'Defense',
    'hitPoint': 'HitPoint',
    'leadership': 'Leadership',
    'tactics': 'Tactics',
    'lore': 'Lore',
    'spirit': 'Spirit',
    'baggins': 'Baggins',
    'fellowship': 'Fellowship',
  };

  function IconNode(node, output, state) {
    return (
      <RingsIcons
        name={CAP_ICON_NAMES[node.name]}
        size={14}
      />
    );
  }

  function BoldItalicHtmlTagNode(node, output, state) {
    return (
      <Text style={styles.boldItalicText}>
        { node.text }
      </Text>
    );
  }

  function BoldHtmlTagNode(node, output, state) {
    return (
      <Text style={styles.boldText}>
        { node.text }
      </Text>
    );
  }

  function ItalicHtmlTagNode(node, output, state) {
    return (
      <Text style={styles.italicText}>
        { node.text }
      </Text>
    );
  }

  const IconRule = {
    match: SimpleMarkdown.inlineRegex(new RegExp('^\\[([^\\]]+)\\]')),
    order: 1,
    parse: (capture) => {
      return { name: capture[1] };
    },
    render: IconNode,
  };

  const BoldItalicsHtmlTagRule = {
    match: SimpleMarkdown.inlineRegex(new RegExp('^<b><i>([\\s\\S]+?)<\\/i><\\/b>')),
    order: 1,
    parse: (capture) => {
      return { text: capture[1] };
    },
    render: BoldItalicHtmlTagNode,
  };

  const BoldHtmlTagRule = {
    match: SimpleMarkdown.inlineRegex(new RegExp('^<b>(?!<i>)([\\s\\S]+?)(?!<\\/i)<\\/b>')),
    order: 1,
    parse: (capture) => {
      return { text: capture[1] };
    },
    render: BoldHtmlTagNode,
  };

  const ItalicHtmlTagRule = {
    match: SimpleMarkdown.inlineRegex(new RegExp('^<i>([\\s\\S]+?)<\\/i>')),
    order: 1,
    parse: (capture) => {
      return { text: capture[1] };
    },
    render: ItalicHtmlTagNode,
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={[styles.top, { backgroundColor: colors.sphere[sphere_code] }]}>
          <Text style={{fontVariant: 'small-caps', textAlign: 'center'}}>
            { is_unique == true ? <RingsIcons name='Unique' size={14}/> : null } { `${name}` }
          </Text>
          { traits ?
            <Text style={{fontStyle: 'italic', fontWeight: '700', fontSize: 11, textAlign: 'center'}}>
              { `${traits}` }
            </Text>
          : <Text></Text> }
        </View>
        <View style={[styles.middle, { borderColor: colors.sphere[sphere_code] }]}>
          { type_name == 'Hero' ?
            <Text style={{fontVariant: 'small-caps', textAlign: 'center'}}>
              { `${threat}` } <RingsIcons name='Threat' size={14}/>
              { ` ${willpower}` } <RingsIcons name='Willpower' size={14}/>
              { ` ${attack}` } <RingsIcons name='Attack' size={14}/>
              { ` ${defense}` } <RingsIcons name='Defense' size={14}/>
              { ` ${health}` } <RingsIcons name='HitPoint' size={14}/>
            </Text>
          : null }
          { type_name != 'Hero' && health ?
            <Text style={{fontVariant: 'small-caps', textAlign: 'center'}}>
              { `${willpower}` } <RingsIcons name='Willpower' size={14}/>
              { ` ${attack}` } <RingsIcons name='Attack' size={14}/>
              { ` ${defense}` } <RingsIcons name='Defense' size={14}/>
              { ` ${health}` } <RingsIcons name='HitPoint' size={14}/>
            </Text>
          : null }
          <Text></Text>
          <MarkdownView rules={{Icon: IconRule, biTag: BoldItalicsHtmlTagRule, bTag: BoldHtmlTagRule, iTag: ItalicHtmlTagRule}}>
            { `${text}` }
          </MarkdownView>
          <Text></Text>
          { flavor ?
            <RenderHtml
              contentWidth={width}
              source={{ html: flavor }}
              tagsStyles={flavorStyles}
            />
          : null }
        </View>
        <View style={[styles.bottom, { borderColor: colors.sphere[sphere_code] }]}>
          <Text></Text>
          <Text style={{fontVariant: 'small-caps', fontWeight: '500', textAlign: 'center'}}>
            { `${type_name}` }
          </Text>
          <Text style={{textAlign: 'center'}}>
            { `${pack_name}` } { `${position}` }
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
  boldItalicText: {
    fontStyle: 'italic',
    fontWeight: '700',
  },
  boldText: {
    fontWeight: '700',
  },
  italicText: {
    fontStyle: 'italic',
  },
});