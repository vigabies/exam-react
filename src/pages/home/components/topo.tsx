import * as React from "react";
import { Image, Text, View } from "react-native";
import Styles from "./../styles";
import avião from "../../../../assets/avião.png";

export default function Topo() {
  return (
    <>
      <View>
        <Image source={avião} style={Styles.top} />
      </View>

      <View>
        <Text style={Styles.titulo}>7 Meraviglie del Mondo</Text>
      </View>

      <View style={Styles.perfumaria}>
        <Text style={Styles.nome}>Biglietti Aerei Bibs</Text>
      </View>

      <Text style={Styles.descricao}>
        Vieni a scoprire le sette meraviglie del mondo con la migliore compagnia
        aerea!
      </Text>
    </>
  );
}
