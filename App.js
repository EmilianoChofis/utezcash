import {StatusBar, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import colors from './src/utils/colors'
import Form from "./src/components/form";
import {useState} from "react";
import Boton from "./src/components/Boton";
import Results from "./src/components/Results";

export default function App() {
    const [cantSol, setCant]=useState(null);
    const [interes, setInteres]=useState(null);
    const [plazos, setPlazos]=useState(null);
    const [prestamo, setPrestamo]=useState(null);
    const [errors, setErrors]=useState("");
    const reset=()=>{
        setErrors("")
        setPrestamo(null)
    }
    const calcular=()=>{
        reset()
        if (!cantSol){
           setErrors("falta cantidad")
        }else if(!interes){
            setErrors("falta interes")
        }else if(!plazos){
            setErrors("falta plazos")
        }else{
            const inter =  interes/100;
            const pagos = cantSol/((1-Math.pow(inter+1, -plazos))/inter);
            setPrestamo({
                pagoMes:pagos.toFixed(2),
                pagoTotal:(pagos*plazos).toFixed(2)
            })
            console.log(prestamo)
        }
    }

  return (
    <View style={{height: "100%"}}>
      <StatusBar style={'light-content'}></StatusBar>
     <View>
       <SafeAreaView style={styles.safeArea}>
           <View style={styles.comodin}></View>
         <Text style={styles.titleApp}>Utez cashssss</Text>
           <Form setCantidad={setCant} setInteres={setInteres} setPlazos={setPlazos}/>
       </SafeAreaView>
     </View>
        <Results errors={errors} interes={interes} plazos={plazos} cantidad={cantSol} prestamo={prestamo}></Results>
        <Boton fnCalcular={calcular}></Boton>
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
