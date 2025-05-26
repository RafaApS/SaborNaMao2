import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';


const fakeDB = [
  {
    id: '1',
    email: 'teste@gmail.com',
    senha: '123456',
  },
];

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    const usuario = fakeDB.find(user => user.email === email && user.senha === senha);

    if (usuario) {
      Alert.alert('Login', `Bem-vindo, ${usuario.email}!`);
      router.replace('/home');
    } else {
      Alert.alert('Erro ao logar', 'Email ou senha incorretos');
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textoTopo}>Sabor Na Mão</Text>
        <Image source={require('../assets/images/login.png')} style={styles.imagem} />

        <View style={styles.card}>
          <Text style={styles.titulo}>Faça o Login</Text>

          <TouchableOpacity onPress={() => router.push('/cadastro')}>
            <Text style={styles.subtitulo}>
              Não tem uma conta? <Text style={styles.linkCadastro}>Cadastre-se!</Text>
            </Text>
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          <TouchableOpacity onPress={() => Alert.alert('Redefinir Senha', 'Funcionalidade não implementada.')}>
            <Text style={styles.linkSenha}>Esqueci a senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={handleLogin}>
            <Text style={styles.botaoTexto}>Entrar</Text>
          </TouchableOpacity>
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
    height: '60%'
  },
  titulo: {
    fontSize: 22,
    color: '#565656',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    color: '#565656',
    marginBottom: 20,
    marginTop: 10
  },
  linkCadastro: {
    color: '#839deb',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1.5,
    borderColor: 'rgba(108, 198, 150, 0.7)',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#565656',
    marginBottom: 16,
    marginTop: 20
  },
  linkSenha: {
    color: '#839deb',
    fontSize: 16,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: 'rgba(108, 198, 150, 0.7)',
    borderRadius: 9,
    height: 45,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#565656',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    elevation: 10,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
