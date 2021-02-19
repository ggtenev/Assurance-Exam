import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";

export default function Result({ navigation, route }) {
  const { score, year, number, totalQuestions } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Assurance / " + year,
      height: 120,
      headerTitleAlign: "left",
      headerStyle: {
        height: 70,
        // headerTitleAlign:'left',

        backgroundColor: Colors.main,
      },
      headerLeft: () => {
        return null;
      },
    });
  }, [navigation]);

  let title;
  let result = `${score}/${totalQuestions}`;
  let percentage = Math.round((score / totalQuestions) * 100);
  switch (number) {
    case 1:
      title = (
        <View style={styles.category}>
          <View style={styles.number}>
            <Text style={{ fontSize: 22 }}>1</Text>
          </View>

          <Text style={{ fontSize: 21, fontWeight: "bold" }}>
            The Fundamentals of assurance
          </Text>
        </View>
      );
      break;

    default:
      break;
  }
  return (
    <View style={{ flex: 1 }}>
      {title}
      <Text
        style={{
          fontSize: 34,
          fontWeight: "bold",
          fontStyle: "italic",
          textAlign: "center",
        }}
      >
        Your Score
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 34, fontWeight: "bold", fontStyle: "italic" }}>
          {result}{" "}
        </Text>
        <Text style={{ fontSize: 34, fontWeight: "bold", fontStyle: "italic" }}>
          {" "}
          ({percentage}%)
        </Text>
      </View >
        <View style={{height:150,position:'absolute',bottom:44,width:'100%'}} >
        <TouchableOpacity onPress={() => navigation.goBack()} style={{width:'100%',height:60,backgroundColor:Colors.main,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:24,fontWeight:'bold'}}>Try Again</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Two')} style={{width:'100%',height:60,backgroundColor:Colors.grey,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:24,fontWeight:'bold'}}>Next Chapter</Text>
        </TouchableOpacity>
        </View>
      <View style={styles.footer}>
       
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name='keyboard-arrow-left' size={44} color='black' />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name='home' size={41} color='black' />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <MaterialIcons name='keyboard-arrow-right' size={44} color='black' />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  category: {
    flexDirection: "row",
    // justifyContent:'center'
    alignItems: "center",
  },
  btn: {
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 33,
    width: 200,
    marginVertical: 15,
  },
  number: {
    width: 50,
    height: 50,
    backgroundColor: "#bcb8bc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    margin: 10,
  },
  footer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: Colors.main,
    height: 75,
    alignItems: "center",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
});
