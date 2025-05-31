// bd.js
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('usuarios.db');

// Inicializa o banco e a tabela
export const initDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE, senha TEXT);',
      [],
      () => console.log('Tabela criada ou já existe'),
      (_, error) => {
        console.log('Erro ao criar tabela:', error);
        return false;
      }
    );
  });
};

// Cadastrar novo usuário
export const registrarUsuario = (email, senha, onSuccess, onError) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO usuarios (email, senha) VALUES (?, ?);',
      [email, senha],
      (_, result) => onSuccess(result),
      (_, error) => {
        onError(error);
        return false;
      }
    );
  });
};

// Autenticar usuário no login
export const autenticarUsuario = (email, senha, onSuccess, onError) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM usuarios WHERE email = ? AND senha = ?;',
      [email, senha],
      (_, { rows }) => {
        if (rows.length > 0) {
          onSuccess(rows._array[0]); // usuário encontrado
        } else {
          onError('Email ou senha inválidos');
        }
      },
      (_, error) => {
        onError(error.message || 'Erro desconhecido');
        return false;
      }
    );
  });
};
