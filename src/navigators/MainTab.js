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

export default MainTab