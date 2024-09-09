import { View, StyleSheet} from "react-native"
import {Button, Text} from "react-native-paper"
import React  from "react"
const PersonScreen = ({navigation}) =>{
     return(
          <View style={personStyle.container}>
               <Text style={{fontWeight:'bold', fontSize:24}}>Profile Screen</Text>
               <Button style={personStyle.button} mode="contained" onPress={()=>navigation.navigate("Home")}>Go to Home</Button>
          </View>
     )
}
export default PersonScreen
const personStyle = StyleSheet.create({
     container:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
     },
     button:{
          marginTop: 5,
          backgroundColor: 'black',
          borderRadius: 0
     }
})