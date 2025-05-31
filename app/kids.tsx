import { Feather } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type RootStackParamList = {
  home: undefined;
  picole: undefined;
  bolochoco: undefined;
  brigadeiro: undefined;
  raspadinha: undefined;
  sopa: undefined;
  papinha: undefined;
  panqueca_maca: undefined;
  pao: undefined;
};

export default function ComidasInfantis() {
  const nav = useNavigation<NavigationProp<RootStackParamList>>();
  const [showMiniChef, setShowMiniChef] = useState(true);
  const [showBebes, setShowBebes] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => nav.navigate("home")}>
            <Feather name="chevron-left" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.paragraph}>Comidas Infantis</Text>
        </View>

        <View style={styles.toggleRow}>
          <Pressable
            style={[
              styles.pressable,
              showMiniChef
                ? { backgroundColor: "#7D4DFF" }
                : { backgroundColor: "#ccc" },
            ]}
            onPress={() => {
              setShowMiniChef(true);
              setShowBebes(false);
            }}
          >
            <Text style={styles.toggleText}>Mini Chefs</Text>
          </Pressable>

          <Pressable
            style={[
              styles.pressable,
              showBebes
                ? { backgroundColor: "#7D4DFF" }
                : { backgroundColor: "#ccc" },
            ]}
            onPress={() => {
              setShowBebes(true);
              setShowMiniChef(false);
            }}
          >
            <Text style={styles.toggleText}>Introdução Alimentar</Text>
          </Pressable>
        </View>
        <View style={styles.branco}>
          {showMiniChef && (
            <>
              <TouchableOpacity
                style={styles.card}
                onPress={() => nav.navigate("picole")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_mini_chefe.png")}
                  style={styles.backgroundImage}
                  resizeMode="cover"
                />
                <Text style={styles.texto}>Picolé de Iogurte</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/461189/pexels-photo-461189.jpeg?auto=compress&cs=tinysrgb&w=600",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cardD}
                onPress={() => nav.navigate("bolochoco")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_mini_chefe.png")}
                  style={styles.backgroundImage}
                  resizeMode="cover"
                />
                <Text style={styles.texto}>Bolo de Chocolate</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/4110007/pexels-photo-4110007.jpeg?auto=compress&cs=tinysrgb&w=600",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.card}
                onPress={() => nav.navigate("brigadeiro")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_mini_chefe.png")}
                  style={styles.backgroundImage}
                  resizeMode="cover"
                />
                <Text style={styles.texto}>Brigadeiro</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/7428532/pexels-photo-7428532.jpeg?auto=compress&cs=tinysrgb&w=600",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cardD}
                onPress={() => nav.navigate("raspadinha")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_mini_chefe.png")}
                  style={styles.backgroundImage}
                  resizeMode="cover"
                />
                <Text style={styles.texto}>Raspadinha de melancia</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/11449196/pexels-photo-11449196.jpeg?auto=compress&cs=tinysrgb&w=600",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
            </>
          )}

          {showBebes && (
            <>
              <TouchableOpacity
                style={styles.card}
                onPress={() => nav.navigate("sopa")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_mini_chefe.png")}
                  style={styles.backgroundImage}
                  resizeMode="cover"
                />
                <Text style={styles.texto}>Sopa de Legumes</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/6120511/pexels-photo-6120511.jpeg?auto=compress&cs=tinysrgb&w=600",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cardD}
                onPress={() => nav.navigate("papinha")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_mini_chefe.png")}
                  style={styles.backgroundImage}
                  resizeMode="cover"
                />
                <Text style={styles.texto}>Papinha Natural</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/6072214/pexels-photo-6072214.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.card}
                onPress={() => nav.navigate("panqueca_maca")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_mini_chefe.png")}
                  style={styles.backgroundImage}
                  resizeMode="cover"
                />
                <Text style={styles.texto}>Panqueca de Maçã</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/5419182/pexels-photo-5419182.jpeg?auto=compress&cs=tinysrgb&w=600",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cardD}
                onPress={() => nav.navigate("pao")}
              >
                <ImageBackground
                  source={require("../assets/images/fundo_mini_chefe.png")}
                  style={styles.backgroundImage}
                  resizeMode="cover"
                />
                <Text style={styles.texto}>Pão Caseiro</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/1118332/pexels-photo-1118332.jpeg?auto=compress&cs=tinysrgb&w=600",
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
            </>
          )}
        </View>
        {showBebes && (
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.toggleText}>
              Qual a importância da introdução alimentar?
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>

      <Modal transparent visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitulo}>
              Importância da Introdução Alimentar
            </Text>
            <Text style={styles.modalTexto}>
              A introdução alimentar é um momento fundamental para o
              desenvolvimento saudável do bebê. Ela ajuda a criar bons hábitos
              alimentares, promove o contato com diferentes sabores e texturas,
              e fornece os nutrientes necessários para complementar o leite
              materno. Esse processo também estimula a autonomia e fortalece o
              vínculo familiar durante as refeições.
            </Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.textoFechar}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ececec",
  },
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
  },
  branco: {
    backgroundColor: "white",
    flex: 1,
    width: "100%",
    borderTopRightRadius: 100,
    padding: 15,
    top: 50,
  },
  toggleRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 40,
    marginBottom: 10,
  },
  pressable: {
    width: 180,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  toggleText: {
    fontSize: 14,
    color: "#fff",
    textTransform: "uppercase",
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
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
  },
  texto: {
    position: "absolute",
    top: 20,
    left: 20,
    color: "#000",
    fontSize: 14,
    textTransform: "uppercase",
    zIndex: 2,
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
  modalTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalTexto: {
    fontSize: 16,
    marginBottom: 20,
  },
  textoFechar: {
    textAlign: "center",
    color: "#7D4DFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
