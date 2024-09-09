import { View, StyleSheet } from "react-native"
import {Button, Text} from "react-native-paper"
import React, { useLayoutEffect, useState }  from "react"
import {Icon} from "react-native-paper"
const HomeScreenv2 =({navigation}) =>{
     return(
         <View style={homeStyle.container}>
          
          <Text style={{fontWeight:'bold', fontSize: 24}}> Home Screen</Text>
          <Button style={homeStyle.button} mode="contained" onPress={() => navigation.navigate('Person')}>
               Go to person
          </Button>
         </View>
     )
}
export default HomeScreenv2
const homeStyle = StyleSheet.create({
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