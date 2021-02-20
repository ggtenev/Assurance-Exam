import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";

export default function Result({ navigation, route }) {
  const { score, year, number,lesson, totalQuestions } = route.params;

  const titleShown = (
    <View>
      <Text style={{fontSize:23}}><Text style={{fontStyle:'italic',fontSize:25,fontWeight:'bold'}}>Assurance</Text> / <Text style={{fontWeight:'bold',fontSize:23}}>{year}</Text></Text>
    </View>
  ) 
   
  

  React.useLayoutEffect(() => {
    navigation.setOptions({
      // title:() => titleShown,
      height: 120,
      headerTitle: () => titleShown,
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

  let nextLesson = '';
  let result = `${score}/${totalQuestions}`;
  let percentage = Math.round((score / totalQuestions) * 100);
 
        switch (number) {
          case 1:
            nextLesson='Obtaining an Assurance Engagement'
            break;
          case 2:
            nextLesson='Planning an Assurance Engagement'
            break;
          case 3:
            nextLesson='Collecting Evidence and Assurance Reporting'
            break;
          case 4:
            nextLesson='The Fundamentals of Internal Controls'
            break;
          case 5:
            nextLesson='Internal Controls: Purchases, Sales and Payroll'
            break;
          case 6:
            nextLesson='Internal Controls: Internal Audit'
            break;
          case 7:
            nextLesson='Audit Evidence: Documenting'
            break;
          case 8:
            nextLesson='Audit Evidence: Sufficient and Appropriate'
            break;
          case 9:
            nextLesson='Audit Evidence: Collection Techniques'
            break;
          case 10:
            nextLesson='Substantive Testing: Statement of Financial Position'
            break;
          case 11:
            nextLesson='Written Representations'
            break;
          case 12:
            nextLesson='Audit Completion and Reporting'
            break;
          case 13:
            nextLesson='Professional Conduct and Ethics'
            break;
        
          default:
            break;
        }
   
    
  return (
    <View style={{ flex: 1,backgroundColor:'white' }}>
      <View style={styles.category}>
          <View style={styles.number}>
            <Text style={{ fontSize: 24 }}>{number}</Text>
          </View>

          <Text style={{ fontSize: 23, fontWeight: "bold",width:'80%' }}>
            {lesson}
          </Text>
        </View>
      <Text
        style={{
          fontSize: 34,
          fontWeight: "bold",
          fontStyle: "italic",
          textAlign: "center",
          marginTop:10
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
      <View style={{flex:1,alignItems:'center',marginTop:20}}>
        <Image style={{width:100,height:166}} source={require('../assets/bulb.png')}/>
      </View>
        <View style={{height:150,position:'absolute',bottom:44,width:'100%'}} >
        <TouchableOpacity onPress={() => navigation.goBack()} style={{width:'100%',height:60,backgroundColor:Colors.main,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:24,fontWeight:'bold'}}>Try Again</Text>
        </TouchableOpacity>
        {
          number == 14 ? (
            <TouchableOpacity onPress={() => navigation.navigate('One', {year,number:1,lesson:'The Fundamentals of Assurance'})} style={{width:'100%',height:60,backgroundColor:Colors.grey,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:24,fontWeight:'bold'}}>Start Over</Text>
          </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => navigation.navigate('One', {year,number:number+1,lesson:nextLesson})} style={{width:'100%',height:60,backgroundColor:Colors.grey,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:24,fontWeight:'bold'}}>Next Chapter</Text>
          </TouchableOpacity>
          )
        }
       
        </View>
      <View style={styles.footer}>
       
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name='keyboard-arrow-left' size={44} color='black' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            navigation.navigate("Home");
          }}>
          <FontAwesome name='home' size={41} color='black' />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('One', {year,number:number+1,lesson:nextLesson})}
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
