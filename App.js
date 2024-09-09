import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

import CustomNavigationBar from './components/CustomNavigationBar';
import React from 'react';
import PersonScreen from './screens/PersonScreen';
import StackNavigator from './routes/StackNavigator';
import StackNavigatorv2 from './routes/StackNavigatorv2';
import DrawerNavigator from './routes/DrawerNavigator';
import BottomTabNavigator from './routes/BottomTabNavigator';

const Stack =   createStackNavigator()
export default function App() {
  return (
        <NavigationContainer>
             <PaperProvider>
                {/* <Stack.Navigator
                  initialRouteName="Home"
                  screenOptions={{
                  header: (props) => <CustomNavigationBar {...props} />,
                }}>
                  <Stack.Screen name='Home' component={HomeScreen}/>
                  <Stack.Screen name='Details' component={DetailScreen}/>
                  <Stack.Screen name='Person' component={PersonScreen}/>
              </Stack.Navigator> */}



                {/* <StackNavigator/> */}
                {/* <StackNavigatorv2/> */}
                {/* <DrawerNavigator/> */}
                <BottomTabNavigator/>
             </PaperProvider>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
