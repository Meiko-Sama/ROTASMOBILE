import React from "react"
import { Text, View, Button } from 'react-native';

// IMPORTAÇÃO DO STYLES
import { styles } from "../styles/styles"

// IMPORTAÇÃO DE USAR NAVEGAÇÃO
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 25, fontWeight: "bold", bottom: 12 }}>PAGINA HOME</Text>



      {/* ESSA VOLTA PARA A PAGINA ANTERIOR */}
      <Button title="SOBRE" onPress={() => navigation.navigate("Sobre")} />

      {/* ESSA PAGINA VOLTA PARA A PAGINA QUE A GENTE DECICDIR */}
      {/* <Button title="Sobre" onPress={() => navigation.navigate("Sobre")} /> */}
    </View>
  );
}
