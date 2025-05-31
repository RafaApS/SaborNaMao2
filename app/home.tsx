import { NavigationProp, useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';

type RootStackParamList = {
    heranca: undefined;
    login: undefined;
    ceia_natal: undefined;
    pascoa: undefined;
    festa_junina: undefined;
    halloween: undefined;
    ano_novo: undefined;
    festa: undefined;
    bebidas: undefined;
    kids: undefined;
    dietas: undefined;
    restricoes: undefined;
    noite_garotas: undefined;
    morando_sozinho: undefined;
    almoco_domingo: undefined;
    vegano: undefined;
    vegetariano: undefined;
    aniversario: undefined;
    snack: undefined;
    aperitivos: undefined;
};

export default function App() {
    const nav = useNavigation<NavigationProp<RootStackParamList>>();

    const names = [
        'Mister Panela',
        'Mestre Cuca',
        'Chef de Plantão',
        'Mastre do Tempero',
        'Panela Quente',
        'Sabor Divino',
    ];
    const profilePics = [
        require('../assets/images/perfil1.png'),
        require('../assets/images/perfil2.png'),
        require('../assets/images/perfil3.png'),
        require('../assets/images/perfil4.png'),
        require('../assets/images/perfil5.png'),
        require('../assets/images/perfil6.png'),
    ];

    const getRandomProfile = () => {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomPic = profilePics[Math.floor(Math.random() * profilePics.length)];
        return { name: randomName, pic: randomPic };
    };

    const [userProfile, setUserProfile] = useState(getRandomProfile());

    const [toolTipVisible, setToolTipVisible] = useState(false);

    const items = [
        { title: 'Natal', image: require('../assets/images/natal.png'), route: 'natal' },
        { title: 'Páscoa', image: require('../assets/images/pascoa.png'), route: 'pascoa' },
        { title: 'Arraiá', image: require('../assets/images/junina.png'), route: 'arraia' },
        { title: 'Halloween', image: require('../assets/images/hallowen.png'), route: 'hallow' },
        { title: 'Ano Novo', image: require('../assets/images/anonovo.png'), route: 'ano_novo' },
        { title: 'Festas', image: require('../assets/images/festas.png'), route: 'niver' },
    ];
    const shadowColors = ['#852221', '#6750A4', '#633B48', '#229E0C', '#00127A', '#B02652'];

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.fundo}>
                    <Tooltip
                        isVisible={toolTipVisible}
                        content={
                            <View style={styles.tooltipContainer}>
                                <View style={styles.userInfo}>
                                    <View style={styles.userIcon}>
                                        <Image source={userProfile.pic} style={styles.userIconImage} />
                                    </View>
                                    <Text style={styles.userName}>{userProfile.name}</Text>
                                </View>

                                <TouchableOpacity
                                    style={styles.recipesButton}
                                    onPress={() => {
                                        nav.navigate('heranca');
                                    }}
                                >
                                    <Text style={styles.recipesText}>Minhas receitas</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.logoutButton}
                                    onPress={() => router.replace('/')}
                                >
                                    <Text style={styles.logoutText}>Sair</Text>
                                </TouchableOpacity>
                            </View>
                        }
                        placement="bottom"
                        onClose={() => setToolTipVisible(false)}
                        contentStyle={styles.tooltip}
                        backgroundColor="transparent"
                        showChildInTooltip={false}
                        arrowStyle={{
                            borderTopWidth: 13,
                            marginLeft: 165,
                            marginTop: 9,

                        }}
                    >
                        <TouchableOpacity style={styles.touchable} onPress={() => setToolTipVisible(true)}>
                            <Image source={require('../assets/images/perfil.png')} style={styles.perfil} />
                        </TouchableOpacity>
                    </Tooltip>

                    <View style={styles.categorias2}>

                        <TouchableOpacity
                            style={styles.categoria21}
                            onPress={() => {
                                nav.navigate('bebidas');
                            }}
                        >
                            <Text style={styles.texto22}>Tudo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.categoria2}
                            onPress={() => {
                                nav.navigate('kids');
                            }}
                        >
                            <Text style={styles.texto2}>Soboro</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.categoria2}
                            onPress={() => {
                                nav.navigate('dietas');
                            }}
                        >
                            <Text style={styles.texto2}>Econômica</Text>
                        </TouchableOpacity>
                    </View>

                    <Image source={require('../assets/images/home2.png')} style={styles.img_home}></Image>


                    <View style={styles.buttonRow}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {items.slice(currentIndex, currentIndex + 6).map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => {
                                        nav.navigate(item.route as keyof RootStackParamList);
                                    }}
                                    style={[
                                        styles.carouselItem,
                                        {
                                            shadowColor: shadowColors[index % shadowColors.length],
                                            shadowOffset: { width: 10, height: 10 },
                                            shadowOpacity: 0.8,
                                            shadowRadius: 1,
                                            elevation: 6,
                                        },
                                    ]}
                                >
                                    <Image style={styles.buttonImage} source={item.image} />
                                    <Text style={styles.texto}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>


                    <Text style={styles.texto_filtro}>Filtros:</Text>
                    <View style={styles.categorias}>
                        <TouchableOpacity
                            style={styles.categoria}
                            onPress={() => {
                                nav.navigate('bebidas');
                            }}
                        >
                            <Text style={styles.texto1}>Bebidas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.categoria}
                            onPress={() => {
                                nav.navigate('kids');
                            }}
                        >
                            <Text style={styles.texto1}>Kids</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.categoria}
                            onPress={() => {
                                nav.navigate('dietas');
                            }}
                        >
                            <Text style={styles.texto1}>Dieta</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.categoria}
                            onPress={() => {
                                nav.navigate('restricoes');
                            }}
                        >
                            <Text style={styles.texto1}>Restrições</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={styles.textoo}>Clique e conheça nossas receitas:</Text>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        marginTop: 40,
                        marginLeft: -5,
                    }}
                >
                    <View style={{ alignItems: 'center' }}>
                        <Pressable
                            style={{
                                width: 160,
                                height: 160,
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                marginBottom: 10,
                                shadowColor: '#1D192B',
                                shadowOffset: { width: 0, height: 10 },
                                shadowOpacity: 0.8,
                                shadowRadius: 0.3,
                                elevation: 26,
                                borderColor: '#565656',
                                borderWidth: 0.2,
                            }}
                            onPress={() => nav.navigate('snack')}
                        >
                            <Text style={styles.texto_snack}>Noite de Snacks</Text>
                            <Image style={styles.img_snacks} source={require('../assets/images/snacks.jpg')} />


                        </Pressable>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Pressable
                            style={{
                                width: 160,
                                height: 160,
                                backgroundColor: 'white',
                                borderRadius: 10,
                                marginBottom: 10,
                                shadowColor: '#14AE5C',
                                shadowOffset: { width: 0, height: 10 },
                                shadowOpacity: 0.8,
                                shadowRadius: 0.3,
                                elevation: 26,
                                borderColor: '#565656',
                                borderWidth: 0.2,
                            }}
                            onPress={() => nav.navigate('morando_sozinho')}
                        >
                            <Text style={styles.texto_sozinho}>Para comer sozinho</Text>
                            <Image style={styles.img_sozinho} source={require('../assets/images/morando_sozinho.png')} />
                        </Pressable>
                    </View>
                </View>

                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        marginLeft: -5,
                    }}
                >
                    <View style={{ alignItems: 'center' }}>
                        <Pressable
                            style={{
                                width: 160,
                                height: 160,
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                marginBottom: 10,
                                shadowColor: '#003856',
                                shadowOffset: { width: 0, height: 10 },
                                shadowOpacity: 0.8,
                                shadowRadius: 0.3,
                                elevation: 26,
                                borderColor: '#565656',
                                borderWidth: 0.2,
                            }}
                            onPress={() => nav.navigate('aperitivos')}
                        >
                            <Text style={styles.texto_aperitivos}>Aperitivos para festas</Text>
                            <Image style={styles.img_aperitivos} source={require('../assets/images/aperitivos.jpg')} />


                        </Pressable>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Pressable
                            style={{
                                width: 160,
                                height: 160,
                                backgroundColor: 'white',
                                borderRadius: 10,
                                marginBottom: 10,
                                shadowColor: '#B3261E',
                                shadowOffset: { width: 0, height: 10 },
                                shadowOpacity: 0.8,
                                shadowRadius: 0.3,
                                elevation: 26,
                                borderColor: '#565656',
                                borderWidth: 0.2,
                            }}
                            onPress={() => nav.navigate('almoco_domingo')}>
                            <Text style={styles.texto_almoco}>Almoços em família</Text>
                            <Image style={styles.img_almoco} source={require('../assets/images/almoco_domingo.jpg')} />


                        </Pressable>
                    </View>
                </View>


            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#ececec',

    },
    fundo: {
        padding: 20
    },

    row: {
        justifyContent: 'center',
        alignItems: 'center',

    },

    img_home: {
        width: 400,
        height: 200,
        top: 30,
        right: 20
    },

    quadrado_fundo: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: 190,
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        top: -100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 26,
    },


    perfil: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        marginLeft: 'auto',
        left: 5,
        top: 30

    },
    buttonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 1000,
        marginTop: 30
    },

    carouselItem: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        width: 100,
        height: 130,

    },
    buttonImage: {
        width: 90,
        height: 90,
        marginBottom: 5,
        backgroundColor: 'white',
        borderRadius: 7
    },

    texto: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 13,
        fontFamily: 'monospace'
    },

    categorias: {
        flexDirection: 'row', // Organiza os itens em linha
        flexWrap: 'wrap', // Permite que os itens quebrem linha
        justifyContent: 'space-between', // Distribui os itens em duas colunas
        margin: 10,
        top: 20,

    },

    categoria: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: '49%', // Cada item ocupa metade da linha (2 colunas)
        height: 55,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,

    },


    textoo: {
        fontSize: 17,
        marginLeft: 15,
        color: '#565656',
        top: 10,

    },
    texto_filtro: {
        fontSize: 17,
        marginTop: 15,
        color: '#565656',
        bottom: -10,

    },
    texto1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#565656',
        fontFamily: 'monospace'
    },
   
    //tooltip

    tooltip: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        width: 250,
        position: 'absolute',
        left: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 26,
        height: 165
    },
    tooltipContainer: {
        padding: 10,
        borderRadius: 5,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: 'hidden',
        marginRight: 10,
    },
    userIconImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    userName: {
        fontSize: 16,
        color: '#000'
    },
    recipesButton: {
        marginTop: 10,
        paddingVertical: 8,
        paddingHorizontal: 20,
        backgroundColor: '#F8D12D',
        borderRadius: 9,
        width: 190,
        height: 40
    },
    recipesText: {
        color: 'white',
        fontSize: 16,
    },
    logoutButton: {
        marginTop: 15,
        paddingVertical: 3,
        paddingHorizontal: 18,
        backgroundColor: 'grey',
        borderRadius: 7,
        width: 60,
        height: 25,
        left: 160
    },
    logoutText: {
        color: 'white',
        fontSize: 13,
    },
    touchable: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    texto2: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'monospace',

    },

    categoria2: {
        backgroundColor: '#cacaca',
        borderRadius: 15,
        width: 100,
        height: 35,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        margin: 5
    },

    categorias2: {
        flexDirection: 'row', // Organiza os itens em linha
        top: 50,
        left: 20

    },

    texto22: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'monospace',

    },
    categoria21: {
        backgroundColor: '#385A64',
        borderRadius: 15,
        width: 100,
        height: 35,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        margin: 5,
        fontFamily: 'monospace'
    },

    texto_sozinho: {
        color: '#6CC696',
        fontSize: 22,
        fontWeight: 'bold',
        left: 10,
        top: 10
    },
    texto_aperitivos: {
        color: '#003856',
        fontSize: 22,
        fontWeight: 'bold',
        left: 10,
        width: 140,
        top: 10
    },
    texto_snack: {
        color: '#868585',
        fontSize: 22,
        fontWeight: 'bold',
        left: 10,
        top: 10
    },
    texto_almoco: {
        color: '#CA7671',
        fontSize: 22,
        fontWeight: 'bold',
        left: 10,
        top: 10
    },
     img_sozinho: {
        width: 100,
        height: 140,
        left: 60,
        bottom: 30

    },
    img_snacks: {
        width: 140,
        height: 90,
        left: 10,
        top: 8   

    },
    img_almoco: {
        width: 120,
        height: 90,
        left: 15,
        top: 8

    },
    img_aperitivos: {
        width: 150,
        height: 90,
        top: 8,
        left: 5

    },

});