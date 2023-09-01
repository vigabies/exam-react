import * as React from "react";
import { Image, Text, View, ScrollView, TouchableOpacity } from "react-native";
import Styles from "./styles";

import avião from "../../../assets/avião.png";
import cristo from "../../../assets/cristo.jpg";
import pichu from "../../../assets/pichu.jpg";

export default function Home() {
  return (
    <View>
      <ScrollView>
        <View>
          <Image source={avião} style={Styles.top} />
        </View>

        <View style={Styles.alinhamento}>
          <View>
            <Text style={Styles.titulo}>7 Meraviglie del Mondo</Text>
          </View>

          <View style={Styles.perfumaria}>
            <Text style={Styles.nome}>Biglietti Aerei Bibs</Text>
          </View>

          <Text style={Styles.descricao}>
            Vieni a scoprire le sette meraviglie del mondo con la migliore
            compagnia aerea!
          </Text>
        </View>

        <View style={Styles.row}>
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
        </View>
      </ScrollView>
    </View>
  );
}
