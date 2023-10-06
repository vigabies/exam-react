import * as React from "react";
import { Image, Text, View } from "react-native";
import Styles from "./../styles";
import Aviao from "./../../../../assets/aviao.jpg";
import Logo from "./../../../../assets/logo.png";

export default function Topo() {
  return (
    <>
      <View style={Styles.header}>
        <Image source={Logo} style={Styles.logo}/>
      </View>

      <View style={Styles.aviao}>
        <Image source={Aviao} style={Styles.topo} />
      </View>

      <View>
        <Text style={Styles.titulo}>The best trips...</Text>
      </View>

      <Text style={Styles.descricao}>
        Traveling is experiencing new cultures with an open mind!
      </Text>
    </>
  );
}
