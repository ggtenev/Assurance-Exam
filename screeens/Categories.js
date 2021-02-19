import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";

export default function Categories({ navigation, route }) {
  const year = route.params.year;

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

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate("One",{year:year})}
      >
        <View style={styles.number}>
          <Text style={{ fontSize: 22 }}>1</Text>
        </View>

        <Text style={{ fontSize: 21, fontWeight: "bold" }}>
          The Fundamentals of assurance
        </Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity>
          <MaterialIcons name='keyboard-arrow-left' size={44} color='black' />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name='home' size={41} color='black' />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name='keyboard-arrow-right' size={44} color='black' />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    // alignItems:'center'
  },
  category: {
    flexDirection: "row",
    // justifyContent:'center'
    alignItems: "center",
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
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
});
