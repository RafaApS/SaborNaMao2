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
    item1: "1 ovo",
    item2: "1 pitada de sal",
    item3: "1/2 xícara de açúcar",
    item4: "1 e 1/2 xícara de farinha de trigo",
    item5: "1 colher (chá) de essência de baunilha",
    item6: "100g de manteiga (em temperatura ambiente)",
    item7: "Geleia vermelha (morango ou framboesa, para o 'sangue')",
    item8: "20 amêndoas inteiras (ou lascas de amêndoa para as unhas)",
    item9:
      "Corante alimentício verde ou roxo (opcional, para deixar os dedos mais 'podres')",
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
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            source={require("../assets/images/fundo_dedo.png")}
            style={styles.decorativeImage}
            resizeMode="contain"
          />
          <View style={styles.tituloContainer}>
            <TouchableOpacity onPress={() => nav.navigate("hallow")}>
              <Feather name="chevron-left" size={28} color="#000" />
            </TouchableOpacity>
            <Text style={styles.paragraph}>Dedos de Zumbi de Biscoito</Text>
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
              Em uma tigela, misture a manteiga e o açúcar até formar um creme.
              Adicione o ovo, a essência de baunilha, o sal e misture bem.
              Acrescente a farinha aos poucos até formar uma massa lisa. Se
              quiser, adicione algumas gotas de corante verde ou roxo para dar o
              tom de "zumbi".
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck("step2")}>
            <Text style={styles.topicos}>
              {checkedItems.step2 ? (
                <Text style={styles.check}>✓</Text>
              ) : (
                <Text style={styles.bolinha}>⚪ </Text>
              )}{" "}
              Pegue pequenas porções de massa, enrole como se fossem palitinhos
              e modele em formato de dedo. Use uma faca para marcar as “dobras”
              das articulações. No topo de cada dedo, pressione uma amêndoa como
              se fosse a unha.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck("step3")}>
            <Text style={styles.topicos}>
              {checkedItems.step3 ? (
                <Text style={styles.check}>✓</Text>
              ) : (
                <Text style={styles.bolinha}>⚪ </Text>
              )}{" "}
              Coloque os dedos em uma assadeira forrada com papel manteiga. Leve
              ao forno preaquecido a 180 °C por cerca de 15 a 20 minutos ou até
              ficarem levemente dourados.
            </Text>
          </TouchableOpacity>{" "}
          <TouchableOpacity onPress={() => toggleCheck("step4")}>
            <Text style={styles.topicos}>
              {checkedItems.step4 ? (
                <Text style={styles.check}>✓</Text>
              ) : (
                <Text style={styles.bolinha}>⚪ </Text>
              )}{" "}
              Depois de assados, retire as amêndoas com cuidado, coloque um
              pouco de geleia no local e recoloque a amêndoa por cima, deixando
              o “sangue” escorrer. Se quiser, passe geleia também na base dos
              dedos, como se estivessem "cortados".
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>{" "}
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
    width: 250,
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
    left: 135,
    top: 0,
    right: 0,
    width: 350,
    height: 500,
    zIndex: 0,
  },
});
