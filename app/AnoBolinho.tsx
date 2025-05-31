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
    item1: "2 ovos ",
    item2: "1/2 cebola picada bem fina",
    item3: "1 xícara de batata doce cozida e amassada (pode ser com casca)",
    item4: "2 dentes de alho picados ou amassados",
    item5: "300g de bacalhau dessalgado, cozido e desfiado",
    item6: "3 colheres (sopa) de farinha de trigo (pode precisar ajustar)",
    item7: "Salsinha e cebolinha picadas a gosto",
    item8: "Sal e pimenta-do-reino a gosto",
    item9: "Óleo para fritar",
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
            source={require("../assets/images/fundo_bolinho.png")}
            style={styles.decorativeImage}
            resizeMode="contain"
          />
          <View style={styles.tituloContainer}>
            <TouchableOpacity onPress={() => nav.navigate("ano_novo")}>
              <Feather name="chevron-left" size={28} color="#000" />
            </TouchableOpacity>
            <Text style={styles.paragraph}>
              Bolinho de Bacalhau com Batata Doce
            </Text>
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
              Misture o bacalhau desfiado com a batata doce amassada, a cebola,
              alho, ovos, salsinha, cebolinha, sal e pimenta. Vá adicionando a
              farinha aos poucos até formar uma massa firme e que dê para moldar
              bolinhos.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck("step2")}>
            <Text style={styles.topicos}>
              {checkedItems.step2 ? (
                <Text style={styles.check}>✓</Text>
              ) : (
                <Text style={styles.bolinha}>⚪ </Text>
              )}{" "}
              Com as mãos untadas, faça bolinhas ou formatos alongados, conforme
              preferir.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck("step3")}>
            <Text style={styles.topicos}>
              {checkedItems.step3 ? (
                <Text style={styles.check}>✓</Text>
              ) : (
                <Text style={styles.bolinha}>⚪ </Text>
              )}{" "}
              Aqueça o óleo em temperatura média-alta. Frite os bolinhos até
              dourarem por igual, cerca de 4-5 minutos. Retire e coloque sobre
              papel absorvente.
            </Text>
          </TouchableOpacity>{" "}
          <TouchableOpacity onPress={() => toggleCheck("step4")}>
            <Text style={styles.topicos}>
              {checkedItems.step4 ? (
                <Text style={styles.check}>✓</Text>
              ) : (
                <Text style={styles.bolinha}>⚪ </Text>
              )}{" "}
              Sirva quente, acompanhado de molho tártaro, maionese temperada ou
              limão.
            </Text>
          </TouchableOpacity>{" "}
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
    width: 300,
  },
  paragraph: {
    fontSize: 22,
    color: "#242424",
    textTransform: "uppercase",
    marginLeft: 5,
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
