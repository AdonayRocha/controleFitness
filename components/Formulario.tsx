import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Aluno } from '../App';

interface Props {
    onCadastrar: (aluno: Aluno) => void;
    irParaLista: () => void;
}

export default function Formulario({ onCadastrar, irParaLista }: Props) {
    const [nome, setNome] = useState('');
    const [instrutor, setInstrutor] = useState('');
    const [plano, setPlano] = useState('');

    const cadastrar = () => {
        if (nome && instrutor && plano) {
            onCadastrar({ id: Date.now().toString(), nome, instrutor, plano });
            setNome('');
            setInstrutor('');
            setPlano('');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.linha}>
                <Text style={styles.label}>Nome Aluno:</Text>
                <TextInput
                    style={styles.input}
                    value={nome}
                    onChangeText={setNome}
                />
            </View>

            <View style={styles.linha}>
                <Text style={styles.label}>Instrutor:</Text>
                <TextInput
                    style={styles.input}
                    value={instrutor}
                    onChangeText={setInstrutor}
                />
            </View>

            <View style={styles.linha}>
                <Text style={styles.label}>Plano de Aula:</Text>
                <TextInput
                    style={styles.input}
                    value={plano}
                    onChangeText={setPlano}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={cadastrar}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button]} onPress={irParaLista}>
                <Text style={styles.buttonText}>Listagem</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 12,
    },
    linha: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    label: {
        width: 100,
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 8,
    },
    button: {
        backgroundColor: '#2a73ff',
        paddingVertical: 12,
        borderRadius: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
