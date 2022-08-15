import React from 'react';
import { View, Text, SafeAreaView, ImageBackground } from 'react-native';
import Styles from './styles';
import Temperatura from '../../components/Temperatura';


const Fundo = require("../../assets/Imagens/fundo01.jpg");

export default props => (
    <ImageBackground  source={Fundo} resizeMode='cover' style={Styles.fundo}>
  
        <Temperatura/>
        
           <Text style={Styles.text}>Saido</Text>
        
 
    </ImageBackground>
     

)