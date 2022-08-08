import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5'

import {
    HomeNavigation,

    Cadastrar_MedNavigation,
    Editar_MedNavigation,
    Lista_MedNavigation,
    LogoutNavigation

    
} from './StackNavigation';

const Tab = createBottomTabNavigator();

export default function HomeNavigationTabs() {
    return (
        
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                unmountOnBlur: true,
                tabBarShowLabel: false,
                tabBarStyle: { height: 50 }
            }}
        >
            <Tab.Screen
                name='HomeTab'
                component={HomeNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Icon
                                name='home'
                                size={20}
                                color={focused ? '#7B68EE' : '#006400'}
                            />
                            <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#7B68EE' : '#006400',
                                    width: 50,
                                    fontSize: 11,
                                    textAlign: 'center'
                                }}>
                             
                                Home
                            </Text>
                        </>
                    )
                }}
            />
                 <Tab.Screen
                name="Lista_MedNavigationTab"
                component={Lista_MedNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Icon
                                name='list-alt'
                                size={20}
                                color={focused ? '#7B68EE' : '#006400'}
                            />
                            <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#7B68EE' : '#006400',
                                    width: 50,
                                    fontSize: 11,
                                    textAlign: 'center'
                                }}>
                               
                                Lista
                            </Text>
                        </>
                    )
                }}
            />
            <Tab.Screen
                name="Cadastrar_MedTab"
                component={Cadastrar_MedNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Icon
                                name='folder-plus'
                                size={20}
                                color={focused ? '#7B68EE' : '#006400'}
                            />
                                                        <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#7B68EE' : '#006400',
                                    width: 50,
                                    fontSize: 11,
                                    textAlign: 'center'
                                }}>
                               
                                Cadastrar
                            </Text>
                        </>
                    )
                }}
            />
            <Tab.Screen
                name="Editar_MedTab"
                component={Editar_MedNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Icon
                                name='edit'
                                size={20}
                                color={focused ? '#7B68EE' : '#006400'}
                            />
                                                        <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#7B68EE' : '#006400',
                                    width: 50,
                                    fontSize: 11,
                                    textAlign: 'center'
                                }}>
                             
                                Editar
                            </Text>
                        </>
                    )
                }}
            />
       <Tab.Screen
            name="LogoutNavigationTab"
            component={LogoutNavigation}
            options={{
                tabBarIcon: ({ focused }) => (
                    <>
                        <Icon
                            name='sign-out-alt'
                            size={20}
                            color={focused ? '#7B68EE' : '#006400'}
                        />
                        <Text
                            allowFontScaling={false}
                            style={{
                                color: focused ? '#7B68EE' : '#006400',
                                width: 50,
                                fontSize: 11,
                                textAlign: 'center'
                            }}>
                           
                           Sair
                        </Text>
                    </>
                )
            }}
        />
        </Tab.Navigator>
    );
}