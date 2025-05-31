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
    item1: "12 tomates-cereja",
    item2: "Azeite de oliva extra virgem",
    item3: "Sal e pimenta-do-reino a gosto",
    item4: "Morangos inteiros (sem folhas)",
    item5: "Vinagre balsâmico (opcional)",
    item6: "Palitos de dente ou palitos de bambu",
    item7: "Folhas de manjericão frescas (1 por palito)",
    item8: "12 bolinhas de mussarela de búfala (ou cubos pequenos)",
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
            source={require("../assets/images/fundo_caprese.png")}
            style={styles.decorativeImage}
            resizeMode="contain"
          />
          <View style={styles.tituloContainer}>
            <TouchableOpacity onPress={() => nav.navigate("aperitivos")}>
              <Feather name="chevron-left" size={28} color="#000" />
            </TouchableOpacity>
            <Text style={styles.paragraph}>Caprese no Palito </Text>
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
              Em cada palito, espete um tomate-cereja, uma folha de manjericão
              dobrada e uma bolinha de mussarela.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck("step2")}>
            <Text style={styles.topicos}>
              {checkedItems.step2 ? (
                <Text style={styles.check}>✓</Text>
              ) : (
                <Text style={styles.bolinha}>⚪ </Text>
              )}{" "}
              Disponha os palitos em um prato ou tábua. Regue com um fio de
              azeite de oliva, salpique sal e pimenta a gosto. Se quiser,
              adicione algumas gotas de vinagre balsâmico ou reduza um pouco do
              vinagre balsâmico para fazer uma calda e regar por cima.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCheck("step3")}>
            <Text style={styles.topicos}>
              {checkedItems.step3 ? (
                <Text style={styles.check}>✓</Text>
              ) : (
                <Text style={styles.bolinha}>⚪ </Text>
              )}{" "}
              Sirva imediatamente ou mantenha refrigerado até a hora de servir.
            </Text>
          </TouchableOpacity>{" "}
          <TouchableOpacity onPress={() => toggleCheck("step4")}>
            <Text style={styles.topicos}>
              {checkedItems.step4 ? (
                <Text style={styles.check}>✓</Text>
              ) : (
                <Text style={styles.bolinha}>⚪ </Text>
              )}{" "}
              Pode acompanhar uma bola de sorvete, iogurte gelado ou ser servido
              puro como sobremesa.
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
    left: 135,
    top: 0,
    right: 0,
    width: 350,
    height: 500,
    zIndex: 0,
  },
});
