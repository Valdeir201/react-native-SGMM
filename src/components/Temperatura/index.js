import React from 'react';
import { View, Text, SafeAreaView, } from 'react-native';
import Styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default props => (
   
    <SafeAreaView style={Styles.container}>

        <Text style={Styles.text}>Temperatura:</Text>
        <Text style={Styles.text}>26° C  <Icon color={'#fff'}  name='temperature-low' size={14}  /> </Text>
        
        
    </SafeAreaView>
 
)