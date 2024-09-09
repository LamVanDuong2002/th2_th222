import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import PersonScreen from "../screens/PersonScreen";
import { Avatar, Icon } from "react-native-paper";

const Stack = createStackNavigator();

const Logo = () =>{
     return(
          <Avatar.Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmBT7Sx6K37zhx1cnB9Zg5lc8tE6ZDITq0uIKrFn73bQ&s'}}
          size={40}/>
     )
}
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: 'aqua' },
      
       
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Trang chủ" ,  headerLeft: () => <Logo /> }} />
      <Stack.Screen
        name="Person"
        component={PersonScreen}
        options={({ route }) => ({
          title: route.params.name 
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
