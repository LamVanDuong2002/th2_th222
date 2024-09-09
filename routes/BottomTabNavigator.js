import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreenv2 from '../screens/HomeScreenv2';
import DetailScreen from '../screens/DetailScreen';
import PersonScreenv2 from '../screens/PersonScreenv2';

const getTabBarIcon = icon => ({ color }) => (
     <MaterialIcons name={icon} size={26} style={{ color }} />
   );
const Tab = createMaterialBottomTabNavigator();
const BottomTabNavigator = () =>{
     return(
          <Tab.Navigator
               initialRouteName='Home'
               barStyle={{ backgroundColor: 'aqua' }}
               labeled={true}
               activeTintColor='black'
               inactiveColor='white'>
          <Tab.Screen name='Home' component={HomeScreenv2} options={{ tabBarIcon: getTabBarIcon('home') }} />
          <Tab.Screen name='Detail'  component={DetailScreen} options={{ tabBarIcon: getTabBarIcon('star') }} />
          <Tab.Screen name='Person' component={PersonScreenv2} options={{ tabBarIcon: getTabBarIcon('person') }} />
        </Tab.Navigator>
     )
}
export default BottomTabNavigator