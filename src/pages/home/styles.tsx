import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("screen").width;
const Styles = StyleSheet.create({
  //topo ----------------------
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },

  header: {
    flexDirection: "row",
    paddingVertical: 12,
  },

  aviao: {
    flexDirection: "row",
  },

  titulo: {
    fontSize: 20,
    lineHeight: 42,
    color: "#46295A",
  },

  descricao: {
    color: "#a3a3a3",
    fontStyle: "italic",
    marginBottom: 5,
  },

  logo: {
    width: "100%",
    height: 80,
  },

  //detalhe -------------------

  card: {
    height: 200,
    width: "45%",
    backgroundColor: "#d7d7ee",
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
    marginTop: "5%",
  },

  text: {
    marginTop: "5%",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  botao: {
    backgroundColor: "#b0c4de",
    borderRadius: 100,
    height: "15%",
    width: "50%",
    marginTop: "5%",
  },

  //index ---------------------

  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: "5%",
    marginRight: "5%",
  },

  alinhamento: {
    paddingVertical: 5,
    padidingHorizontal: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
  },

  // ----------------------------
});

export default Styles;
