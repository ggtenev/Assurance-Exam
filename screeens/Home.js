import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors'

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:54,fontStyle:'italic',fontWeight:'bold'}} >Assurance</Text>
      <Text style={{fontSize:30,fontWeight:'bold'}} >MCQ QUESTION BANK</Text>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Categories',{year:2021})}>
        <Text style={{fontSize:32,fontWeight:'bold'}}>2021</Text>
      </TouchableOpacity>
     </View>
  );
}

const styles  = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Colors.main
  },
  btn:{
    paddingHorizontal:40,
    paddingVertical:10,
    borderColor:'black',
    borderWidth:2,
    borderRadius:33,
    marginVertical:55
  }
})