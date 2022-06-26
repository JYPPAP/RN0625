import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Outlet, Link} from 'react-router-native';
import LinearGradient from 'react-native-linear-gradient';
// import Map from '../assets/images/map.svg';

function HeaderTop() {
  return (
    <View style={styles.root}>
      <LinearGradient
        style={styles.header_wrap}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#1a8acc', '#1e8aa4']}>
        <View style={styles.header}>
          <Link to="/" style={styles.link}>
            <Text>웹</Text>
          </Link>
          <View style={styles.logo}>
            <Text>로고</Text>
          </View>
          <Link to="/settings" style={styles.config}>
            <Text>설정</Text>
          </Link>
        </View>
      </LinearGradient>
      <Outlet />
    </View>
  );
}

export default HeaderTop;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#eee',
  },
  header_wrap: {
    width: '100%',
    height: '10%',
  },
  header: {
    width: '100%',
    height: '50%',
    marginTop: '10%',
    flexDirection: 'row',
  },
  link: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  config: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
