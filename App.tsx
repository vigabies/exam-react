import {View, SafeAreaView, StatusBar} from "react-native";
import Home from "./src/pages/home";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Home />
    </SafeAreaView>
  );
}
