import { View, StyleSheet} from "react-native"
import {Button, Text} from "react-native-paper"
import React  from "react"
const PersonScreenv2 = () =>{
     return(
          <View style={personStyle.container}>
               <Text style={{fontWeight:'bold', fontSize:24}}>Person Screen</Text>
          </View>
     )
}
export default PersonScreenv2
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