import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Link} from 'react-router-native';
import GameList from '../assets/data/game_data.json';

function Container() {
  const gameList = GameList;

  return (
    <View style={styles.container}>
      <HomeList list={gameList} />
      <Text>{GameList}</Text>
    </View>
  );
}

function HomeList({list}) {
  const list_value = list.slice(0, 12).map((item, i) => {
    return (
      <Link key={i} style={styles.item} to={`/games/${item.name}`}>
        <Text>{item.name}</Text>
      </Link>
    );
  });
  return (
    <View style={styles.cont}>
      <IconWrap text="대표 게임" />
      <View>{list_value}</View>
    </View>
  );
}

function IconWrap(text) {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}

export default Container;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  cont: {
    flex: 1,
    justifyContent: 'center',
  },
  list: {
    textAlign: 'center',
    borderRightWidth: 0.5,
    borderStyle: 'solid',
    borderColor: '#aaa',
  },
  item: {
    width: '100%',
    height: '2%',
  },
  tab_indicate: {
    position: 'absolute',
    top: -4,
    width: '25%',
    height: '100%',
    backgroundColor: '#f00',
  },
});
