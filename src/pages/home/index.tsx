import * as React from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View,
  ScrollView,
} from "react-native";

import avião from "../../../assets/avião.png";
import cristo from "../../../assets/cristo.jpg"
import logo2 from "../../../assets/logo2.jpg";
import pichu from "../../../assets/pichu.jpg";


const width = Dimensions.get("screen").width;

export default function Home() {
  return (
    <View>
      <ScrollView>
        <View>
          <Image source={avião} style={Styles.top} />
        </View>

        <View style={Styles.carrinho}>
          <View style={Styles.line}>
            <Text style={Styles.titulocarrinho}>7 Meraviglie del Mondo</Text>
          </View>

          <View style={Styles.perfumaria}>
            <Image style={Styles.logo} source={logo2} />
            <Text style={Styles.nome}>Biglietti Aerei</Text>
          </View>

          <Text style={Styles.descricao}>
          Vieni a scoprire le sette meraviglie del mondo con la migliore compagnia aerea!
          </Text>
        </View>

        <View style={Styles.row}>
          <View style={Styles.card}>
            <Image style={Styles.img} source={cristo} />
          </View>

          <View style={Styles.card}>
            <Image style={Styles.img} source={pichu} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  top: {
    width: "100%",
    height: (578 / 768) * width,
  },

  titulocarrinho: {
    fontSize: 26,
    lineHeight: 42,
    color: "#46295A",
  },

  carrinho: {
    paddingVertical: 8,
    padidingHorizontal: 16,
    marginLeft: 16,
    marginRight: 16,
  },

  nome: {
    fontSize: 18,
    lineHeight: 26,
    marginLeft: 12,
    fontWeight: "bold",
    color: "#46295A",
  },

  logo: {
    width: 32,
    height: 32,
  },

  perfumaria: {
    flexDirection: "row",
    paddingVertical: 12,
  },

  descricao: {
    color: "#a3a3a3",
    fontStyle: "italic",
  },

  line: {
    flexDirection: "row",
  },

  item: {
    backgroundColor: "#f0ddee",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  title: {
    fontSize: 16,
  },

  card: {
    height: 155,
    width: "46%",
    backgroundColor: "#D8BFD8",
    marginLeft: "5%",
    marginRight: "5%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },

  img: {
    height: 120,
    width: 110,
    borderRadius: 5,
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: "5%",
    marginRight: "5%",
  },
});
