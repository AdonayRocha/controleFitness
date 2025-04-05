import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    nome: string;
    instrutor: string;
    plano: string;
}

export default function ItemAluno({ nome, instrutor, plano }: Props) {
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