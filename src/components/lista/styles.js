import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    border: {
        margin: 10,
       
        height: '25%',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2461d4',
        borderRadius: 10,
       
    },

    container: {
        margin: 10,    
        height: '90%',
        width: '90%',
        //padding: 10,
       
       backgroundColor: '#fff',
       borderRadius: 20,
       borderColor:  '#2461d4',
       borderWidth: 5,
    },
    text: {
        backgroundColor: '#FF0',
       fontSize: 16,
        color: '#000'
    },
    textsub: {
        padding: 10,
        color: '#000',
     
    },
    btn: { 
        marginBottom: 5,
        padding:1,
        width: 120,
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: '#b30707',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderColor:  '#000',
        borderWidth: 2,
    },
    textbtn: { 
      
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
        
    }
})