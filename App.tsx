/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Button, Alert, StyleSheet} from 'react-native';

import HomeScreen from './app/pages/home';
import AiScreen from './app/pages/ai';
import MineScreen from './app/pages/mine';
import CreateScreen from './app/pages/create';
import HistoryScreen from './app/pages/history';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const tabBarLabel = {
  Square: '广场',
  Ai: 'Ai创作',
  Mine: '我的',
};

function Home() {
  return (
    <Tab.Navigator
      screenOptions={({route}: any) => ({
        // tabBarIcon: ({focused, color, size}) => {
        //   console.log({focused, color, size});
        //   return <Text style={{color: 'red'}}>1</Text>;
        // },
        tabBarLabel: ({focused, color}) => {
          console.log({focused, color});
          const name = tabBarLabel[route.name as 'Square'];
          return (
            <Text style={{color: focused ? '#CB79DC' : '#DFD7F1'}}>{name}</Text>
          );
        },
        tabBarActiveTintColor: '#CB79DC',
        tabBarInactiveTintColor: '#DFD7F1',
        tabBarBackground: () => <View style={styles.tabBarBackground} />,
      })}>
      <Tab.Screen
        name="Square"
        component={HomeScreen}
        options={{
          title: '创作推荐',
          headerStyle: {
            backgroundColor: '#1f0d32',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Button
              onPress={() => Alert.alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ai"
        component={AiScreen}
        options={{
          title: 'AI创作',
          headerStyle: {
            backgroundColor: '#1f0d32',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name="Mine"
        component={MineScreen}
        options={{
          title: '我的',
          headerStyle: {
            backgroundColor: '#1f0d32',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Tab.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{
            title: '我的绘画',
            headerStyle: {
              backgroundColor: '#1f0d32',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{
            title: '我的绘画',
            headerStyle: {
              backgroundColor: '#1f0d32',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarBackground: {
    flex: 1,
    backgroundColor: '#1f0d32',
  },
});

export default App;
