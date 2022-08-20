import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default props => (
    <SafeAreaView style={Styles.container}>
        <Text style={Styles.text}>Umidade:</Text>
        <Text style={Styles.text}>70 %  <Icon color={'#fff'}  name='burn' size={14}  /> </Text>
    </SafeAreaView>
)