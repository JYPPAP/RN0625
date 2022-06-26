import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Container from './Container';

function MenuTab() {
  return (
    <>
      <View style={styles.menu_tab}>
        <View style={styles.tab_item}>
          <Text style={styles.bdr}>홈</Text>
        </View>
        <View style={styles.tab_item}>
          <Text style={styles.bdr}>게임검색</Text>
        </View>
        <View style={styles.tab_item}>
          <Text style={styles.bdr}>관심게임</Text>
        </View>
        <View style={styles.tab_item}>
          <Text style={{textAlign: 'center'}}>거래순위</Text>
        </View>
      </View>
      <View style={styles.tab_bar}>
        <View style={styles.tab_indicate} />
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
    height: '20%',
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
    top: -4,
    width: '25%',
    height: '100%',
    backgroundColor: '#f00',
  },
});
