import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Loading() {
  return (
    <View style={styles.container}>
      <View>
        <Text>로딩 페이지 입니다.</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
export default Loading;
