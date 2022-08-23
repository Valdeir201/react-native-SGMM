import { useState } from "react";
import firebase from '../../config/firebase'
import {View, Text, TouchableOpacity, FlatList, StyleSheet, RecyclerViewBackedScrollViewComponent} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function ListaMed(){
    //const databese = firebase.firestote()
    db.collection("cadastromed").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    });

    return(
       <FlatList 
       data={cadastromed}
       renderItem={({ item }) => 
       <SafeAreaView  style={Styles.container}>

    
       <ScrollView style={Styles.scroll}>
   
           <Text style={Styles.text}>Preencha todos os dados! </Text>

           <Text style={Styles.input}>  Nome do medicamento: {item.nome} </Text>
   
           <Text style={Styles.input}> Temperatura máxima suportada? {item.tempmx}</Text>

           <Text style={Styles.input}> Temperatura mínima suportada {item.tempmn} </Text> 

           <Text style={Styles.input}> Quantidade em estoque {item.qntd} </Text>

           <Text style={Styles.input}> Data de validade {item.data} </Text> 

          

   </ScrollView>    

</SafeAreaView>
}/>
            
    )
}
