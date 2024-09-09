import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreenv2 from "../screens/HomeScreenv2";
import PersonScreenv2 from "../screens/PersonScreenv2";
import { Avatar, Icon } from "react-native-paper";
import CustomNavigationBar from '../components/CustomNavigationBar';

const Stack = createStackNavigator();

const StackNavigatorv2 = () => {
  return (
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
    header: (props) => <CustomNavigationBar {...props} />,
  }}
    >
    <Stack.Screen name='Home' component={HomeScreenv2}/>
    <Stack.Screen name='Person' component={PersonScreenv2}/>
    </Stack.Navigator>
  );
};

export default StackNavigatorv2;
