import { Feather } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type CheckedItems = {
  [key: string]: boolean;
};

export default function App() {
  const nav = useNavigation<NavigationProp<any>>();

  const [checkedItems, setCheckedItems] = useState<CheckedItems>({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
    item6: false,
    item7: false,
    item8: false,
    item9: false,
    item10: false,
    item11: false,
    item12: false,
    item13: false,
    item14: false,
    item15: false,
    item16: false,
    item17: false,
    item18: false,
    item19: false,
    item20: false,
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
    step7: false,
    step8: false,
    step9: false,
    step10: false,
    step11: false,
  });

  const itemsMap: { [key: string]: string } = {
    item1: "1 xícara de leite",
    item2: "Sal e pimenta a gosto",
    item3: "1 colher (sopa) de manteiga",
    item4: "1 colher (sopa) de farinha de trigo",
    item5: "1 pacote de nachos prontos (150g a 200g)",
    item6:
      "1 xícara de queijo cheddar ralado (ou processado tipo cheddar cremoso)",
    item7:
      "(Opcional) Pimenta-do-reino, noz-moscada ou páprica para sabor extra",
  };

  const toggleCheck = (item: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const salvarListaDeCompras = async () => {
    const naoSelecionados = Object.keys(itemsMap)
      .filter((key) => !checkedItems[key])
      .map((key) => `- ${itemsMap[key]}`)
      .join("\n");

    if (!naoSelecionados) {
      Alert.alert("Tudo certo!", "Todos os ingredientes foram marcados.");
      return;
    }

    const fileUri = FileSystem.documentDirectory + "lista_de_compras.txt";

    try {
      await FileSystem.writeAsStringAsync(fileUri, naoSelecionados, {
        encoding: FileSystem.EncodingType.UTF8,
      });

      const canShare = await Sharing.isAvailableAsync();
      if (canShare) {
        await Sharing.shareAsync(fileUri);
      } else {
        Alert.alert("Arquivo salvo", `Lista salva em:\n${fileUri}`);
      }
    } catch (err) {
      Alert.alert("Erro ao salvar", "Não foi possível criar o arquivo.");
      console.error(err);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/teste.jpg")}
          style={styles.decorativeImage}
          resizeMode="contain"
        />
        <View style={styles.tituloContainer}>
          <TouchableOpacity onPress={() => nav.navigate("snack")}>
            <Feather name="chevron-left" size={28} color="#000" />
          </TouchableOpacity>
          <Text style={styles.paragraph}>Nacho com queijo</Text>
        </View>
        <Text style={styles.ingredientes}>INGREDIENTES</Text>
        <View style={styles.ingredientesContainer}>
          <View>
            {Object.entries(itemsMap).map(([key, label]) => (
              <TouchableOpacity key={key} onPress={() => toggleCheck(key)}>
                <Text style={styles.topicos}>
                  {checkedItems[key] ? (
                    <Text style={styles.check}>✓</Text>
                  ) : (
                    <Text style={styles.bolinha}>⚪ </Text>
                  )}
                  {label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <Text style={styles.ingredientes}>MODO DE PREPARO</Text>
        <TouchableOpacity onPress={() => toggleCheck("step1")}>
          <Text style={styles.topicos}>
            {checkedItems.step1 ? (
              <Text style={styles.check}>✓</Text>
            ) : (
              <Text style={styles.bolinha}>⚪ </Text>
            )}{" "}
            Derreta a manteiga em uma panela em fogo médio. Adicione a farinha e
            mexa por 1 minuto para cozinhar (formando um "roux").
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck("step2")}>
          <Text style={styles.topicos}>
            {checkedItems.step2 ? (
              <Text style={styles.check}>✓</Text>
            ) : (
              <Text style={styles.bolinha}>⚪ </Text>
            )}{" "}
            Aos poucos, adicione o leite, mexendo sempre até virar um creme
            liso. Acrescente o queijo ralado ou processado e mexa até derreter
            completamente. Ajuste sal e pimenta. Se quiser mais intenso, coloque
            um toque de páprica ou noz-moscada.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck("step3")}>
          <Text style={styles.topicos}>
            {checkedItems.step3 ? (
              <Text style={styles.check}>✓</Text>
            ) : (
              <Text style={styles.bolinha}>⚪ </Text>
            )}{" "}
            Coloque os nachos em um prato ou travessa. Sirva com o molho de
            queijo em uma tigelinha ao lado ou despeje por cima dos nachos.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCheck("step4")}>
          <Text style={styles.topicos}>
            {checkedItems.step4 ? (
              <Text style={styles.check}>✓</Text>
            ) : (
              <Text style={styles.bolinha}>⚪ </Text>
            )}{" "}
            Finalize com jalapeños fatiados, tomate picado, guacamole, sour
            cream ou carne moída refogada, se quiser algo mais completo.
          </Text>
        </TouchableOpacity>
        <View style={styles.botoesContainer}>
          <TouchableOpacity style={styles.botaoVerde}>
            <Feather
              name="refresh-cw"
              size={20}
              color="#fff"
              style={styles.iconeBotao}
            />
            <Text style={styles.textoBotao}>Forma correta descarte</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botaoCinza}
            onPress={salvarListaDeCompras}
          >
            <Feather
              name="download"
              size={20}
              color="#FFCC00"
              style={styles.iconeBotao}
            />
            <Text style={styles.textoBotao}>Baixar lista de compra</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "50%",
    backgroundColor: "#ECECEC",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  tituloContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 90,
    marginLeft: 10,
  },
  paragraph: {
    fontSize: 22,
    color: "#242424",
    textTransform: "uppercase",
    marginLeft: 5,
    width: 240,
  },

  ingredientes: {
    marginTop: 100,
    fontSize: 18,
    marginBottom: 20,
    paddingVertical: 5,
    left: 44,
  },
  ingredientesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topicos: {
    marginBottom: 10,
    lineHeight: 24,
    left: 44,
    width: 290,
  },
  check: {
    color: "#32CD32",
    fontSize: 20,
    marginRight: 5,
  },
  bolinha: {
    fontSize: 16,
  },
  seta: {
    top: 55,
  },

  botoesContainer: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    marginTop: 40,
  },

  botaoVerde: {
    flex: 1,
    backgroundColor: "#009B4D", // verde da imagem
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  botaoCinza: {
    flex: 1,
    backgroundColor: "#2F4B54", // cinza azulado da imagem
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  iconeBotao: {
    marginRight: 10,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 16,
  },

  decorativeImage: {
    position: "absolute",
    left: 102,
    top: 0,
    right: 0,
    width: 350, // ajuste conforme necessário
    height: 420, // ajuste conforme necessário
    zIndex: 0,
  },
});
