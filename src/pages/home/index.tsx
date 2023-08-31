import * as React from "react";
import { Component } from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";

import lavanda from "../../../assets/lavanda.jpg";
import logo2 from "../../../assets/logo2.jpg";
import italy from "../../../assets/italy.png";

const width = Dimensions.get("screen").width;

const DATA = [
  {
    id: "1",
    title: "Chance - Chanel",
    imagem: "../../../assets/chance.png",
  },
  {
    id: "2",
    title: "Eau Fraíche - Chanel",
    imagem: "../../../assets/fraiche.png",
  },
  {
    id: "3",
    title: "Eau Tendre - Chanel",
    imagem: "../../../assets/tendre.png",
  },

  {
    id: "4",
    title: "Eau Vive - Chanel",
    imagem: "../../../assets/vive.png",
  },
];

type ItemProps = { title: string };

const Item = ({title}: ItemProps) => (
  <View style={Styles.item}>
    <Text style={Styles.title}>{title}</Text>
  </View>
);

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

        <View>
          <SafeAreaView>
            <FlatList
              data={DATA}
              renderItem={({ item }) => <Item title={item.title}/>}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
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

  italy: {
    width: 45,
    height: 29,
    borderRadius: 2,
  },

  line: {
    flexDirection: "row",
  },

  item: {
    backgroundColor: '#f0ddee',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  title: {
    fontSize: 16,
  },

});
