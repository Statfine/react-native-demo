import React from 'react';
import {StyleSheet, View, Text, Button, StatusBar} from 'react-native';

function HomeScreen({navigation}: any) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text>创作广场</Text>
        <Button
          title="Go to Create"
          onPress={() => navigation.navigate('Create')}
        />
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

export default HomeScreen;
