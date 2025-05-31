import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Camera } from 'expo-camera';
import type { ImagePickerResult } from 'expo-image-picker';
import * as ImagePicker from 'expo-image-picker';
import React, { JSX, useEffect, useState } from 'react';
import {
  Alert,
  GestureResponderEvent,
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

  function heranca(event: GestureResponderEvent): void {
    throw new Error('Function not implemented.');
  }
  

  return (
    <ImageBackground source={require('../assets/images/fundo_heranca.png')} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.seta} onPress={() => nav.navigate('home')}>
            <Feather name="chevron-left" size={28} color="#000" />
            <Text style={styles.texto_seta}>Voltar</Text>
          </TouchableOpacity>

          <Image source={profilePic} style={styles.perfil} />

          <Text style={styles.texto_dois}>Minhas Receitas</Text>
          <Text style={styles.texto_tres}>
            As receitas de família são heranças cheias de memórias e carinho, conectando gerações pelo sabor.
          </Text>
        </View>

        {savedRecipes.map((recipe, index) => (
          <TouchableOpacity key={index} style={styles.retangulo}>
            <Image source={{ uri: recipe.photo }} style={styles.img} />

            <View>
              <Text style={styles.recipeName}>{recipe.recipeName}</Text>
              <Text style={styles.authorName}>por {recipe.authorName}</Text>
            </View>

            <TouchableOpacity style={styles.botao} onPress={() => openRecipeDetailsModal(recipe)}>
              <Text style={styles.botaoTexto}>Ver receita</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={styles.mais}
          onPress={() => {
            setPhoto(null); // limpa a foto ao abrir o modal
            setAddRecipeModalVisible(true);
          }}
        >
          <Feather name="plus" size={20} color="white" />
          <Text style={styles.texto_mais}>Adicionar Receita</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal de Adicionar Receita */}
      <Modal
        visible={addRecipeModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setAddRecipeModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.x} onPress={() => setAddRecipeModalVisible(false)}>
              <Feather name="x" size={22} color="red" />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleTakePhoto}>
              {photo ? (
                <Image source={{ uri: photo }} style={styles.photo} />
              ) : (
                <Image style={styles.img_heranca} source={require('../assets/images/image 9.png')} />
              )}
            </TouchableOpacity>

            <Text style={styles.label}>Nome da receita</Text>
            <TextInput value={recipeName} onChangeText={setRecipeName} style={styles.input4} />
            <Text style={styles.label}>Autor da receita</Text>
            <TextInput value={authorName} onChangeText={setAuthorName} style={styles.input} />
            <Text style={styles.label}>Digite os ingredientes</Text>
            <TextInput value={ingredients} onChangeText={setIngredients} style={styles.input2} multiline />
            <Text style={styles.label}>Digite o modo de preparo</Text>
            <TextInput value={instructions} onChangeText={setInstructions} style={styles.input3} multiline />

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
                <TouchableOpacity style={styles.x} onPress={() => setRecipeDetailsModalVisible(false)}>
                  <Feather name="x" size={24} color="red" />
                </TouchableOpacity>
                <Image source={{ uri: selectedRecipe.photo }} style={styles.modalImage} />
                <Text style={styles.modalTitle}>{selectedRecipe.recipeName}</Text>
                <Text style={styles.modal_authorName}>por {selectedRecipe.authorName}</Text>
                <Text style={styles.modalText}>Ingredientes:</Text>
                <Text style={styles.recipeDescription}>{selectedRecipe.ingredients}</Text>
                <Text style={styles.modal_preparo}>Modo de Preparo:</Text>
                <Text style={styles.recipeDescription}>{selectedRecipe.instructions}</Text>
              </>
            )}

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
    paddingTop: 35, // manteve o deslocamento do que era top:35 antes absoluto
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  headerContainer: {
    // removido 'position: absolute' para fazer parte do fluxo e permitir rolagem
    marginBottom: 40,
    alignItems: 'center',
  },
  seta: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 40
  },
  texto_seta: {
    marginLeft: 5,
    fontSize: 17,
    fontFamily: 'monospace',
  },
  perfil: {
    width: 100,
    height: 100,
    marginTop: 70,
    marginBottom: 10,
  },
  texto_dois: {
    fontSize: 16,
    fontFamily: 'monospace',
    marginBottom: 6,
  },
  texto_tres: {
    fontSize: 12,
    fontFamily: 'monospace',
    width: 300,
    textAlign: 'center',
    lineHeight: 18,
  },
  retangulo: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: 350,
    height: 160,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    borderStyle: 'dotted',
    borderColor: '#565656',
    borderWidth: 1,
    marginVertical: 10,
  },
  mais: {
    position: 'absolute',
    zIndex: 1,
    left: 229,
    top: 70,
    backgroundColor: '#385A64',
    width: 180,
    height: 40,
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  texto_mais: {
    fontSize: 12,
    fontFamily: 'monospace',
    marginLeft: 8,
    color: 'white',
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
  img_heranca: {
    width: 265,
    height: 150,
    marginTop: -20,
  },
  label: {
    fontFamily: 'monospace',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginTop: 15,
    color: '#333',
  },
  input: {
    height: 40,
    width: 270,
    fontSize: 16,
    padding: 10,
    borderRadius: 8,
    color: '#565656',
    margin: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.09)',
  },
  input2: {
    height: 130,
    width: 270,
    fontSize: 16,
    padding: 10,
    borderRadius: 8,
    color: '#565656',
    margin: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.09)',
    paddingTop: 10,
    textAlignVertical: 'top',
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
    paddingTop: 10,
    textAlignVertical: 'top',
  },
  input4: {
    height: 40,
    width: 270,
    fontSize: 16,
    padding: 10,
    borderRadius: 8,
    color: '#565656',
    margin: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.09)',
  },
  x: {
    resizeMode: 'contain',
    marginLeft: 'auto',
  },
  img: {
    width: 130,
    height: 140,
    borderRadius: 9,
    marginRight: 190,
  },
  botao_salvar: {
    borderRadius: 5,
    backgroundColor: '#6CC696',
    height: 31,
    width: 70,
    bottom: 25,
    left: 140,
  },
  texto_botao: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'monospace',
    top: 4
  },
  photo: {
    width: 290,
    height: 155,
    borderRadius: 9,
  },
  recipeName: {
    fontSize: 20,
    fontFamily: 'monospace',
    marginLeft: 50,
    marginTop: -130,
    height: 90
  },
  authorName: {
    fontSize: 14,
    color: 'gray',
    fontFamily: 'monospace',
    marginTop: -60,
    marginLeft: 50,
  },
  botao: {
    backgroundColor: '#009E60',
    height: 25,
    width: 140,
    borderRadius: 6,
    padding: 3,
    marginTop: -25,
    marginLeft: 185,
  },
  botaoTexto: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'monospace',
    marginLeft: 18,
  },
  recipeDescription: {
    fontSize: 12,
    fontFamily: 'monospace',
    left: -90
  },
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
  modalImage: {
    width: 230,
    height: 170,
    borderRadius: 3,
    marginTop: 20,
  },
  modalText: {
    fontSize: 18,
    marginVertical: 5,
    fontFamily: 'monospace',
    marginTop: 50,
    textAlign: 'justify',
    marginLeft: -80,

  },
  modal_preparo: {
    fontSize: 18,
    marginVertical: 5,
    fontFamily: 'monospace',
    marginTop: 50,
    textAlign: 'justify',
    marginLeft: -40,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'monospace',
    marginTop: 30,
    marginLeft: -170,

  },
  modal_authorName: {
    fontSize: 14,
    color: 'gray',
    fontFamily: 'monospace',
    marginTop: 10,
    marginLeft: -140,

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
    marginTop: 110,
    width: 350,
    height: 150,
    marginLeft: 25,
  },
});

