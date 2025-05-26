import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Camera } from 'expo-camera';
import type { ImagePickerResult } from 'expo-image-picker';
import * as ImagePicker from 'expo-image-picker';
import React, { JSX, useEffect, useState } from 'react';
import {
    Alert,
    Image,
    ImageBackground,
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

type Recipe = {
  recipeName: string;
  authorName: string;
  ingredients: string;
  instructions: string;
  photo: string;
};

export default function App(): JSX.Element {
  const profilePics = [
    require('../assets/images/perfil1.png'),
    require('../assets/images/perfil2.png'),
    require('../assets/images/perfil3.png'),
    require('../assets/images/perfil4.png'),
    require('../assets/images/perfil5.png'),
    require('../assets/images/perfil6.png'),
  ];

  const getRandomPic = () => {
    return profilePics[Math.floor(Math.random() * profilePics.length)];
  };

  const [profilePic, setProfilePic] = useState<any>(getRandomPic());

  const nav = useNavigation<NativeStackNavigationProp<any>>();

  const [addRecipeModalVisible, setAddRecipeModalVisible] = useState<boolean>(false);
  const [recipeDetailsModalVisible, setRecipeDetailsModalVisible] = useState<boolean>(false);
  const [cameraPermission, setCameraPermission] = useState<boolean | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [recipeName, setRecipeName] = useState<string>('');
  const [authorName, setAuthorName] = useState<string>('');
  const [ingredients, setIngredients] = useState<string>('');
  const [instructions, setInstructions] = useState<string>('');
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(status === 'granted');
      loadRecipes();
    })();
  }, []);

  const loadRecipes = async () => {
    try {
      const recipes = await AsyncStorage.getItem('savedRecipes');
      if (recipes !== null) {
        setSavedRecipes(JSON.parse(recipes));
      }
    } catch (error) {
      console.error('Erro ao carregar receitas:', error);
    }
  };

  const saveRecipes = async (recipes: Recipe[]) => {
    try {
      await AsyncStorage.setItem('savedRecipes', JSON.stringify(recipes));
    } catch (error) {
      console.error('Erro ao salvar receitas:', error);
    }
  };

  const handleTakePhoto = async () => {
    if (cameraPermission === null) {
      alert('Você precisa dar permissão para usar a câmera!');
      return;
    }
    if (cameraPermission === false) {
      alert('Permissão para usar a câmera foi negada!');
      return;
    }

    const result: ImagePickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const handleSaveData = () => {
    if (!recipeName || !authorName || !ingredients || !instructions || !photo) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos e tire uma foto.');
      return;
    }

    const newRecipe: Recipe = {
      recipeName,
      authorName,
      ingredients,
      instructions,
      photo,
    };

    const updatedRecipes = [...savedRecipes, newRecipe];
    setSavedRecipes(updatedRecipes);
    saveRecipes(updatedRecipes);
    setAddRecipeModalVisible(false);

    setRecipeName('');
    setAuthorName('');
    setIngredients('');
    setInstructions('');
    setPhoto(null);

    Alert.alert('Sucesso', 'Receita salva com sucesso!');
  };

  const openRecipeDetailsModal = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setRecipeDetailsModalVisible(true);
  };

  return (
<ImageBackground source={require('../assets/images/fundo_heranca.png')} style={styles.container}>
  <View style={styles.seta}>
    <TouchableOpacity onPress={() => nav.navigate('Perfil')}>
      <Image source={profilePic} style={styles.perfil} />
    </TouchableOpacity>
    <Text style={styles.texto_dois}>Minhas Receitas</Text>
        <Text style={styles.texto_tres}>As receitas de família são heranças cheias de memórias e carinho, conectando gerações pelo sabor.</Text>

  </View>

  <ScrollView contentContainerStyle={styles.scroll}>
    {savedRecipes.map((recipe, index) => (
      <TouchableOpacity
        key={index}
        style={styles.retangulo}
        onPress={() => openRecipeDetailsModal(recipe)}
      >
        <Image source={{ uri: recipe.photo }} style={styles.img} />
        <View>
          <Text style={styles.recipeName}>{recipe.recipeName}</Text>
          <Text style={styles.authorName}>por {recipe.authorName}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </ScrollView>

  <TouchableOpacity
    style={styles.mais}
    onPress={() => setAddRecipeModalVisible(true)}
  >
    <FontAwesome name="plus" size={24} color="white" />
    <Text style={styles.texto_mais}>Adicionar Receita</Text>
  </TouchableOpacity>

  {/* Modal de Adicionar Receita */}
  <Modal
    visible={addRecipeModalVisible}
    animationType="slide"
    transparent={true}
    onRequestClose={() => setAddRecipeModalVisible(false)}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Adicionar Receita</Text>
        <TextInput
          placeholder="Nome da Receita"
          value={recipeName}
          onChangeText={setRecipeName}
          style={styles.input4}
        />
        <TextInput
          placeholder="Seu Nome"
          value={authorName}
          onChangeText={setAuthorName}
          style={styles.input}
        />
        <TextInput
          placeholder="Ingredientes"
          value={ingredients}
          onChangeText={setIngredients}
          style={styles.input2}
          multiline
        />
        <TextInput
          placeholder="Modo de Preparo"
          value={instructions}
          onChangeText={setInstructions}
          style={styles.input3}
          multiline
        />
        <TouchableOpacity style={styles.botao_salvar} onPress={handleTakePhoto}>
          <Text style={styles.texto_botao}>Tirar Foto</Text>
        </TouchableOpacity>
        {photo && <Image source={{ uri: photo }} style={styles.photo} />}
        <Pressable style={styles.botao_salvar} onPress={handleSaveData}>
          <Text style={styles.texto_botao}>Salvar</Text>
        </Pressable>
      </View>
    </View>
  </Modal>

  {/* Modal Detalhes da Receita */}
  <Modal
    visible={recipeDetailsModalVisible}
    animationType="slide"
    transparent={true}
    onRequestClose={() => setRecipeDetailsModalVisible(false)}
  >
    <View style={styles.modalContainer2}>
      <View style={styles.modalContent2}>
        {selectedRecipe && (
          <>
            <Text style={styles.modalTitle}>{selectedRecipe.recipeName}</Text>
            <Text style={styles.authorName}>por {selectedRecipe.authorName}</Text>
            <Image source={{ uri: selectedRecipe.photo }} style={styles.modalImage} />
            <Text style={styles.modalText}>Ingredientes:</Text>
            <Text style={styles.recipeDescription}>{selectedRecipe.ingredients}</Text>
            <Text style={styles.modalText}>Modo de Preparo:</Text>
            <Text style={styles.recipeDescription}>{selectedRecipe.instructions}</Text>
          </>
        )}
        <Pressable style={styles.botao_salvar} onPress={() => setRecipeDetailsModalVisible(false)}>
          <Text style={styles.texto_botao}>Fechar</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
</ImageBackground>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    seta: {
        position: 'absolute',
        top: 30,
        left: 20,
        zIndex: 1,
    },
    fundo: {
        width: '100%',
        height: '100%',
        marginTop: 80,
    },
    texto_seta: {
        top: -26,
        left: 23,
        fontSize: 17,
        fontFamily: 'monospace',
    },
    perfil: {
        width: 100,
        height: 100,
        left: 150,
        top: 70,
    },
    texto_dois: {
        fontSize: 16,
        fontFamily: 'monospace',
        top: 80,
        left: 130,
    },
    texto_tres: {
        fontSize: 12,
        fontFamily: 'monospace',
        top: 90,
        left: 80,
        width: 290,
    },
    retangulo: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        width: 350,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        left: 29,
        top: 90,
        borderRadius: 9,
        borderStyle: 'dotted',
        borderColor: '#565656',
        borderWidth: 1,
    },
    mais: {
        position: 'absolute',
        zIndex: 1,
        left: 239,
        top: 10,
        backgroundColor: '#385A64',
        width: 170,
        height: 30,
        borderRadius: 20,
        padding: 5
        
    },
    texto_mais: {
        fontSize: 12,
        fontFamily: 'monospace',
        top: -19,
        left: 30,
        color: 'white'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalContent: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        padding: 20,
        borderRadius: 10,
        width: 369,
        alignItems: 'center',
        height: 800,
    },
    seta2: {
        position: 'absolute',
        top: 10,
        left: 20,
        zIndex: 1,
    },
    texto_seta2: {
        top: -26,
        left: 23,
        fontSize: 17,
        fontFamily: 'monospace',
    },
    input: {
        height: 40,
        width: 270,
        fontSize: 16,
        padding: 10,
        borderRadius: 8,
        color: '#565656',
        margin: 20,
        top: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.09)',
    },
    texto_receita: {
        top: 56,
        left: -60,
        fontFamily: 'monospace',
        fontSize: 15,
    },
    input2: {
        height: 130,
        width: 270,
        fontSize: 16,
        padding: 10,
        borderRadius: 8,
        color: '#565656',
        margin: 20,
        top: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.09)',
        paddingTop: 10, // Mantém o texto no topo
        textAlignVertical: 'top',
    },
    texto_receita2: {
        top: 24,
        left: -25,
        fontFamily: 'monospace',
        fontSize: 15,
    },
    texto_receita3: {
        top: 10,
        left: -18,
        fontFamily: 'monospace',
        fontSize: 15,
    },
    input3: {
        height: 130,
        width: 270,
        fontSize: 16,
        padding: 10,
        borderRadius: 8,
        color: '#565656',
        margin: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.09)',
        paddingTop: 10, // Mantém o texto no topo
        textAlignVertical: 'top',
    },
    input4: {
        height: 40,
        width: 270,
        fontSize: 16,
        padding: 10,
        borderRadius: 8,
        color: '#565656',
        margin: 20,
        top: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.09)',
    },
    texto_receita4: {
        top: 40,
        left: -50,
        fontFamily: 'monospace',
        fontSize: 15,
    },
    img: {
        width: 150,
        height: 180,
        borderRadius: 9,
        borderStyle: 'dotted',
        borderColor: '#565656',
        borderWidth: 1,
        top: 25,
        right: 90
    },
    photo: {
        width: 290,
        height: 170,
        borderRadius: 9,
        marginTop: 10,
    },
    savedRecipesTitle: {
        fontSize: 18,
        fontFamily: 'monospace',
        marginBottom: 10,

    },
    savedRecipe: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 5,
    },
    savedRecipeTitle: {
        fontSize: 16,
        fontFamily: 'monospace',
    },
    savedRecipeImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginRight: 10,
    },
    recipeTextContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    recipeName: {
        fontSize: 20,
        fontFamily: 'monospace',
        left: 50,
        top: -150
    },
    authorName: {
        fontSize: 14,
        color: 'gray',
        fontFamily: 'monospace',
        top: -140,
        left: 50,


    },
    recipeDescription: {
        fontSize: 12,
        fontFamily: 'monospace',
    },
    viewRecipeButton: {
        backgroundColor: '#e0e0e0',
        padding: 8,
        borderRadius: 5,
        alignSelf: 'flex-end',

    },
    viewRecipeButtonText: {
        fontSize: 10,
        fontFamily: 'monospace',

    },
    botao_salvar: {
        borderRadius: 5,
        backgroundColor: '#6CC696',
        height: 25,
        width: 70,
        bottom: 10,
        left: 120,
    },
    texto_botao:{
        color: '#fff',
        fontSize: 16,
        left: 11
    },

    //modal receita

    modalContainer2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalContent2: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        padding: 20,
        borderRadius: 10,
        width: 369,
        alignItems: 'center',
        height: 800,
    },
    seta3: {
        position: 'absolute',
        top: 10,
        left: 20,
        zIndex: 1,
    },
    texto_seta3: {
        top: -26,
        left: 23,
        fontSize: 17,
        fontFamily: 'monospace',
    },
    modalImage: {
        width: 270,
        height: 170,
        borderRadius: 3,
        marginTop: 50,
    },
    modalText: {
        fontSize: 18,
        marginVertical: 5,
        top: 30,
        left: -90,
        fontFamily: 'monospace'
    },
    modalTitle: {
        fontSize: 18,
        marginVertical: 5,
        top: 50,
        left: -46,
        fontFamily: 'monospace'
    },
    modalListItem: {
        fontSize: 18,
        marginVertical: 5,
        top: 50,
        left: -60,
        fontFamily: 'monospace'

    },
    modalText2: {
        fontSize: 18,
        marginVertical: 5,
        top: 30,
        left: -74,
        fontFamily: 'monospace'
    },
    modalTitle2: {
        fontSize: 18,
        marginVertical: 5,
        top: 60,
        left: -30,
        fontFamily: 'monospace'
    },
    modalListItem2: {
        fontSize: 18,
        marginVertical: 5,
        top: 60,
        left: -60,
        fontFamily: 'monospace'

    },
    recipeCard: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        top: 110,
        width: 350,
        height: 150,
        left: 25
    },
});