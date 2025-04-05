import React from 'react';
import { View, ScrollView, Button } from 'react-native';
import { Aluno } from '../App';
import ItemAluno from './ItemAluno';

interface Props {
    alunos: Aluno[];
    irParaFormulario: () => void;
}

export default function ListaAlunos({ alunos, irParaFormulario }: Props) {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {alunos.map((aluno) => (
                    <ItemAluno
                        key={aluno.id} 
                        nome={aluno.nome}
                        instrutor={aluno.instrutor}
                        plano={aluno.plano}
                    />
                ))}
            </ScrollView>
            <Button title="Voltar ao Formulário" onPress={irParaFormulario} />
        </View>
    );
}