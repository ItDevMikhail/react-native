import React from "react";
import Main from "./components/main";
import FullInfo from "./components/FullInfo";
import Contacts from "./components/contacts";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={
                    {
                        title: 'Главная',
                        headerStyle: { backgroundColor: '#eb5d3d', height: 100 },
                        headerTitleStyle: { fontWeight: '400' }

                    }
                }
            />
            <Stack.Screen
                name="FullInfo"
                component={FullInfo}
                options={{ title: 'Статья' }}
            />
            <Stack.Screen
                name="ContactName"
                component={Contacts}
                options={{ title: 'Контакты' }}
            />
        </Stack.Navigator>
    </NavigationContainer>
}
