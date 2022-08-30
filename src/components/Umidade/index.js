import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Paho from 'paho-mqtt';




export default props => (
 
    <SafeAreaView style={Styles.container}>
        <Text style={Styles.text}>Umidade:</Text>
        <Text style={Styles.text}> <Icon color={'#fff'}  name='burn' size={14}  /> </Text>
    </SafeAreaView>
);