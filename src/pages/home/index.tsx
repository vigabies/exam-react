import * as React from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import lavanda from "../../../assets/lavanda.jpg";
import logo2 from "../../../assets/logo2.jpg";
import italy from "../../../assets/italy.png";

const width = Dimensions.get("screen").width;

export default function Home() {
  return (
    <View>
      <ScrollView>
        <View>
          <Image source={lavanda} style={Styles.top} />
        </View>

        <View style={Styles.carrinho}>
          <View style={Styles.line}>
            <Text style={Styles.titulocarrinho}>Carrello della spesa</Text>
            {/* <Image style={Styles.italy} source={italy} /> */}
          </View>

          <View style={Styles.perfumaria}>
            <Image style={Styles.logo} source={logo2} />
            <Text style={Styles.nome}>Le fragranze di Gabi</Text>
          </View>

          <Text style={Styles.descricao}>
            I migliori profumi importati da tutta Europa, scegli la fragranza
            che fa per te!
          </Text>
        </View>

        <View style={Styles.list}>
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
    fontSize: 16,
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

  italy: {
    width: 45,
    height: 29,
    borderRadius: 2,
  },

  line: {
    flexDirection: "row",
  },

  list: {},
});
