import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator , BottomTabBar } from "@react-navigation/bottom-tabs";

import { Home , Account, Load, Search, SettingRoutine} from '../screens';

import { icons } from '../constants'


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            initialRouteName='Home'
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: "#B088F9",
                    borderTopWidth: 0,
                    elevation: 0,
                }
            }}
        >
            <Tab.Screen
                name ="Home"
                component = {Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={(focused) ? icons.home : icons.homeOutline }
                            resizeMode="contain"
                            style={{
                                width: 28,
                                height: 28,
                                
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name ="Search"
                component = {Search}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={(focused) ? icons.search : icons.searchOutline }
                            resizeMode="contain"
                            style={{
                                width: 28,
                                height: 28,
                            }}
                        />
                    )
                }}
                
            />
            <Tab.Screen
                name ="SettingRoutine"
                component = {SettingRoutine}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={(focused) ? icons.account : icons.accountOutlined }
                            resizeMode="contain"
                            style={{
                                width: 28,
                                height: 28,
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name ="Load"
                component = {Load}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={(focused) ? icons.downloadBox : icons.downloadBoxOutline }
                            resizeMode="contain"
                            style={{
                                width: 28,
                                height: 28,
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name ="Account"
                component = {Account}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={(focused) ? icons.account : icons.accountOutlined }
                            resizeMode="contain"
                            style={{
                                width: 28,
                                height: 28,
                            }}
                        />
                    )
                }}
            />
            
        </Tab.Navigator>
    )
};

export default Tabs;
