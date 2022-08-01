import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeNavigationTabs from './BottomTabs'

import {
    Home,
    Login,
    Cadastrar_Med,
    Editar_Med,
    Lista_Med,
    Logout
} from '../Screens'

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator
        initialRouteName='Login' // Controle de rota inicial
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeNavigationTabs} />
    </Stack.Navigator>
)

export function HomeNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export function Cadastrar_MedNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: true }}
        >
            <Stack.Screen
                name='Cadastrar Medicamentos'
                component={Cadastrar_Med}
            />
        </Stack.Navigator>
    )
}

export function Editar_MedNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: true }}
        >
            <Stack.Screen
                name='Editar Medicamentos'
                component={Editar_Med}
            />
        </Stack.Navigator>
    )
}

export function Lista_MedNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: true }}
        >
            <Stack.Screen
                name='Lista de Medicamentos'
                component={Lista_Med}
            />

         
        </Stack.Navigator>
    )
}
export function LogoutNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: true }}
        >
            <Stack.Screen
                name='Logout'
                component={Logout}
            />

         
        </Stack.Navigator>
    )
}