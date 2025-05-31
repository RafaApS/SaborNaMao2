import { Feather } from "@expo/vector-icons";
import type { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Natal() {
    const nav = useNavigation<NavigationProp<any>>();

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => nav.navigate("home")}>
                        <Feather name="chevron-left" size={24} color="#000" />
                    </TouchableOpacity>

                    <Text style={styles.paragraph}>Receitas Natalinas</Text>
                </View>
                <View style={styles.branco}>
                    <View>
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => nav.navigate('peru')}
                        >
                            <ImageBackground
                                source={require("../assets/images/fundo_receita_natal.png")} // Imagem de fundo
                                style={styles.backgroundImage}
                                resizeMode="cover"
                            ></ImageBackground>
                            <Text style={styles.texto}>Peru à Brasileira</Text>
                            <Image
                                source={{
                                    uri: "https://images.pexels.com/photos/14560071/pexels-photo-14560071.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
                                }}
                                style={styles.cardImage}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.cardD}
                            onPress={() => nav.navigate('arroz_natalino')}
                        >
                            <ImageBackground
                                source={require("../assets/images/fundo_receita_natal.png")} // Imagem de fundo
                                style={styles.backgroundImage}
                                resizeMode="cover"
                            ></ImageBackground>
                            <Text style={styles.texto}>Arroz Natalino</Text>
                            <Image
                                source={{
                                    uri: 'https://images.pexels.com/photos/3727196/pexels-photo-3727196.jpeg'
                                }}
                                style={styles.cardImage}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => nav.navigate('bolinho_arroz')}
                        >
                            <ImageBackground
                                source={require("../assets/images/fundo_receita_natal.png")} // Imagem de fundo
                                style={styles.backgroundImage}
                                resizeMode="cover"
                            ></ImageBackground>
                            <Text style={styles.texto}>Bolinho de Arroz</Text>
                            <Image
                                source={{
                                    uri: "https://images.pexels.com/photos/29286763/pexels-photo-29286763/free-photo-of-delicioso-arancini-frito-com-molho-cremoso.jpeg?auto=compress&cs=tinysrgb&w=600",
                                }}
                                style={styles.cardImage}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.cardD}
                            onPress={() => nav.navigate('farofa_natal')}
                        >
                            <ImageBackground
                                source={require("../assets/images/fundo_receita_natal.png")} // Imagem de fundo
                                style={styles.backgroundImage}
                                resizeMode="cover"
                            ></ImageBackground>
                            <Text style={styles.texto}>
                               Farofa de Ovo
                            </Text>
                            <Image
                                source={{
                                    uri: "https://images.pexels.com/photos/15584737/pexels-photo-15584737/free-photo-of-comida-alimento-refeicao-cafe-da-manha.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                                }}
                                style={styles.cardImage}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "#ececec",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 40,
        paddingHorizontal: 10,
        gap: 12, // espaço entre a seta e o texto
    },

    paragraph: {
        fontSize: 24,
        color: "#242424",
        textTransform: "uppercase",
    },

    branco: {
        backgroundColor: "white",
        position: "relative",
        zIndex: -1,
        flex: 1,
        minHeight: 300, // 👈 adicione isso ou outro valor
        width: "100%",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 100,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        top: 50,
        padding: 15,
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
    texto: {
        position: "absolute",
        top: 20,
        left: 20,
        color: "#000",
        fontSize: 14,
        textTransform: "uppercase",
        zIndex: 2,
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

    cardImage: {
        width: 80,
        height: 80,
        position: "absolute",
        bottom: 8,
        right: 8,
        zIndex: 2,
        borderRadius: 40,
    },
});
