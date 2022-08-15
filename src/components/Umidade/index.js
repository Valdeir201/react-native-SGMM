import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Styles from './styles';

export default props => (
    <SafeAreaView style={Styles.container}>
        <Text style={Styles.text}>Umidade:</Text>
        <Text style={Styles.text}>70 % </Text>
    </SafeAreaView>
)