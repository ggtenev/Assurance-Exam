import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Colors from "../constants/Colors";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";

export default function Categories({ navigation, route }) {
  const year = route.params.year;

  const titleShown = (
    <View>
      <Text style={{fontSize:23}}><Text style={{fontStyle:'italic',fontSize:25,fontWeight:'bold'}}>Assurance</Text> / <Text style={{fontWeight:'bold',fontSize:23}}>{year}</Text></Text>
    </View>
  ) 
   

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => titleShown,
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
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
      <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate("One",{
          year:year,
          number:1,
          lesson:'The Fundamentals of Assurance'
        })}
      >
        <View style={styles.number}>
          <Text style={{ fontSize: 22 }}>1</Text>
        </View>

        <Text style={{ fontSize: 21, fontWeight: "bold" }}>
          The Fundamentals of assurance
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate("One",{
          year:year,
          number:2,
          lesson:'Obtaining an Assurance Engagement'
        })}
      >
        <View style={styles.number}>
          <Text style={{ fontSize: 22 }}>2</Text>
        </View>

        <Text style={{ fontSize: 21, fontWeight: "bold" }}>
        Obtaining an Assurance Engagement
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate("One",{
          year:year,
          number:3,
          lesson:'Planning an Assurance Engagement'
        })}
      >
        <View style={styles.number}>
          <Text style={{ fontSize: 22 }}>3</Text>
        </View>

        <Text style={{ fontSize: 21, fontWeight: "bold" }}>
        Planning an Assurance Engagement
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate("One",{
          year:year,
          number:4,
          lesson:'Collecting Evidence and Assurance Reporting'
        })}
      >
        <View style={styles.number}>
          <Text style={{ fontSize: 22 }}>4</Text>
        </View>

        <Text style={{ fontSize: 21, fontWeight: "bold" }}>
        Collecting Evidence and Assurance Reporting
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate("One",{
          year:year,
          number:5,
          lesson:'The Fundamentals of Internal Controls'
        })}
      >
        <View style={styles.number}>
          <Text style={{ fontSize: 22 }}>5</Text>
        </View>

        <Text style={{ fontSize: 21, fontWeight: "bold" }}>
        The Fundamentals of Internal Controls
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate("One",{
          year:year,
          number:6,
          lesson:'Internal Controls: Purchases, Sales and Payroll'
        })}
      >
        <View style={styles.number}>
          <Text style={{ fontSize: 22 }}>6</Text>
        </View>

        <Text style={{ fontSize: 21, fontWeight: "bold" }}>
        Internal Controls: Purchases, Sales and Payroll
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate("One",{
          year:year,
          number:7,
          lesson:'Internal Controls: Internal Audit'
        })}
      >
        <View style={styles.number}>
          <Text style={{ fontSize: 22 }}>7</Text>
        </View>

        <Text style={{ fontSize: 21, fontWeight: "bold" }}>
        Internal Controls: Internal Audit
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate("One",{
          year:year,
          number:8,
          lesson:'Audit Evidence: Documenting'
        })}
      >
        <View style={styles.number}>
          <Text style={{ fontSize: 22 }}>8</Text>
        </View>

        <Text style={{ fontSize: 21, fontWeight: "bold" }}>
        Audit Evidence: Documenting
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate("One",{
          year:year,
          number:9,
          lesson:'Audit Evidence: Sufficient and Appropriate'
        })}
      >
        <View style={styles.number}>
          <Text style={{ fontSize: 22 }}>9</Text>
        </View>

        <Text style={{ fontSize: 21, fontWeight: "bold" }}>
        Audit Evidence: Sufficient and Appropriate
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate("One",{
          year:year,
          number:10,
          lesson:'Audit Evidence: Collection Techniques'
        })}
      >
        <View style={styles.number}>
          <Text style={{ fontSize: 22 }}>10</Text>
        </View>

        <Text style={{ fontSize: 21, fontWeight: "bold" }}>
        Audit Evidence: Collection Techniques
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate("One",{
          year:year,
          number:11,
          lesson:'Substantive Testing: Statement of Financial Position'
        })}
      >
        <View style={styles.number}>
          <Text style={{ fontSize: 22 }}>11</Text>
        </View>

        <Text style={{ fontSize: 21, fontWeight: "bold" }}>
        Substantive Testing: Statement of Financial Position
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate("One",{
          year:year,
          number:12,
          lesson:'Written Representations'
        })}
      >
        <View style={styles.number}>
          <Text style={{ fontSize: 22 }}>12</Text>
        </View>

        <Text style={{ fontSize: 21, fontWeight: "bold" }}>
        Written Representations
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate("One",{
          year:year,
          number:13,
          lesson:'Audit Completion and Reporting'
        })}
      >
        <View style={styles.number}>
          <Text style={{ fontSize: 22 }}>13</Text>
        </View>

        <Text style={{ fontSize: 21, fontWeight: "bold" }}>
        Audit Completion and Reporting
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate("One",{
          year:year,
          number:14,
          lesson:'Professional Conduct and Ethics'
        })}
      >
        <View style={styles.number}>
          <Text style={{ fontSize: 22 }}>14</Text>
        </View>

        <Text style={{ fontSize: 21, fontWeight: "bold" }}>
        Professional Conduct and Ethics
        </Text>
      </TouchableOpacity>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <MaterialIcons name='keyboard-arrow-left' size={44} color='black' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <FontAwesome name='home' size={41} color='black' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("One",{
          year:year,
          number:1,
          lesson:'The Fundamentals of Assurance'
        })}>
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
    width:'80%',
    alignItems: "center",
    marginVertical:5
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
