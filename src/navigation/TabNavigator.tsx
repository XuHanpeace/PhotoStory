/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import FeedScreen from '../screens/FeedScreen';
import CreateScreen from '../screens/CreateScreen';
import MessageScreen from '../screens/MessageScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#1890ff',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: styles.tabBar,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/icons/home-active.png') : require('../assets/icons/home.png')}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: '动态',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/icons/compass-active.png') : require('../assets/icons/compass.png')}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarLabel: '创建',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/icons/plus-active.png') : require('../assets/icons/plus.png')}
              style={[styles.icon, styles.createIcon]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarLabel: '消息',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/icons/message-active.png') : require('../assets/icons/message.png')}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/icons/profile-active.png') : require('../assets/icons/profile.png')}
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    paddingBottom: 5,
    paddingTop: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
  createIcon: {
    width: 28,
    height: 28,
  },
});

export default TabNavigator; 