import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from "../utils/colors";

export default function Results(props) {
    const{errors, interes, prestamo, cantidad, plazos}=props
  return (
    <View>
        <View style={styles.viewResults}>
            {prestamo &&(
                <View>
                    <Info label={"Cntidad solicitada"} value={`$${cantidad}`}/>
                    <Info label={"Interes"} value={`$${interes}`}/>
                    <Info label={"Plazos"} value={`$${plazos}`}/>
                    <Info label={"Pago mes"} value={`$${prestamo.pagoMes}`}/>
                    <Info label={"Pago total"} value={`$${prestamo.pagoTotal}`}/>
                </View>
            )}
        </View>
        <View style={styles.viewResults}>
            <Text style={styles.error}>{errors}</Text>
        </View>

    </View>
  )
}

function Info(props){
    console.log(props)
    const {label, value}=props;
   return(
       <View style={styles.info}>
           <Text style={styles.msg}>{label}</Text>
           <Text>{value}</Text>
       </View>
   )
}

const styles = StyleSheet.create({
    viewResults:{
        marginTop: 10,
        marginHorizontal: 40
    },
    error:{
        color: colors.comoManzanas,
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold"
    },
    msg:{
        color: colors.kosako,
        fontSize: 16,
        fontWeight: "bold",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    info:{

    }
})