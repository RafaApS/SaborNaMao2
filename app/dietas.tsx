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
    quiche: undefined;
    hamburguer: undefined;
    bolinha_queijo: undefined;
    torta_vegetariano: undefined;
    almondegas: undefined;
    falafel: undefined;
    nhoque: undefined;
    pao_queijo: undefined;
};

export default function ComidasInfantis() {
    const nav = useNavigation<NavigationProp<RootStackParamList>>();
    const [showVege, setShowVege] = useState(true);
    const [showVeg, setShowVeg] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalType, setModalType] = useState<"vegano" | "vegetariano" | null>(null);

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => nav.navigate("home")}>
                        <Feather name="chevron-left" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.paragraph}>Dietas</Text>
                </View>

                <View style={styles.toggleRow}>
                    <Pressable
                        style={[
                            styles.pressable,
                            showVege ? { backgroundColor: "#009E60" } : { backgroundColor: "#ccc" },
                        ]}
                        onPress={() => {
                            setShowVege(true);
                            setShowVeg(false);
                        }}
                    >
                        <Text style={styles.toggleText}>Veganas</Text>
                    </Pressable>

                    <Pressable
                        style={[
                            styles.pressable,
                            showVeg ? { backgroundColor: "#009E60" } : { backgroundColor: "#ccc" },
                        ]}
                        onPress={() => {
                            setShowVeg(true);
                            setShowVege(false);
                        }}
                    >
                        <Text style={styles.toggleText}>Vegetarianas</Text>
                    </Pressable>
                </View>
                <View style={styles.branco}>


                    {showVege && (
                        <>
                            <TouchableOpacity style={styles.card} onPress={() => nav.navigate("quiche")}>
                                <ImageBackground
                                    source={require("../assets/images/fundo_dietas.png")}
                                    style={styles.backgroundImage}
                                    resizeMode="cover"
                                />
                                <Text style={styles.texto}>Quiche</Text>
                                <Image
                                    source={{ uri: "https://images.pexels.com/photos/109836/pexels-photo-109836.jpeg?auto=compress&cs=tinysrgb&w=600" }}
                                    style={styles.cardImage}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.cardD} onPress={() => nav.navigate("hamburguer")}>
                                <ImageBackground
                                    source={require("../assets/images/fundo_dietas.png")}
                                    style={styles.backgroundImage}
                                    resizeMode="cover"
                                />
                                <Text style={styles.texto}>Hambúrguer</Text>
                                <Image
                                    source={{ uri: "https://images.pexels.com/photos/3607284/pexels-photo-3607284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
                                    style={styles.cardImage}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.card} onPress={() => nav.navigate("bolinha_queijo")}>
                                <ImageBackground
                                    source={require("../assets/images/fundo_dietas.png")}
                                    style={styles.backgroundImage}
                                    resizeMode="cover"
                                />
                                <Text style={styles.texto}>Bolinha de Queijo</Text>
                                <Image
                                    source={{ uri: "https://images.pexels.com/photos/17132215/pexels-photo-17132215/free-photo-of-comida-alimento-refeicao-restaurante.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
                                    style={styles.cardImage}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.cardD} onPress={() => nav.navigate("torta_vegetariano")}>
                                <ImageBackground
                                    source={require("../assets/images/fundo_dietas.png")}
                                    style={styles.backgroundImage}
                                    resizeMode="cover"
                                />
                                <Text style={styles.texto}>Torta de legumes</Text>
                                <Image
                                    source={{ uri: "https://images.pexels.com/photos/5852252/pexels-photo-5852252.jpeg?auto=compress&cs=tinysrgb&w=600" }}
                                    style={styles.cardImage}
                                />
                            </TouchableOpacity>
                        </>
                    )}

                    {showVeg && (
                        <>
                            <TouchableOpacity style={styles.card} onPress={() => nav.navigate("nhoque")}>
                                <ImageBackground
                                    source={require("../assets/images/fundo_dietas.png")}
                                    style={styles.backgroundImage}
                                    resizeMode="cover"
                                />
                                <Text style={styles.texto}>Nhoque</Text>
                                <Image
                                    source={{ uri: "https://images.pexels.com/photos/3590401/pexels-photo-3590401.jpeg?auto=compress&cs=tinysrgb&w=600" }}
                                    style={styles.cardImage}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.cardD} onPress={() => nav.navigate("pao_queijo")}>
                                <ImageBackground
                                    source={require("../assets/images/fundo_dietas.png")}
                                    style={styles.backgroundImage}
                                    resizeMode="cover"
                                />
                                <Text style={styles.texto}>Pão de queijo</Text>
                                <Image
                                    source={{ uri: "https://images.pexels.com/photos/20450299/pexels-photo-20450299/free-photo-of-pao-cozimento-fornada-assando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
                                    style={styles.cardImage}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.card} onPress={() => nav.navigate("almondegas")}>
                                <ImageBackground
                                    source={require("../assets/images/fundo_dietas.png")}
                                    style={styles.backgroundImage}
                                    resizeMode="cover"
                                />
                                <Text style={styles.texto}>Almondegas</Text>
                                <Image
                                    source={{ uri: "https://images.pexels.com/photos/16461745/pexels-photo-16461745/free-photo-of-copo-taca-caneca-jantar.jpeg?auto=compress&cs=tinysrgb&w=600" }}
                                    style={styles.cardImage}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.cardD} onPress={() => nav.navigate("falafel")}>
                                <ImageBackground
                                    source={require("../assets/images/fundo_dietas.png")}
                                    style={styles.backgroundImage}
                                    resizeMode="cover"
                                />
                                <Text style={styles.texto}>Falafel</Text>
                                <Image
                                    source={{ uri: "https://images.pexels.com/photos/6252726/pexels-photo-6252726.jpeg?auto=compress&cs=tinysrgb&w=600" }}
                                    style={styles.cardImage}
                                />
                            </TouchableOpacity>
                        </>
                    )}


                </View>
                {showVege && (
                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={() => {
                            setModalType("vegetariano");
                            setModalVisible(true);
                        }}
                    >
                        <Text style={styles.toggleText}>O que é ser vegano?</Text>
                    </TouchableOpacity>
                )}

                {showVeg && (
                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={() => {
                            setModalType("vegano");
                            setModalVisible(true);
                        }}
                    >
                        <Text style={styles.toggleText}>O que é ser vegetariano?</Text>
                    </TouchableOpacity>
                )}




            </ScrollView>

            <Modal transparent visible={modalVisible} animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitulo}>
                            {modalType === "vegano" ? "Vegetariano" : "Vegano"}
                        </Text>
                        <Text style={styles.modalTexto}>
                            {modalType === "vegano"
                                ? "O vegetarianismo é uma dieta baseada em alimentos de origem vegetal. Vegetarianos evitam carne, mas podem consumir ovos, leite e derivados, dependendo do tipo de vegetarianismo seguido. É uma escolha comum por razões éticas, ambientais ou de saúde."
                                : "O veganismo é um estilo de vida que busca excluir todas as formas de exploração e crueldade contra os animais, seja na alimentação, vestuário ou qualquer outra finalidade. Veganos não consomem carne, laticínios, ovos, mel e evitam produtos de origem animal em geral."}
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                setModalVisible(false);
                                setModalType(null);
                            }}
                        >
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
        backgroundColor: '#2F4B54',
        padding: 20,
        alignItems: 'center',
        marginHorizontal: 20,
        width: "100%",
        resizeMode: 'contain',
        marginLeft: 'auto',
        height: 60,
        marginTop: 50
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
