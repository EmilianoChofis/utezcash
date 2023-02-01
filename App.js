import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<StatusBar barStyle={'dark-content'}></StatusBar>*/}
     <View>
       <Text style={{color:"red"}}>Utez cash</Text>
     </View>
      <View>
        <Text style={styles.resultados}>Resultados</Text>
      </View>
      <View>
        <Text>Boton</Text>
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
  }
});
