import React from 'react';
import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import Styles from './styles';



const Fundo = require("../../assets/Imagens/fundo01.jpg");

export default props => (
    <ImageBackground imageStyle={{opacity:0.3}} source={Fundo} resizeMode='cover' style={Styles.fundo}>
        <View>
  
        <TouchableOpacity 
        style={Styles.btnn} name="sair" 
        onPress={()=> props.navigation.navigate('Login')}>
            <Text style={Styles.textbtn}>
                Clique para sair
            </Text>

        </TouchableOpacity>
        </View>
        
 
    </ImageBackground>
     

)