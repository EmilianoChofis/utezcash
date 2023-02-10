
import {Text, TextInput, View, StyleSheet} from "react-native";
import colors from "../utils/colors";
import RNPickerSelect from 'react-native-picker-select';

export default function Form(props){
    const {setCantidad,setInteres,setPlazos}=props;
    return(
       <View style={estilitos.viewForm}>
           <View style={estilitos.viewInputs}>
                <TextInput placeholder="cantidad a pedir" keyboardType="numeric" style={estilitos.input} onChange={(e)=>setCantidad(e.nativeEvent.text)}/>
               <TextInput placeholder="Interes %" keyboardType="numeric" style={[estilitos.input, {width: "40%"}]} onChange={(e)=>setInteres(e.nativeEvent.text)}/>
           </View>
           <Text>Select</Text>
           <RNPickerSelect
               style={selectStyle}
               placeholder={{label: 'jaja selecciona un deporte', value: null}}
               onValueChange={(value) => setPlazos(value)}
               useNativeAndroidPickerStyle={false}
               items={[
                   { label: '12 meses', value: '12' },
                   { label: '6 meses', value: '6' },
                   { label: '3 meses', value: '3' },
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
        justifyContent: "center",
        position: "absolute"
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


const selectStyle=StyleSheet.create({
    inputAndroid:{
        backgroundColor: colors.jade,
        marginTop:10,
        fontSize:16,
        padding: 10,
        borderWidth: 0.5,
        borderColor: colors.coc,
        borderRadius: 20,
        paddingRight: 25

    },
    inputIos:{
        backgroundColor: "#fff",
        marginTop:10,
        fontSize:16,
        padding: 10,
        borderWidth: 0.5,
        borderColor: "#000",
        borderRadius: 6,
        paddingRight: 25
    }
})


