import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get("screen").width;
const Styles = StyleSheet.create({
    top: {
        width: "100%",
        height: (578 / 768) * width,
      },
    
      titulo: {
        fontSize: 26,
        lineHeight: 42,
        color: "#46295A",
      },
    
      alinhamento: {
        paddingVertical: 8,
        padidingHorizontal: 16,
        marginLeft: 16,
        marginRight: 16,
        alignItems: "center",
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
        marginBottom: 5,
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
        height: 200,
        width: "45%",
        backgroundColor: "#E6E6FA",
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
    
      row: {
        flexDirection: "row",
        justifyContent: "center",
        marginLeft: "5%",
        marginRight: "5%",
      },
    
      text: {
        marginTop: "5%",
        color: "white",
      },

      botao: {
        backgroundColor: "#D8BFD8",
        borderRadius: 100,
        height: "15%",
        width: "50%",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",
      },

})

export default Styles;