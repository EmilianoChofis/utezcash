import React, {useState} from "react";
import {Text, TextInput, View, StyleSheet} from "react-native";
import colors from "../utils/colors";
import RNPickerSelect from 'react-native-picker-select';

export default function Form(){
    return(
       <View style={estilitos.viewForm}>
           <View style={estilitos.viewInputs}>
                <TextInput placeholder="cantidad a pedir" keyboardType="numeric" style={estilitos.input}/>
               <TextInput placeholder="Interes %" keyboardType="numeric" style={[estilitos.input, {width: "40%"}]}/>
           </View>
           <Text>Select</Text>
           <RNPickerSelect
               onValueChange={(value) => console.log(value)}
               items={[
                   { label: 'Football', value: 'football' },
                   { label: 'Baseball', value: 'baseball' },
                   { label: 'Hockey', value: 'hockey' },
               ]}
           />
       </View>
    )
}
const estilitos= StyleSheet.create({
    viewForm:{
        bottom: 0,
        width: "85%",
        paddingHorizontal: 40,
        backgroundColor: colors.meLoMuerde,
        borderRadius: 30,
        height: 200,
        justifyContent: "center"
    },
    viewInputs: {
        flexDirection: "row",

    },
    input:{
        fontSize: 12,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: colors.kosako,
        borderRadius: 5,
        width: "60%",
        height: 45,
        textAlign: "center",
        margin: 5,
        //position: "absolute"
    }
})