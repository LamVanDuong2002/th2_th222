import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreenv2 from '../screens/HomeScreenv2';
import PersonScreenv2 from '../screens/PersonScreenv2';
import DetailScreen from '../screens/DetailScreen';
import CustomDrawerNavigation from '../components/CustomDrawerNavigation';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
     return(
          <Drawer.Navigator initialRouteName="Home"
          drawerContent={(props) => <CustomDrawerNavigation {...props}/>}>
               <Drawer.Screen name="Home" component={HomeScreenv2} />
               <Drawer.Screen name="Person" component={PersonScreenv2} />
               <Drawer.Screen name="Details" component={DetailScreen} />
        </Drawer.Navigator>
     )
}
export default DrawerNavigator