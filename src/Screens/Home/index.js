import React from 'react';
import { View, Text, SafeAreaView, ImageBackground, Alert, } from 'react-native';
import Styles from './styles';
import Temperatura from '../../components/Temperatura';
//import Avisos from '../../components/Avisos';

const Fundo = require("../../assets/Imagens/fundo01.jpg");



export default props => (
    <ImageBackground imageStyle={{opacity:0.3}}  source={Fundo}  resizeMode='cover' style={Styles.fundo}>
        
   
        <SafeAreaView style={Styles.temp_umi}>
        <Temperatura/>
        
        </SafeAreaView>
        
 
    </ImageBackground>
)