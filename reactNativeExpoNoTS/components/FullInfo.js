import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { gStyle } from "../styles/style";


export default function FullInfo({ route }) {


    return (
        <View style={gStyle.main}>
            <Image style={styles.image} source={{ uri: route.params.img }} />
            <Text style={[gStyle.title, styles.header]}>{route.params.name}</Text>
            <Text style={styles.full}>{route.params.full}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    full: {
        fontFamily: 'mt-light',
        textAlign: "center",
        fontSize: 16,
        marginTop: 20,
        color: '#f55151'
    },
    header: {
        fontSize: 25,
        marginTop: 25,
    },
    image: {
        width: '100%',
        height: 200,
    }
})