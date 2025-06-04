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
      <Text>PAGINA HOME</Text>

      <Button title="Sobre" onPress={() => navigation.navigate("Sobre")} />
    </View>
  );
}
