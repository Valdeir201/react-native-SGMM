import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Styles from './styles';
import Form_Cadastro from '../../components/Forms';


const Fundo = require("../../assets/Imagens/fundo01.jpg");

export default props => (
    <ImageBackground  source={Fundo} resizeMode='cover' style={Styles.fundo}>
  
        <Form_Cadastro/>   

    
        
    </ImageBackground>

)