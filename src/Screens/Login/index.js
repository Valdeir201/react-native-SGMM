import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import Styles from './styles';


export default props => (
    <View style={Styles.container}>
           <Image source={require('../../assets/logo.png')} style={Styles.logo} />

        <Text style={Styles.text}>Login obrigatório para acessar o sistema!</Text>

        <TextInput style={Styles.input} placeholder="  Digite seu usuário"  />
        <TextInput style={Styles.input} secureTextEntry={true} placeholder="  Digite sua senha"  />

        <TouchableOpacity style={Styles.btn} onPress={() => props.navigation.navigate('Home')} >
            <Text style={Styles.textbtn} > Login </Text>
        </TouchableOpacity>
    </View>
)