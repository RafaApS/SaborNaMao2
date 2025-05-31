import { Feather } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
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

export default function CheesecakeGoiaba() {
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
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
    step7: false,
    step8: false,
  });

  const itemsMap: { [key: string]: string } = {
    item1: "120 g de biscoito diet \ntriturado",
    item2: "50 g de pasta de amendoim \nintegral (sem açúcar)",
    item3: "4 ovos",
    item4: "400 g de iogurte natural desnatado",
    item5: "375 g de ricota esfarelada",
    item6: "25 g de adoçante culinário em pó",
    item7: "5 ml de essência de baunilha",
    item8: "5 ml de suco de limão-taiti",
    item9: "280 g de geleia de goiaba diet",
  };

  const stepsMap: { [key: string]: string } = {
    step1:
      "Prepare a base da torta no processador, batendo bem o biscoito até formar uma farofa. Adicione a pasta de amendoim e bata mais um pouco para misturar.",
    step2:
      "Transfira para uma forma de fundo removível de 20cm de diâmetro e forre apenas o fundo, pressionando bem.",
    step3:
      "Tempere os vegetais com o azeite, o sal e a pimenta-do-reino e espalhe por cima o queijo parmesão ralado, misturando bem os temperos.",
    step4:
      "Para o recheio, coloque em um liquidificador os ovos, o iogurte natural desnatado, a ricota esfarelada, o adoçante, a essência de baunilha e o suco de limão-taiti e bata até formar um creme.",
    step5:
      "Despeje o creme delicadamente sobre a base de biscoito e leve ao forno preaquecido a 150°C por cerca de 45min, ou até ficar firme.",
    step6:
      "Retire do forno, deixe esfriar e reserve na geladeira por no mínimo 2h.",
    step7:
      "Ao servir, remova o aro da forma, transfira a cheesecake para um prato e despeje sobre ela a geleia de goiaba diet. Se preferir outro sabor de geleia, basta substituir.",
    step8:
      "O doce pronto pode ser armazenado em um pote fechado na geladeira por até 3 dias ou no freezer por até 30 dias. Neste caso, deixe descongelar no refrigerador antes de consumir.",
  };

  const toggleCheck = (item: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={styles.container}>
          {/* Imagem decorativa */}
          <Image
            source={require("../assets/images/fundo_cheesecake.png")} // altere para sua imagem
            style={styles.decorativeImage}
            resizeMode="contain"
          />

          <View style={styles.tituloContainer}>
            <TouchableOpacity onPress={() => nav.navigate("restricoes")}>
              <Feather name="chevron-left" size={28} color="#000" />
            </TouchableOpacity>
            <Text style={styles.paragraph}>CHEESECAKE DE GOIABA</Text>
          </View>

          <Text style={styles.ingredientes}>INGREDIENTES</Text>
          <View style={styles.ingredientesContainer}>
            <View>
              {["item1", "item2"].map((key) => (
                <TouchableOpacity key={key} onPress={() => toggleCheck(key)}>
                  <Text style={styles.topicos}>
                    {checkedItems[key] ? (
                      <Text style={styles.check}>✓ </Text>
                    ) : (
                      <Text style={styles.bolinha}>⚪ </Text>
                    )}
                    {itemsMap[key]}
                  </Text>
                </TouchableOpacity>
              ))}
              {["item3", "item4", "item5", "item6", "item7", "item8"].map(
                (key) => (
                  <TouchableOpacity key={key} onPress={() => toggleCheck(key)}>
                    <Text style={styles.topicos}>
                      {checkedItems[key] ? (
                        <Text style={styles.check}>✓ </Text>
                      ) : (
                        <Text style={styles.bolinha}>⚪ </Text>
                      )}
                      {itemsMap[key]}
                    </Text>
                  </TouchableOpacity>
                )
              )}
              <TouchableOpacity onPress={() => toggleCheck("item9")}>
                <Text style={styles.topicos}>
                  {checkedItems["item9"] ? (
                    <Text style={styles.check}>✓ </Text>
                  ) : (
                    <Text style={styles.bolinha}>⚪ </Text>
                  )}
                  {itemsMap["item9"]}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.ingredientes}>MODO DE PREPARO</Text>
          {Object.entries(stepsMap).map(([key, step], idx) => (
            <TouchableOpacity key={key} onPress={() => toggleCheck(key)}>
              <Text style={styles.topicos}>
                {checkedItems[key] ? (
                  <Text style={styles.check}>✓ </Text>
                ) : (
                  <Text style={styles.bolinha}>⚪ </Text>
                )}
                {step}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.botoesContainer}>
        <TouchableOpacity
          style={styles.botaoVerde}
          onPress={() => Alert.alert("Forma correta descarte")}
        >
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
          onPress={() => Alert.alert("Função em desenvolvimento")}
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
    backgroundColor: "#ECECEC",
    width: "100%",
    paddingHorizontal: 10,
    paddingBottom: 40,
  },
  tituloContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 90,
    marginLeft: 10,
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 22,
    color: "#242424",
    textTransform: "uppercase",
    marginLeft: 5,
    width: 240,
  },
  ingredientes: {
    marginTop: 40,
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
  numero: {
    fontWeight: "bold",
    color: "#242424",
  },
  check: {
    color: "#32CD32",
    fontSize: 20,
  },
  bolinha: {
    fontSize: 16,
  },
  botoesContainer: {
    flexDirection: "row",
    width: "100%",
    height: 50,
  },
  botaoVerde: {
    flex: 1,
    backgroundColor: "#009B4D",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  botaoCinza: {
    flex: 1,
    backgroundColor: "#2F4B54",
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
