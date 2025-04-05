import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Formulario from './components/Formulario';
import ListaAlunos from './components/ListaAlunos';

export interface Aluno {
    id: string; 
    nome: string;
    instrutor: string;
    plano: string;
}

export default function App() {
    const [alunos, setAlunos] = useState<Aluno[]>([]);
    const [tela, setTela] = useState<'formulario' | 'lista'>('formulario');

    const adicionarAluno = (aluno: Omit<Aluno, 'id'>) => {
        setAlunos([...alunos, { ...aluno, id: Math.random().toString() }]);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'brown' }}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Controle</Text>
                <Text style={styles.headerText}>Fitness</Text>
            </View>

            <View style={styles.body}>
                {tela === 'formulario' ? (
                    <Formulario
                        onCadastrar={adicionarAluno}
                        irParaLista={() => setTela('lista')}
                    />
                ) : (
                    <ListaAlunos
                        alunos={alunos}
                        irParaFormulario={() => setTela('formulario')}
                    />
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
    backgroundColor: 'brown',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  body: {
    flex: 8,
    padding: 10,
  },
});
