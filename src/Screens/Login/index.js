import React from 'react';
import { useState } from 'react';
import firebase from "../../config/firebase";
import { View, Text, TouchableOpacity, Image, TextInput, SafeAreaView} from 'react-native';
import Styles from './styles';


export default function Login({navigation}){
    const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [errorLogin, setErrorLogin] = useState("");
        const loginFirebase = ()=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            navigation.navigate("Home", {idUser: user.uid})
        })
        .catch((error) => {
            setErrorLogin(true)
            let errorCode = error.code;
            let errorMessage = error.message;
        });
}

    return(
        
    <SafeAreaView  style={Styles.container}>
    <Image source={require('../../assets/Imagens/logo.png')} style={Styles.logo} />

 <Text style={Styles.text}>Login obrigatório para acessar o sistema!</Text>

 <TextInput style={Styles.input} placeholder="  Digite seu usuário"  onChangeText={(text) => setEmail(text)}/>
 <TextInput style={Styles.input} secureTextEntry={true} placeholder="  Digite sua senha"  onChangeText={(text) => setPassword(text)} />

 <TouchableOpacity style={Styles.btn} onPress={loginFirebase}>
     <Text style={Styles.textbtn} > Login </Text>
 </TouchableOpacity>
</SafeAreaView>

    )
}