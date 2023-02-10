import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from "../utils/colors";
export default function Boton(props) {
    const{fnCalcular}=props
  return(
    <View style={styles.viewCalculate}>
        <TouchableOpacity style={styles.touchable} onPress={fnCalcular}>
            <Text style={styles.btnTitle}>Calcular</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    btnTitle:{
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold",
        color: colors.jade
    },
    touchable:{
        padding: 15,
        borderRadius: 20,
        width: "80%",
        backgroundColor: colors.comoManzanas,
    },
    viewCalculate:{
        height: 100,
        backgroundColor: colors.kosako,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        bottom: 0,
        position: "absolute"
    }
})

