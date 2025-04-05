import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Aluno } from '../App';

export default function ItemAluno({ nome, instrutor, plano }: Aluno) {
    return (
        <View style={styles.card}>
            <Text style={styles.nomeTitulo}>{nome}</Text>
            <Text>{instrutor}</Text>
            <Text>{plano}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 16,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'yellow',
    },
    nomeTitulo: {
        fontSize: 24, 
    }
});
