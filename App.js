import {StatusBar, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import colors from './src/utils/colors'
import Form from "./src/components/form";

export default function App() {
  return (
    <View>
      <StatusBar style={'light-content'}></StatusBar>
     <View>
       <SafeAreaView style={styles.safeArea}>
         <Text style={styles.titleApp}>Utez cashssss</Text>
           <Form/>
       </SafeAreaView>
     </View>
      <View>
        <Text style={[styles.resultados, {fontWeight:"bold"}]}>Resultados</Text>
      </View>
      <View>
        <Text>Botonoooo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultados:{
    color:"blue"
  },
    safeArea:{
        backgroundColor: colors.kosako,
        height: 200,
        alignItems: "center",
        width: "100%",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    titleApp:{
        color: "white",
        fontSize:30,
        fontWeight: "bond",
        marginTop: 15
    }
});
