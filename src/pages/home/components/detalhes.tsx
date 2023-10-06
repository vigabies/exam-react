import * as React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { cidades } from "../../../mocks/mocks";
import Styles from "./../styles";
// import cristo from "../../../../assets/cristo.jpg";
// import pichu from "../../../../assets/pichu.jpg";

export default function Detalhes() {
  return (
    <>
      {cidades.map((cidade) => (
        <View key={cidade.id} style={Styles.card}>
          <Image style={Styles.img} source={cidade.image} />
          <Text style={Styles.text}>{cidade.name}</Text>
          <TouchableOpacity style={Styles.botao}>
            <Text style={Styles.text}>Ver mais</Text>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
}
