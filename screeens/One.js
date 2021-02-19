import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { one } from "../data/questions";
import Colors from "../constants/Colors";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";

export default function One({ navigation, route }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [color, setColor] = useState(false);
  const [correct, setCorrect] = useState([]);
  const [incorrect, setIncorrect] = useState([]);
  const [explain, setExplain] = useState(false);
  const [score, setScore] = useState(0);

  const year = route.params.year;

  const answerStyles = StyleSheet.create({
    answer: {
      width: "100%",
      backgroundColor: "green",
      marginVertical: 5,
      padding: 5,
    },
    wrong: {
      width: "100%",
      backgroundColor: "red",
      marginVertical: 5,
      padding: 5,
    },
  });

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
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View style={styles.category}>
          <View style={styles.number}>
            <Text style={{ fontSize: 25 }}>1</Text>
          </View>

          <Text style={{ fontSize: 21, fontWeight: "bold", width: "80%" }}>
            The Fundamentals of assurance
          </Text>
        </View>
        <Text style={styles.question}>{one[currentQuestion].question}</Text>
        <View>
          {one[currentQuestion].answers.map((q, i) => {
            if (q.answerCondition) {
              return (
                <Text
                  style={styles.question}
                  key={Math.random()}
                >
                  {q.answerCondition}
                </Text>
              );
            }
            return (
              <TouchableOpacity
                onPress={() => {
                  if (q.correct) {
                    // setColor(3)
                    setCorrect([...correct, i]);
                    // setColor(true)
                  } else {
                    // setColor(2)
                    setIncorrect([...incorrect, i]);
                  }
                }}
                style={
                  correct.includes(i)
                    ? answerStyles.answer
                    : incorrect.includes(i) && !q.correct
                    ? answerStyles.wrong
                    : styles.answer
                }
                key={Math.random()}
              >
                <Text style={{ fontSize: 24, marginLeft: 20 }}>
                  {q.abb}) {q.answer}{" "}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        {explain ? null : (
          <View style={{ width: "100%", alignItems: "center" }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                setExplain(true);
              }}
            >
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Explain
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {explain ? (
          <View style={{width:'100%',alignItems:'center'}}>
          <View style={{ borderColor: "black", borderWidth: 1, padding: 15,marginVertical:10,borderRadius:20,width:'96%' }}>
            <Text
              style={{ fontSize: 22, fontWeight: "bold", textAlign: "center" }}
            >
              {one[currentQuestion].explanation}
            </Text>
          </View>
          </View>
        ) : null}

        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
            color: "grey",
            marginTop: 10,
          }}
        >
          Question: {currentQuestion + 1}/{one.length}
        </Text>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity>
          {/* <MaterialIcons name='keyboard-arrow-left' size={44} color='black' /> */}
          <View>
            <Text>{"          "}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <FontAwesome name='home' size={41} color='black' />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            const right = one[currentQuestion].answers.filter((q) => {
              return q.correct;
            });
            if (correct.length === right.length && incorrect.length == 0) {
              console.log("ADD");
              setScore(score + 1);
            }
            setCorrect([]);
            setIncorrect([]);
            setExplain(false);
            if (currentQuestion + 1 === one.length) {
              setCurrentQuestion(0);
              setScore(0);
              navigation.navigate("Result", {
                score,
                year,
                number: 1,
                totalQuestions: one.length,
              });
            } else setCurrentQuestion(currentQuestion + 1);

            console.log(score);
            console.log(one.length);
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
    height: "150%",
    // justifyContent:'center',
    // alignItems:'center'
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
    width: 60,
    height: 60,
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
  question: {
    fontSize: 24,
    width: "90%",
    margin: 15,
    fontWeight: "bold",
    textAlign: "justify",
  },
  answer: {
    width: "100%",
    backgroundColor: "#bcb8bc",
    marginVertical: 5,
    padding: 5,
  },
});
