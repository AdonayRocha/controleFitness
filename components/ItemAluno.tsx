import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Aluno } from '../App';

interface Props {
    aluno: Aluno;
}

export default function AlunoItem({ aluno }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.nome}>{aluno.nome}</Text>
            <Text style={styles.texto}>{aluno.instrutor}</Text>
            <Text style={styles.texto}>{aluno.plano}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 16,
        padding: 10,
        marginBottom: 10,
    },
    nome: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 4,
    },
    texto: {
        fontSize: 14,
    },
});
