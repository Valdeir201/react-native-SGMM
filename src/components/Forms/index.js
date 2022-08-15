import React from 'react';
import { Text, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import Styles from './styles';



export default props => (
    <SafeAreaView  style={Styles.container}>
   

    <Text style={Styles.text}>Preencha todos os dados! </Text>

    <TextInput style={Styles.input} placeholder=" Nome do medicamento?"  />
    
    <TextInput style={Styles.input} placeholder=" Temperatura máxima suportada?"  />

    <TextInput style={Styles.input} placeholder=" Temperatura mínima suportada?"  />

    <TextInput style={Styles.input} placeholder=" Quantidade em estoque?"  />

    <TextInput style={Styles.input} placeholder=" Data de validade?"  />

    <TouchableOpacity style={Styles.btn}  >
     <Text style={Styles.textbtn} > Cadastrar </Text>
    </TouchableOpacity>
    

</SafeAreaView>

)