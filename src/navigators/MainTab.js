import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import TabFavoritoScreen from '../pages/TabFavoritoScreen';
import TabHomeScreen from '../pages/TabHomeScreen';
import TabUsersScreen from '../pages/TabUserScreen';
import * as Icon from "react-native-feather";

const TabMain = createBottomTabNavigator();
 
const MainTab = () => {
    return(
    <TabMain.Navigator
        screenOptions={({route,}) => ({
            tabBarIcon: ({focused}) =>{
                let nomeIcone;
                if (route.name === 'Home'){
                    nomeIcone = focused 
                }else if (route.name === 'Favorito'){
                    nomeIcone = focused
                }
                return (<Icon.Activity fill='#000'  width={24} height={24} />)
            },
            tabBarActiveTintColor: 'cyan',
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

export default MainTab