import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//pantallas/screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StackScreen from "./screens/StackScreen";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs(){
    return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
        tabBarActiveTintColor: 'purple'
    }}
    >
        <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
            tabBarLabel:'Principal',
            tabBarIcon:({color,size}) =>(
                <MaterialCommunityIcons name="home" color={color} size={30}/>
            ),
            tabBarBadge:3,
            headerShown:false
        }}
        />
        <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
            tabBarLabel:'Registro de Tienda',
            tabBarIcon:({color,size}) =>(
                <MaterialCommunityIcons name="registered-trademark" color={color} size={30}/>
            ),
            headerShown:false
        }}
        />
        <Tab.Screen 
        name="Stack" 
        component={StackScreen}
        options={{
            tabBarLabel:'Listado de Tiendas',
            tabBarIcon:({color,size}) =>(
                <MaterialCommunityIcons name="shopping" color={color} size={30}/>
            ),
            headerShown:false
        }}
        />
    </Tab.Navigator>
    );
}
export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}