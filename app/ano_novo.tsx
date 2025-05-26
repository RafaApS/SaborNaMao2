import { FontAwesome } from '@expo/vector-icons';
import type { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';


export default function AbacaxiHortela() {
  const nav = useNavigation<NavigationProp<any>>();

 

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
         <View style={styles.row}>
        <TouchableOpacity  onPress={() => nav.navigate('sucos')}>
          <FontAwesome name="chevron-left" size={24} color="#242424" />
        </TouchableOpacity>

       
          <Text style={styles.paragraph}>Ano Novo</Text>
        </View>
        <View style={styles.branco}>
       <View style={styles.grid}>
    <TouchableOpacity style={styles.card} onPress={() => console.log('Botão 1')}>
        <Text style={styles.texto}>Nome da Receita</Text>
      <Image source={require('../assets/images/duvida.jpg')}  style={styles.cardImage} />
    </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity style={styles.cardD} onPress={() => console.log('Botão 2')}>
        <Text style={styles.texto}>Nome da Receita</Text>
      <Image source={require('../assets/images/duvida.jpg')} style={styles.cardImage} />
    </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity style={styles.card} onPress={() => console.log('Botão 3')}>
        <Text style={styles.texto}>Nome da Receita</Text>
      <Image source={require('../assets/images/duvida.jpg')} accessible={false} style={styles.cardImage} />
    </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity style={styles.cardD} onPress={() => console.log('Botão 4')}>
        <Text style={styles.texto}>Nome da Receita</Text>
      <Image source={require('../assets/images/duvida.jpg')} style={styles.cardImage} />
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
    justifyContent: 'flex-start',
    backgroundColor: '#ececec',

  },
row: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 40,
  paddingHorizontal: 10,
  gap: 12, // espaço entre a seta e o texto

},

paragraph: {
  fontSize: 24,
  color: '#242424',
  textTransform: 'uppercase',
},

  branco:{
    backgroundColor: 'white',
  position: 'relative',
  zIndex: -1,
  flex: 1,
  minHeight: 300, // 👈 adicione isso ou outro valor
  width: '100%',
  borderTopLeftRadius: 0,
  borderTopRightRadius: 100,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  top: 50,
  padding: 10

  },
 grid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  paddingHorizontal: 16,

},

card: {
  width: '47%', 
  aspectRatio: 1, 
  backgroundColor: '#fff',
  borderRadius: 12,
  overflow: 'hidden',
  elevation: 3,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 2 },
  alignSelf: 'flex-start', 
  marginBottom: 16,
  marginTop: 16,
  padding: 20
  },

cardD: {
  width: '47%', 
  aspectRatio: 1, 
  backgroundColor: '#fff',
  borderRadius: 12,
  overflow: 'hidden',
  elevation: 3,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 2 },
  alignSelf: 'flex-end', 
  marginBottom: 16,
    padding: 20

},

cardImage: {
alignSelf: 'flex-end', 
 justifyContent: 'flex-end',
bottom:0,
  width: 80,
  height: 80,
  borderRadius: 50,
  marginTop: 5
},
texto:{
    fontSize:12,
      textTransform: 'uppercase',
    margin: 5

}
  },

);
