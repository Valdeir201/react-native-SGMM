import React from 'react';
import { View, Text, SafeAreaView, } from 'react-native';
import Styles from './styles';



export default props => (
   
    <SafeAreaView style={Styles.container}>

        <Text style={Styles.text}>Temperatura:</Text>
        <Text style={Styles.text}>26° C </Text>
    </SafeAreaView>
 
)