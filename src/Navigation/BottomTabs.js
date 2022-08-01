import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5'

import {
    HomeNavigation,

    Cadastrar_MedNavigation,
    Editar_MedNavigation,
    Lista_MedNavigation,
    SignUpNavigation

    
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
                                color={focused ? '#0a9396' : '#d62828'}
                            />
                            <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#0a9396' : '#d62828',
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
                name="Cadastrar_MedTab"
                component={Cadastrar_MedNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Icon
                                name='stream'
                                size={20}
                                color={focused ? '#0a9396' : '#d62828'}
                            />
                                                        <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#0a9396' : '#d62828',
                                    width: 50,
                                    fontSize: 11,
                                    textAlign: 'center'
                                }}>
                               
                                Cadastrar Medicamento
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
                                name='comment'
                                size={20}
                                color={focused ? '#0a9396' : '#d62828'}
                            />
                                                        <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#0a9396' : '#d62828',
                                    width: 50,
                                    fontSize: 11,
                                    textAlign: 'center'
                                }}>
                             
                                Editar Medicamento
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
                                name='user-cog'
                                size={20}
                                color={focused ? '#0a9396' : '#d62828'}
                            />
                            <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#0a9396' : '#d62828',
                                    width: 50,
                                    fontSize: 11,
                                    textAlign: 'center'
                                }}>
                               
                                Lista
                            </Text>
                        </>
                    )
                }}
            /><Tab.Screen
            name="SignUpNavigationTab"
            component={SignUpNavigation}
            options={{
                tabBarIcon: ({ focused }) => (
                    <>
                        <Icon
                            name='user-cog'
                            size={20}
                            color={focused ? '#0a9396' : '#d62828'}
                        />
                        <Text
                            allowFontScaling={false}
                            style={{
                                color: focused ? '#0a9396' : '#d62828',
                                width: 50,
                                fontSize: 11,
                                textAlign: 'center'
                            }}>
                           
                            SignUp
                        </Text>
                    </>
                )
            }}
        />
        </Tab.Navigator>
    );
}