import React from 'react';
import {StyleSheet, View, Text, Button, StatusBar} from 'react-native';

function HistoryScreen({navigation}: any) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text>我的绘画作品</Text>
        <Button title="Go to Create" onPress={() => navigation.goBack()} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1f0d32',
  },
});

export default HistoryScreen;
