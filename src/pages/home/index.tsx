import * as React from "react";
import { Image, Text, View, ScrollView, TouchableOpacity } from "react-native";
import Styles from "./styles";
import Topo from "./components/topo";
import Detalhes from "./components/detalhes";


export default function Home() {
  return (
    <View>
      <ScrollView>
        <View style={Styles.alinhamento}>
          <Topo />
        </View>

        <View style={Styles.row}>
          <Detalhes />
        </View>
      </ScrollView>
    </View>
  );
}
