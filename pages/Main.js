import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Container from './Container';

function MenuTab({tab, setTab}) {
  return (
    <>
      <View style={styles.menu_tab}>
        <View
          testId="changeToHomeList"
          style={styles.tab_item}>
          <Text style={styles.bdr}>홈</Text>
        </View>
        <View
          testId="changeToSearchList"
          style={styles.tab_item}>
          <Text style={styles.bdr}>게임검색</Text>
        </View>
        <View testId="changeToFavoriteList" style={styles.tab_item}>
          <Text style={styles.bdr}>관심게임</Text>
        </View>
        <View testId="changeToRankList" style={styles.tab_item}>
          <Text style={{textAlign: 'center'}}>거래순위</Text>
        </View>
      </View>
      <View style={styles.tab_bar}>
        <View style={[styles.tab_indicate, styles.tab]} />
      </View>
    </>
  );
}

const Main = () => {
  return (
    <View>
      <MenuTab />
      <Container />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  menu_tab: {
    width: '100%',
    height: '4%',
    backgroundColor: '#ddd',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderColor: '#ccc',
  },
  tab_item: {
    flex: 1,
    justifyContent: 'center',
  },
  bdr: {
    textAlign: 'center',
    borderRightWidth: 0.5,
    borderStyle: 'solid',
    borderColor: '#aaa',
  },
  tab_bar: {
    width: '100%',
    height: '2%',
  },
  tab_indicate: {
    position: 'absolute',
    top: -5,
    width: '25%',
    height: '30%',
    backgroundColor: '#00f',
  },
});
