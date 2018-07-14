import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from 'react-navigation';

import Home from './Screens/Home';
import Trending from './Screens/Trending';
import Subscriptions from './Screens/Subscriptions';
import Inbox from './Screens/Inbox';
import Library from './Screens/Library';

export default createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name='home' color={tintColor} size={24} />
      )
    }
  },
  Trending: {
    screen: Trending,
    navigationOptions: {
      tabBarLabel: 'Trending',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name='whatshot' color={tintColor} size={24} />
      )
    }
  },
  Subscriptions: {
    screen: Subscriptions,
    navigationOptions: {
      tabBarLabel: 'Subscriptions',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name='subscriptions' color={tintColor} size={24} />
      )
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'Inbox',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name='mail' color={tintColor} size={24} />
      )
    }
  },
  Library: {
    screen: Library,
    navigationOptions: {
      tabBarLabel: 'Library',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name='folder' color={tintColor} size={24} />
      )
    }
  },
},
{
  tabBarOptions: {
    activeTintColor: '#f00',
    inactiveTintColor: '#ecf0f1',
    style: {
      backgroundColor: '#353535',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: '#000',
      shadowOpacity: 0.5,
      elevation: 5,
    }
  },
});