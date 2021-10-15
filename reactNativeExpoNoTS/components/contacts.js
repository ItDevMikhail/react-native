import React from "react";
import { View, Text, Button } from "react-native";
import { gStyle } from "../styles/style";


export default function Contacts({ navigation }) {

    // const loadScene = () => {
    //     navigation.goBack();
    // }

    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>Cтраница про нас</Text>
            {/* <Button title='Назад' onPress={loadScene} /> */}
        </View>
    );
}