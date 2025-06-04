import React from "react"
import { Text, View, Button, TouchableOpacity } from 'react-native';

// IMPORTAÇÃO ICONES
import Entypo from '@expo/vector-icons/Entypo';

// IMPORTAÇÃO DO STYLES
import { styles } from "../styles/styles"

// IMPORTAÇÃO DE USAR NAVEGAÇÃO
import { useNavigation } from "@react-navigation/native";

export default function Sobre() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      {/* BOTÃO DO DRAWER */}
      {/* <TouchableOpacity style={{
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40,
        position: "absolute",
        top: 30,
        left: 20
      }} onPress={() => navigation.openDrawer()}  >
        <Entypo name="menu" size={40} color="white" />
      </TouchableOpacity> */}

      {/* ESSA VOLTA PARA A PAGINA ANTERIOR */}
      {/* <Button title="HOME" onPress={() => navigation.goBack()} /> */}

      {/* ESSA PAGINA VOLTA PARA A PAGINA QUE A GENTE DECICDIR */}
      <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>PAGINA SOBRE</Text>
    </View>
  );
}
