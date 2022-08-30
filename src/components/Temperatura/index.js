import React, { useState } from 'react';
import { View, Text, SafeAreaView, } from 'react-native';
import Styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Paho from 'paho-mqtt'
import Styles1 from '../Umidade/styles'




var entrada;
var mensagem2;


const client = new Paho.Client(
    'broker.emqx.io',
    8083,
    '/'
  )
  
  try{
  client.connect({
      onSuccess: function () {
          console.log("conectado")
          //client.subscribe("esp32/output")
          //client.subscribe("esp32/counter")
          client.subscribe("temperatura");
          
        const message1 = new Paho.Message('connected')
        
       
        message1.destinationName = "temperatura"
       
       
        client.send(message1)
       
       
      },
      onFailure: function () {
          console.log("Desconectado")
      }, 
      //userName: 'emqx',
      //password: 'public',
      //useSSL: true,
  })} catch (error) {
    alert(error);
  }



export default props => {
   

    const [msg, setMsg] = useState("10");
    


    client.onMessageArrived = function (messageX) {
        //alert("Entrou")
        console.log('Topic:' + messageX.destinationName + ", Message:" + messageX.payloadString);
        entrada = messageX.destinationName;
        //mensagem2 = messageX.payloadString;
        setMsg(messageX.payloadString);
      
      }
      


return (
    
   <View>
      <View style={Styles.container}>
        
        
          <Text style={Styles.text}>Temperatura:</Text>
          <Text style={Styles.text}>{msg}  <Icon color={'#fff'}  name='temperature-low' size={14}  /> </Text>
          
          
          
      </View>
      
        <View style={Styles1.container}>
          <Text style={Styles1.text}>Umidade:</Text>
          <Text style={Styles1.text}> <Icon color={'#fff'}  name='burn' size={14}  /> </Text>
        </View>
    </View>
 
)};