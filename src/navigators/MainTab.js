import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import TabFavoritoScreen from '../pages/TabFavoritoScreen';
import TabHomeScreen from '../pages/TabHomeScreen';
import TabUsersScreen from '../pages/TabUserScreen';
import * as Icon from "react-native-feather";
import Cadastro1 from '../pages/CadastroHome1';
import Cadastro2 from '../pages/CadastroHome2';
import Cadastro3 from '../pages/CadastroHome3';
import Cadastro4 from '../pages/CadastroHome4';

const TabMain = createBottomTabNavigator();
const StackNav = createStackNavigator();

const StackNavigator = () => {
    return(
        <StackNav.Navigator
            initialRouteName="Main"
            screenOptions={()=>({
                headerShown:false
            })}>
            <StackNav.Screen name="Main" component={MainTab}/>
            <StackNav.Screen name="Cadastro" component={Cadastro1}/>
            <StackNav.Screen name="Cadastro2" component={Cadastro2}/>
            <StackNav.Screen name="Cadastro3" component={Cadastro3}/>
            <StackNav.Screen name="Cadastro4" component={Cadastro4}/>
        </StackNav.Navigator>
    )
}
  
   

const MainTab = () => {
    return(
    <TabMain.Navigator
        screenOptions={({route,}) => ({
            tabBarIcon: ({focused}) =>{
                let cor = focused ? 'rgb(0, 163, 255)' : '#fff';
                if (route.name === 'Home'){
                    return (<Icon.Home stroke='#000' fill={cor}  width={24} height={24} />)
                }else if (route.name === 'Favorito'){
                    return (<Icon.Heart stroke='#000' fill={cor} width={24} height={24} />)
                }else if (route.name === 'Usuario'){
                    return (<Icon.User stroke='#000'  fill={cor} width={24} height={24} />)
                }
                
            },
            tabBarActiveTintColor: 'rgb(0, 163, 255)',
            tabBarInactiveTintColor: 'gray',
            headerShown: false
        })}
    >
        <TabMain.Screen
        
            name="Home"
            component={TabHomeScreen}
            
        />
        <TabMain.Screen
            name="Favorito"
            component={TabFavoritoScreen}
        />
        <TabMain.Screen
            name="Usuario"
            component={TabUsersScreen}
        />


        
    </TabMain.Navigator>
)}

export default StackNavigator