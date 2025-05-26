import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const fakeDB: any[] = [];

  const handleRegister = () => {
    if ( !email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    const usuarioExistente = fakeDB.find(user => user.email === email);

    if (usuarioExistente) {
      Alert.alert('Erro', 'Email já cadastrado');
      return;
    }

    fakeDB.push({
      id: Date.now().toString(),
      email,
      senha,
    });

    Alert.alert('Sucesso', 'Conta criada com sucesso!');
    router.replace('/');
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.texto_cima}>Sabor Na Mão</Text>

        <Image source={require('../assets/images/cadastro.png')} style={styles.imagem} />

        <View style={styles.quadrado}>
          <Text style={styles.texto1}>Crie sua conta</Text>
          <Pressable onPress={() => router.replace('/')}>
            <Text style={styles.texto}>
              Já tem uma conta? <Text style={styles.texto2}>Faça o login</Text>
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
    alignItems: 'center',
    width: 'auto',
    backgroundColor: '#F5F5F5',
  },
  texto_cima: {
    color: '#F8D12D',
    fontWeight: 'bold',
    fontSize: 37,
    marginBottom: 10,
    top: 80,
  },
  imagem: {
    width: 360,
    height: 360,
    top: 63,
    marginRight: 100,
  },
  quadrado: {
     backgroundColor: '#ececec',
    width: '100%',
    borderTopRightRadius: 80,
    paddingVertical: 40,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 10,
    height: '55%'
  },
  botao: {
    backgroundColor: 'rgba(248, 209, 45, 0.7)',
    borderRadius: 9,
    height: 40,
    width: 135,
    padding: 5,
    left: 104,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#565656',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    elevation: 15,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
  },
  input: {
    height: 50,
    width: 346,
    borderWidth: 1.5,
    borderColor: 'rgba(248, 209, 45, 0.7)',
    fontSize: 16,
    padding: 10,
    borderRadius: 8,
    color: '#565656',
    margin: 20,
    marginBottom: 10

  },
  texto: {
     fontSize: 20,
    color: '#565656',
    marginBottom: 10,
  },
  texto1: {
 fontSize: 22,
    color: '#565656',
    marginBottom: 20,
  },
  texto2: {
    fontSize: 20,
    color: '#839deb',
  },
  texto3: {
    fontSize: 12,
    color: 'red',
    top: -10,
    left: -110,
  },
});
