import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, Button, Alert, Image, TouchableWithoutFeedback, View, Platform, FlatList } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/form";

export default function App() {
  // const handlePressText = () => console.log("text press");
  // const handleButtonPress1 = () => alert("Alert");
  // const handleButtonPress = () => {
  //   Alert.alert("ERROR", "Here alert", [
  //     { text: "YES", onPress: () => console.log("Yes button") },
  //     { text: "Cancel", onPress: () => console.log("Cancel button") },
  //   ]);
  // }
  // const handleButtonPress2 = () => {
  //   Alert.prompt("ERROR", "Here alert", text => console.log(text)); // only IOS
  // }
  // if (Platform.OS === 'android') {
  //   console.log('only android');
  // }

  const [listOfItems, setListOfItems] = useState([
    { text: 'Купить хлеба', key: '1' },
    { text: 'Помыть машину', key: '2' },
    { text: 'Купить слона', key: '3' },
    { text: 'Сделать прогу', key: '4' },
  ]);
  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list
      ]
    });
  };

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(item => item.key !== key);
    });
  };

  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => (
          <ListItem el={item} deleteHandler={deleteHandler} />
        )} />
      </View>
    </View>
    // <View style={styles.mainBlock}>
    //   <View style={[styles.boxx, { backgroundColor: 'yellow', flex: 2 }]}></View>
    //   <View style={[styles.boxx, { backgroundColor: 'red', alignSelf: 'flex-start' }]}></View>
    //   <View style={[styles.boxx, { backgroundColor: 'green' }]}></View>
    // </View>


    // <SafeAreaView style={styles.container}>
    //   <View style={styles.box}>
    //     <Text>Привет!</Text>
    //   </View>
    //   <StatusBar style="auto" />
    // </SafeAreaView >


    // <SafeAreaView style={styles.container}>
    //   <Text numberOfLines={1} style={styles.text} onPress={handlePressText}>
    //     Привет! {"\n"}Привет
    //   </Text>
    //   <Button title={"Нажми на меня"} color="red" onPress={handleButtonPress} />
    //   <Button title={"Кнопка 2"} color="blue" onPress={handleButtonPress2} />
    //   <Image source={require('./assets/favicon.png')} />
    //   {/* Обернули в тачибл чтобы можно было кликать на кнопку */}
    //   <TouchableWithoutFeedback onPress={handleButtonPress}>
    //     <Image blurRadius={5} source={{
    //       width: 200,
    //       height: 150,
    //       uri: "https://habrastorage.org/r/w1560/webt/98/k9/is/98k9issmcul9hqqfqbjuflx57uo.png"
    //     }} />
    //   </TouchableWithoutFeedback>
    //   <StatusBar style="auto" />
    // </SafeAreaView>
  );
}

const simpleStyles = { backgroundColor: 'red', color: 'blue' };

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   backgroundColor: "#fff",
//   //   marginVertical: 20,
//   // },
//   // text: {
//   //   color: "red",
//   // },
//   // box: {
//   //   backgroundColor: 'yellow',
//   //   width: '50%',
//   //   height: 250,
//   //   opacity: 0.8,
//   //   borderWidth: 2,
//   //   borderColor: 'red',
//   //   borderStyle: 'dotted',
//   //   position: 'absolute',
//   //   top: Platform.OS === 'ios' ? 150 : 50,
//   //   left: -30
//   // },
//   // mainBlock: {
//   //   flex: 1,
//   //   backgroundColor: 'gray',
//   //   flexDirection: 'row-reverse',
//   //   justifyContent: 'space-between',
//   //   alignItems: 'center'
//   // },
//   // boxx: {
//   //   backgroundColor: 'red',
//   //   width: 100,
//   //   height: 100
//   // }
// });
