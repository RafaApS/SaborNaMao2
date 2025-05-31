import { Feather } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type RootStackParamList = {
  home: undefined;
  bebiPreto: undefined;
  bebiBan: undefined;
  bebiFran: undefined;
  bebiGen: undefined;
  bebiHibis: undefined;
  bebiTrop: undefined;
  bebiVerd: undefined;
  bebiVitVerd: undefined;
  bebiLaran: undefined;
  bebiLimao: undefined;
  bebiMoran: undefined;
  bebiAbac: undefined;
};

export default function ComidasInfantis() {
  const nav = useNavigation<NavigationProp<RootStackParamList>>();
  const [showVegano, setShowVegano] = useState(true);
  const [showVegetariano, setShowVegetariano] = useState(false);
  const [showSuco, setShowSuco] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<
    "vegano" | "vegetariano" | "suco" | null
  >(null);

  const toggleCategory = (category: "vegano" | "vegetariano" | "suco") => {
    setShowVegano(category === "vegano");
    setShowVegetariano(category === "vegetariano");
    setShowSuco(category === "suco");
  };

  return (
    
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => nav.navigate("home")}>
            <Feather name="chevron-left" size={24} color="#000" style={styles.seta} />
          </TouchableOpacity>
          <Text style={styles.paragraph}>Bebidas</Text>
        </View>

        {/* Toggle Buttons */}
        <View style={styles.toggleRow}>
         <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                 <Pressable
                                     style={[
                                         styles.pressable,
                                         showVegetariano ? styles.activeToggle : styles.inactiveToggle,
                                     ]}
                                     onPress={() => toggleCategory("vegetariano")}
                                 >
                                     <Text style={styles.toggleText}>Vitaminas</Text>
                                 </Pressable>
         
                                 <Pressable
                                     style={[
                                         styles.pressable,
                                         showVegano ? styles.activeToggle : styles.inactiveToggle,
                                     ]}
                                     onPress={() => toggleCategory("vegano")}
                                 >
                                     <Text style={styles.toggleText}>Chás</Text>
                                 </Pressable>
                             </View>

          <View style={{ marginTop: 10, alignItems: "flex-start" }}>
            <Pressable
              style={[
                styles.pressable,
                showSuco ? styles.activeToggle : styles.inactiveToggle,
              ]}
              onPress={() => toggleCategory("suco")}
            >
              <Text style={styles.toggleText}>Suco natural</Text>
            </Pressable>
          </View>
        </View>

        {/* Cards */}
        <View style={styles.branco}>
          {showVegano && (
            <>
              {/* cards veganos */}
              {/* Quiche */}
              <TouchableOpacity
                style={styles.card}
                onPress={() => nav.navigate("bebiPreto")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_bebida.png")}
                  style={styles.backgroundImage}
                />
                <Text style={styles.texto}>Chá Preto</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/19203070/pexels-photo-19203070/free-photo-of-cha-cafe-da-manha-pires-bebida-quente.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>

              {/* Hamburguer */}
              <TouchableOpacity
                style={styles.cardD}
                onPress={() => nav.navigate("bebiGen")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_bebida.png")}
                  style={styles.backgroundImage}
                />
                <Text style={styles.texto}>Chá de Gengibre</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/8329275/pexels-photo-8329275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>

              {/* Bolinha de queijo */}
              <TouchableOpacity
                style={styles.card}
                onPress={() => nav.navigate("bebiVerd")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_bebida.png")}
                  style={styles.backgroundImage}
                />
                <Text style={styles.texto}>Chá Verde</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/8330245/pexels-photo-8330245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>

              {/* Torta */}
              <TouchableOpacity
                style={styles.cardD}
                onPress={() => nav.navigate("bebiHibis")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_bebida.png")}
                  style={styles.backgroundImage}
                />
                <Text style={styles.texto}>Chá de Hibisco</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/19352808/pexels-photo-19352808/free-photo-of-tisana.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
            </>
          )}

          {showVegetariano && (
            <>
              {/* Vegetarianos */}
              <TouchableOpacity
                style={styles.card}
                onPress={() => nav.navigate("bebiFran")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_bebida.png")}
                  style={styles.backgroundImage}
                />
                <Text style={styles.texto}>Vitamina de Framboesa</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/775030/pexels-photo-775030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cardD}
                onPress={() => nav.navigate("bebiTrop")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_bebida.png")}
                  style={styles.backgroundImage}
                />
                <Text style={styles.texto}>Vitamina Tropical</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/161440/smoothie-fruit-vegetables-salad-beetroot-carrots-161440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.card}
                onPress={() => nav.navigate("bebiBan")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_bebida.png")}
                  style={styles.backgroundImage}
                />
                <Text style={styles.texto}>Vitamina de Banana</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/5946800/pexels-photo-5946800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cardD}
                onPress={() => nav.navigate("bebiVitVerd")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_bebida.png")}
                  style={styles.backgroundImage}
                />
                <Text style={styles.texto}>Vitamina verde</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/11896074/pexels-photo-11896074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
            </>
          )}

          {showSuco && (
            <>
              {/* Sucos */}
              <TouchableOpacity style={styles.card}
                onPress={() => nav.navigate("bebiLaran")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_bebida.png")}
                  style={styles.backgroundImage}
                />
                <Text style={styles.texto}>Suco de Laranja</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.cardD}
                onPress={() => nav.navigate("bebiLimao")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_bebida.png")}
                  style={styles.backgroundImage}
                />
                <Text style={styles.texto}>Suco de limão</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/8805353/pexels-photo-8805353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.card}
                onPress={() => nav.navigate("bebiMoran")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_bebida.png")}
                  style={styles.backgroundImage}
                />
                <Text style={styles.texto}>Suco de morango</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/30412118/pexels-photo-30412118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.cardD}
                onPress={() => nav.navigate("bebiAbac")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_bebida.png")}
                  style={styles.backgroundImage}
                />
                <Text style={styles.texto}>Suco de abacaxi</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/25935078/pexels-photo-25935078/free-photo-of-coquetel-aperitivo-drink-vidro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ececec" },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    paddingHorizontal: 10,
    gap: 12,
  },
  paragraph: {
    fontSize: 24,
    color: "#242424",
    textTransform: "uppercase",
    top: 10
  },
  seta: {
    top: 10
  },
  branco: {
    backgroundColor: "white",
    flex: 1,
    width: "100%",
    borderTopRightRadius: 100,
    padding: 15,
    top: 30,
  },
  toggleRow: {
    flexDirection: "column",
    marginTop: 40,
    margin: 10
  },

  pressable: {
    width: 180,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  activeToggle: { backgroundColor: "#FEB080" },
  inactiveToggle: { backgroundColor: "#ccc" },
  toggleText: {
    fontSize: 13,
    color: "#fff",
    textTransform: "uppercase",
    width: 200,
    textAlign: "center",
  },
  card: {
    width: "47%",
    aspectRatio: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    alignSelf: "flex-start",
    marginBottom: 16,
    marginTop: 16,
  },
  cardD: {
    width: "47%",
    aspectRatio: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    alignSelf: "flex-end",
    marginBottom: 16,
  },
  backgroundImage: { width: "100%", height: "100%" },
  texto: {
    position: "absolute",
    top: 20,
    left: 20,
    color: "#000",
    fontSize: 14,
    textTransform: "uppercase",
    zIndex: 2,
    width: 100
  },
  cardImage: {
    width: 80,
    height: 80,
    position: "absolute",
    bottom: 8,
    right: 8,
    zIndex: 2,
    borderRadius: 40,
  },
  modalButton: {
    backgroundColor: "#2F4B54",
    padding: 20,
    alignItems: "center",
    marginHorizontal: 20,
    width: "100%",
    resizeMode: "contain",
    marginLeft: "auto",
    height: 60,
    marginTop: 50,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: "100%",
    maxWidth: 350,
  },
  modalTitulo: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  modalTexto: { fontSize: 16, marginBottom: 20 },
  textoFechar: {
    textAlign: "center",
    color: "#7D4DFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
