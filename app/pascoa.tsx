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


export default function Pascoa() {
    const nav = useNavigation<NavigationProp<any>>();



    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => nav.navigate('home')}>
                        <Feather name="chevron-left" size={30} color="#242424" />
                    </TouchableOpacity>


                    <Text style={styles.paragraph}>Receitas de Páscoa</Text>
                </View>

                <View style={styles.branco}>
                    <View>

                        <TouchableOpacity style={styles.card} onPress={() => nav.navigate('bacalhau')}>
                            <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../assets/images/fundo_receita_pascoa.png')}> </ImageBackground>
                            <Text style={styles.texto}>Bacalhau</Text>
                            <Image source={{ uri: 'https://images.pexels.com/photos/12918197/pexels-photo-12918197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} style={styles.cardImage} />

                        </TouchableOpacity>

                    </View>

                    <View>
                        <TouchableOpacity style={styles.cardD} onPress={() => nav.navigate('ovo_chocolate')}>
                            <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../assets/images/fundo_receita_pascoa.png')}> </ImageBackground>

                            <Text style={styles.texto}>Ovo de chocolate</Text>
                            <Image source={{ uri: 'https://images.pexels.com/photos/6625284/pexels-photo-6625284.jpeg?auto=compress&cs=tinysrgb&w=600' }} style={styles.cardImage} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.card} onPress={() => nav.navigate('bobo')}>
                            <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../assets/images/fundo_receita_pascoa.png')}> </ImageBackground>
                            <Text style={styles.texto}>Bobó de Camarão</Text>
                            <Image source={{ uri: 'https://images.pexels.com/photos/24246337/pexels-photo-24246337/free-photo-of-refeicao-comida-tigela-bowl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} style={styles.cardImage} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.cardD} onPress={() => nav.navigate('coelho_choco')}>
                            <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../assets/images/fundo_receita_pascoa.png')}> </ImageBackground>
                            <Text style={styles.texto}>Coelho de Chocolate</Text>
                            <Image source={{ uri: 'https://images.openai.com/thumbnails/bd122e272f8670bbe7c4da7ae5305596.jpeg' }} style={styles.cardImage} />
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
