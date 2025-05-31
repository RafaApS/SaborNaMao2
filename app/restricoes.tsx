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
  paoq_lactose: undefined;
  cookie_lactose: undefined;
  brigadeiro_lactose: undefined;
  churros_lactose: undefined;
  palitos_diabetes: undefined;
  cheesecake_diabetes: undefined;
  quibe_diabetes: undefined;
  salmao_diabetes: undefined;
  sanduiche_gluten: undefined;
  pizza_gluten: undefined;
  pastel_gluten: undefined;
  brownie_gluten: undefined;
};

export default function ComidasInfantis() {
  const nav = useNavigation<NavigationProp<RootStackParamList>>();
  const [showIntolerancia, setShowIntolerancia] = useState(true);
  const [showGluten, setShowGluten] = useState(false);
  const [showDiabete, setShowDiabete] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<
    "intolerancia" | "gluten" | "diabete" | null
  >(null);

  const toggleCategory = (category: "intolerancia" | "gluten" | "diabete") => {
    setShowIntolerancia(category === "intolerancia");
    setShowGluten(category === "gluten");
    setShowDiabete(category === "diabete");
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => nav.navigate("home")}>
            <Feather
              name="chevron-left"
              size={24}
              color="#000"
              style={styles.seta}
            />
          </TouchableOpacity>
          <Text style={styles.paragraph}>Restrições e Intolerâncias</Text>
        </View>

        {/* Toggle Buttons */}
        <View style={styles.toggleRow}>
          {/* Primeira linha com dois botões lado a lado */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Pressable
              style={[
                styles.pressable,
                showIntolerancia ? styles.activeToggle : styles.inactiveToggle,
              ]}
              onPress={() => toggleCategory("intolerancia")}
            >
              <Text style={styles.toggleText}>Lactose</Text>
            </Pressable>

            <Pressable
              style={[
                styles.pressable,
                showGluten ? styles.activeToggle : styles.inactiveToggle,
              ]}
              onPress={() => toggleCategory("gluten")}
            >
              <Text style={styles.toggleText}>Glúten</Text>
            </Pressable>
          </View>

          {/* Segunda linha com "Diabéticos" alinhado à esquerda */}
          <View style={{ marginTop: 10, alignItems: "flex-start" }}>
            <Pressable
              style={[
                styles.pressable,
                showDiabete ? styles.activeToggle : styles.inactiveToggle,
              ]}
              onPress={() => toggleCategory("diabete")}
            >
              <Text style={styles.toggleText}>Diabéticos</Text>
            </Pressable>
          </View>
        </View>

        {/* Cards */}
        <View style={styles.branco}>
          {showIntolerancia && (
            <>
              {/* cards veganos */}
              {/* Quiche */}
              <TouchableOpacity
                style={styles.card}
                onPress={() => nav.navigate("paoq_lactose")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_restricao.png")}
                  style={styles.backgroundImage}
                />
                <Text style={styles.texto}>Pão de queijo</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/20450299/pexels-photo-20450299/free-photo-of-pao-cozimento-fornada-assando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>

              {/* Hamburguer */}
              <TouchableOpacity
                style={styles.cardD}
                onPress={() => nav.navigate("brigadeiro_lactose")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_restricao.png")}
                  style={styles.backgroundImage}
                />
                <Text style={styles.texto}>Brigadeiro</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/7428532/pexels-photo-7428532.jpeg?auto=compress&cs=tinysrgb&w=600",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>

              {/* Bolinha de queijo */}
              <TouchableOpacity
                style={styles.card}
                onPress={() => nav.navigate("cookie_lactose")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_restricao.png")}
                  style={styles.backgroundImage}
                />
                <Text style={styles.texto}>Cookies</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/4110541/pexels-photo-4110541.jpeg?auto=compress&cs=tinysrgb&w=600",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>

              {/* Torta */}
              <TouchableOpacity
                style={styles.cardD}
                onPress={() => nav.navigate("churros_lactose")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_restricao.png")}
                  style={styles.backgroundImage}
                />
                <Text style={styles.texto}>Churros</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/10455843/pexels-photo-10455843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
            </>
          )}

          {showGluten && (
            <>
              {/* Vegetarianos */}
              <TouchableOpacity
                style={styles.card}
                onPress={() => nav.navigate("brownie_gluten")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_restricao.png")}
                  style={styles.backgroundImage}
                />
                <Text style={styles.texto}>Brownie de chocolate</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=600",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cardD}
                onPress={() => nav.navigate("pastel_gluten")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_restricao.png")}
                  style={styles.backgroundImage}
                />
                <Text style={styles.texto}>massa de Pastel</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/10970323/pexels-photo-10970323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.card}
                onPress={() => nav.navigate("pizza_gluten")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_restricao.png")}
                  style={styles.backgroundImage}
                />
                <Text style={styles.texto}>Pizza</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cardD}
                onPress={() => nav.navigate("sanduiche_gluten")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_restricao.png")}
                  style={styles.backgroundImage}
                />
                <Text style={styles.texto}>Sanduíche</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/6608664/pexels-photo-6608664.jpeg?auto=compress&cs=tinysrgb&w=600",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
            </>
          )}

          {showDiabete && (
            <>
              {/* Sucos */}
              <TouchableOpacity
                style={styles.card}
                onPress={() => nav.navigate("cheesecake_diabetes")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_restricao.png")}
                  style={styles.backgroundImage}
                />
                <Text style={styles.texto}>Cheesecake</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/3185509/pexels-photo-3185509.png?auto=compress&cs=tinysrgb&w=600",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cardD}
                onPress={() => nav.navigate("palitos_diabetes")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_restricao.png")}
                  style={styles.backgroundImage}
                />
                <Text style={styles.texto}>Palitos de cenoura</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/6546431/pexels-photo-6546431.jpeg?auto=compress&cs=tinysrgb&w=600",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.card}
                onPress={() => nav.navigate("quibe_diabetes")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_restricao.png")}
                  style={styles.backgroundImage}
                />
                <Text style={styles.texto}>Quibe de vegetais</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/6262222/pexels-photo-6262222.jpeg?auto=compress&cs=tinysrgb&w=600",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cardD}
                onPress={() => nav.navigate("salmao_diabetes")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_restricao.png")}
                  style={styles.backgroundImage}
                />
                <Text style={styles.texto}>Salmão grelhado</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg?auto=compress&cs=tinysrgb&w=600",
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
    top: 10,
  },
  seta: {
    top: 10,
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
    margin: 10,
  },

  pressable: {
    width: 180,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  activeToggle: { backgroundColor: "#86C0FF" },
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
    width: 100,
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
