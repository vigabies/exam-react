import * as React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import Styles from "./../styles";
import cristo from "../../../../assets/cristo.jpg";
import pichu from "../../../../assets/pichu.jpg";

export default function Detalhes() {
  return (
    <>
      <View style={Styles.card}>
        <Image style={Styles.img} source={cristo} />
        <Text style={Styles.text}>Cristo Redentor – Brasil</Text>
        <TouchableOpacity style={Styles.botao}>
          <Text style={Styles.text}>Ver mais</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.card}>
        <Image style={Styles.img} source={pichu} />
        <Text style={Styles.text}>Machu Picchu – Peru</Text>
        <TouchableOpacity style={Styles.botao}>
          <Text style={Styles.text}>Ver mais</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
