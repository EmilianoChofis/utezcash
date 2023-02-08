import {StatusBar, SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';
import colors from './src/utils/colors'
import Form from "./src/components/form";
import {useState} from "react";

export default function App() {
    const [cantSol, setCant]=useState(null);
    const [interes, setInteres]=useState(null);
    const [plazos, setPlazos]=useState(null);

    const calcular=()=>{
        console.log(`cant: ${cantSol}`)
        console.log(`Interes: ${interes}`)
        console.log(`plazos: ${plazos}`)
    }
  return (
    <View>
      <StatusBar style={'light-content'}></StatusBar>
     <View>
       <SafeAreaView style={styles.safeArea}>
           <View style={styles.comodin}></View>
         <Text style={styles.titleApp}>Utez cashssss</Text>
           <Form setCantidad={setCant} setInteres={setInteres} setPlazos={setPlazos}/>
       </SafeAreaView>
     </View>
      <View>
        <Text style={[styles.resultados, {fontWeight:"bold"}]}>Resultados</Text>
      </View>
      <View style={styles.boton}>
        <Button title={"Botoncito"} onPress={calcular} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    safeArea:{
        height: 290,
        alignItems: "center",
    },
    titleApp:{
        color: "white",
        fontSize:30,
        fontWeight: "bond",
        marginTop: 15
    },
    comodin:{
        height:200,
        backgroundColor: colors.kosako,
        width: "100%",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        position: "absolute",
        zIndex: -1
    }
});
