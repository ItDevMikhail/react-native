import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, FlatList, Image, StyleSheet, Modal } from "react-native";
import { gStyle } from "../styles/style";
import { Ionicons } from "@expo/vector-icons";
import Form from "./Form";


export default function Main({ navigation }) {

    const loadScene = () => {
        navigation.navigate('ContactName');
    }

    const [news, setNews] = useState([
        { name: 'Google', anons: 'Gooogle!!!', full: 'Gooogle is cool!', key: '1', img: 'https://1prof.by/storage/2021/01/google-485611_1280-1024x723.png' },
        { name: 'Apple', anons: 'Apple!!!', full: 'Apple is cool!', key: '2', img: 'https://games.mail.ru/pre_895x0_resize/hotbox/content_files/news/2021/09/14/095a555d711f42f09071468bdb4e0b6a.jpg?quality=85&format=webp' },
        { name: 'FaceBook', anons: 'FaceBook!!!', full: 'FaceBook is cool!', key: '3', img: 'https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/3/68/756333852072683.jpg' },
    ]);

    const [modalOpen, setModalOpen] = useState(false);

    const addArticle = (article) => {
        setNews((list) => {
            article.key = Date.now().toString();
            return [
                article,
                ...list
            ]
        });
        setModalOpen(false);
    }

    return (
        <View style={gStyle.main}>
            <Modal visible={modalOpen}>
                <View style={gStyle.main}>
                    <Ionicons name="close-circle" size={34} color="red" style={styles.iconClose} onPress={() => setModalOpen(false)} />
                    <Text style={styles.title}>Форма добавления статей</Text>
                    <Form addArticle={addArticle} />
                </View>
            </Modal>
            <Ionicons name="add-circle" size={34} color="green" style={styles.iconAdd} onPress={() => setModalOpen(true)} />
            <Text style={gStyle.title}>Главная страница</Text>
            {/* <Button title='Открыть контакты' onPress={loadScene} /> */}
            <FlatList data={news} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('FullInfo', item)}>
                    <Image style={styles.image} source={{
                        uri: item.img
                    }} />
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.anons}>{item.anons}</Text>
                </TouchableOpacity>
            )} />
        </View>
    );
}

const styles = StyleSheet.create({
    iconClose: {
        textAlign: 'center',
    },
    iconAdd: {
        textAlign: 'center',
        marginBottom: 15
    },
    header: {
        marginBottom: 3
    },
    item: {
        width: "100%",
        marginBottom: 30
    },
    title: {
        fontFamily: 'mt-bold',
        textAlign: "center",
        fontSize: 22,
        marginTop: 20,
        color: '#474747'
    },
    anons: {
        fontFamily: 'mt-light',
        textAlign: "center",
        fontSize: 16,
        marginTop: 5,
        color: '#474747'
    },
    image: {
        width: '100%',
        height: 200,
    }
})