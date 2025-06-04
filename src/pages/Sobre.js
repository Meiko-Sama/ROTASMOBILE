import React from "react"
import { Text, View, Button } from 'react-native';

// IMPORTAÇÃO DO STYLES
import { styles } from "../styles/styles"

// IMPORTAÇÃO DE USAR NAVEGAÇÃO
import { useNavigation } from "@react-navigation/native";

export default function Sobre() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>PAGINA SOBRE</Text>

      {/* ESSA VOLTA PARA A PAGINA ANTERIOR */}
      {/* <Button title="HOME" onPress={() => navigation.goBack()} /> */}

      {/* ESSA PAGINA VOLTA PARA A PAGINA QUE A GENTE DECICDIR */}
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
