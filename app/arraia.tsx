import { Feather } from '@expo/vector-icons';
import type { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';


export default function Arraia() {
    const nav = useNavigation<NavigationProp<any>>();



    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => nav.navigate('home')}>
                        <Feather name="chevron-left" size={30} color="#242424" />
                    </TouchableOpacity>


                    <Text style={styles.paragraph}>Receitas de Festa Junina</Text>
                </View>

                <View style={styles.branco}>


                    <View>

                        <TouchableOpacity style={styles.card} onPress={() => nav.navigate('maca_amor')}>
                            <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../assets/images/fundo_receita_arraia.png')}> </ImageBackground>
                            <Text style={styles.texto}>Maçã do Amor</Text>
                                <Image   source={{ uri: 'https://images.pexels.com/photos/1761426/pexels-photo-1761426.jpeg?auto=compress&cs=tinysrgb&w=600' }} style={styles.cardImage} />

                        </TouchableOpacity>

                    </View>

                    <View>
                        <TouchableOpacity style={styles.cardD} onPress={() => nav.navigate('pamonha_salgada')}>
                            <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../assets/images/fundo_receita_arraia.png')}> </ImageBackground>

                            <Text style={styles.texto}>Pamonha Salgada</Text>
                            <Image source={{uri: 'https://images.pexels.com/photos/24960982/pexels-photo-24960982/free-photo-of-close-up-de-pamonha-em-uma-barraca-de-comida.jpeg?auto=compress&cs=tinysrgb&w=600'}} style={styles.cardImage} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.card} onPress={() => nav.navigate('pacoca')}>
                            <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../assets/images/fundo_receita_arraia.png')}> </ImageBackground>
                            <Text style={styles.texto}>Paçoca</Text>
                            <Image source={{uri: 'https://images.pexels.com/photos/13111782/pexels-photo-13111782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}} style={styles.cardImage} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.cardD} onPress={() => nav.navigate('milho_cozido')}>
                            <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../assets/images/fundo_receita_arraia.png')}> </ImageBackground>
                            <Text style={styles.texto}>Milho Cozido</Text>
                            <Image source={{uri: 'https://images.pexels.com/photos/12987562/pexels-photo-12987562.jpeg?auto=compress&cs=tinysrgb&w=600'}} style={styles.cardImage} />
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        </View >
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
