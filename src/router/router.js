import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabBar } from "../components";

import {
  HomeScreen,
  PicsScreen,
  ProfileScreen,
  LoginScreen
} from "../screens";


const Tabs = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="md-flask" size={30} color={tintColor} />,
      },
    },
    PicsScreen: {
      screen: PicsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="md-planet" size={30} color={tintColor} />
      }
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="ios-person" size={30} color={tintColor} />
      }
    }
  },
  {
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: "#ffffff",
      inactiveTintColor: "#c7d1d8"
    }
  },
  { headerMode: "none" }
);

const Stack = createStackNavigator(
  {
    tabs: Tabs,
    Screen1: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      }
    }
  },
  {
    initialRouteName: 'Screen1',
    headerMode: 'none',
  }
);


export default createAppContainer(Stack);