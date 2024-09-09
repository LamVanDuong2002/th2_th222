import { View, StyleSheet } from "react-native"
import {Button, Text} from "react-native-paper"
import React, { useLayoutEffect, useState }  from "react"
import {Icon} from "react-native-paper"
const HomeScreen =({navigation}) =>{
     const [count, setCount] = useState(0)
     const myInfo = {name: "Lam Van Duong", studentID: "2024802010396"}
     useLayoutEffect(()=>{
          navigation.setOptions({
               headerRight: () => <Button onPress = {() => {setCount(count+1)
               if(count == 10) setCount(0)}
               }>Press me</Button>,
          })
     }, [count])
     return(
         <View style={homeStyle.container}>
          
          <Text style={{fontWeight:'bold', fontSize: 24}}> HOME</Text>
          <Text style={{fontWeight:'bold', fontSize: 20}}> Lượt nhấn: {count}</Text>
          <Button style={homeStyle.button} mode="contained" onPress={() => navigation.navigate('Person', myInfo)}>
               Go to person
          </Button>
         </View>
     )
}
export default HomeScreen
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