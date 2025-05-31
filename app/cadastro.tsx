import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { saveUser } from '../bancodedados'; // sua função de salvar no "banco de dados" local

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }else {
      Alert.alert('Erro', 'Email ou senha inválidos');
    }


    try {
      await saveUser(email, senha);
      Alert.alert('Sucesso', 'Conta criada com sucesso!');
      router.replace('/');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível criar a conta.');
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textoTopo}>Sabor Na Mão</Text>

        <Image source={require('../assets/images/cadastro.png')} style={styles.imagem} />

        <View style={styles.card}>
          <Text style={styles.titulo}>Crie sua conta</Text>
          <Pressable onPress={() => router.replace('/')}>
            <Text style={styles.subtitulo}>
              Já tem uma conta? <Text style={styles.linkCadastro}>Faça o login</Text>
            </Text>
          </Pressable>

          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="#999"
          />
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            placeholderTextColor="#999"
          />
          <Text style={styles.texto3}>*mínimo 6 caracteres</Text>

          <Pressable style={styles.botao} onPress={handleRegister}>
            <Text style={styles.botaoTexto}>Cadastrar</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    top: 30
  },
  textoTopo: {
    color: '#F8D12D',
    fontWeight: 'bold',
    fontSize: 36,
    marginTop: 40,
  },
  imagem: {
    width: 340,
    height: 340,
    marginTop: 20,
    marginRight: 100,
  },
  card: {
    backgroundColor: '#ececec',
    width: '100%',
    borderTopRightRadius: 80,
    paddingVertical: 40,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: -50,
    height: '60%',
  },
  titulo: {
    fontSize: 22,
    color: '#565656',
    marginBottom: 10,
  },
  texto3:{
    color: 'red',
    right: 100,
    top: -10
  },
  subtitulo: {
    fontSize: 18,
    color: '#565656',
    marginBottom: 20,
    marginTop: 10,
  },
  linkCadastro: {
    color: '#839deb',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1.5,
    borderColor: 'rgba(248, 209, 45, 0.7)',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#565656',
    marginBottom: 16,
    marginTop: 20,
  },
  botao: {
    backgroundColor: 'rgba(248, 209, 45, 0.7)',
    borderRadius: 9,
    height: 45,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#565656',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    elevation: 20,
    top: 40,
    left: 100
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
