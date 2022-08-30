import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from "react-native";
import firebase from '../../config/firebase'
import { useNavigation } from "@react-navigation/native"
import Styles from './styles'

export default function MedCad() {
  const [cadastromed, setCadastromed] = useState([]);
  const database = firebase.firestore();
  const navigation = useNavigation();

  function deleteTask(id) {
    database.collection("cadastromed").doc(id).delete();
  }
  useEffect(() => {
    database.collection("cadastromed").onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setCadastromed(list);
    });
  }, []);
  return(
    <View>
        <FlatList 
         showsVerticalScrollIndicator={false}
        data = { cadastromed }
        renderItem={({ item }) => {
            return(
                <View style={Styles.container}>
                    <View >
                        <Text sytle={Styles.textsub}>nome do medicamento{item.nome}</Text>
                        <Text sytle={Styles.textsub}>Quantidade:{item.qntd}</Text>
                        <Text sytle={Styles.textsub}>data de validade:{item.data}</Text>
                        <Text sytle={Styles.textsub}>temperatuar maxima suportada{item.tempmx}</Text>
                        <Text sytle={Styles.textsub}>temperatura mínima suportada{item.tempmn}</Text>
                        <TouchableOpacity style={Styles.btn} onPress={()=> {
                          deleteTask(item.id)

                        }}><Text style={Styles.textbtn}> DELETAR</Text></TouchableOpacity>
                    </View>
                 </View>
            )
        }}
        />
    </View>
  )
}
