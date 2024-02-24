import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return <>
    <StatusBar backgroundColor='#B0C4DE' />
      <SafeAreaView style={styles.estiloTexto} > 
      <Text style={styles.estiloTexto}>Meu primeiro React Native</Text>
      

      </SafeAreaView>
      </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0C4DE',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 35,
  },
  estiloTexto:{
    fontSize:30,
    color: '8000',
  },
});
