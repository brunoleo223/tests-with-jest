import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { useListaParticipantes } from '../stale/hooks/useListaParticipantes';
import { useResultadoDoSorteio } from '../stale/hooks/useResultadoDoSorteio';
import { Sorteio } from './Sorteio';

jest.mock('../stale/hooks/useListaParticipantes', () => {
    return {
        useListaParticipantes: jest.fn()
    }
});
jest.mock('../stale/hooks/useResultadoDoSorteio', () => {
    return {
        useResultadoDoSorteio: jest.fn()
    }
});


describe('pagina de sorteio', () =>{
    const participantes = ['1', '2', '3']

    const resultado = new Map([
        ['1', 'Bruno'],
        ['2', 'Leonardo'],
        ['3', 'Costa']
    ])

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
        (useResultadoDoSorteio as jest.Mock).mockReturnValue(resultado);
    })

    test('todos os participantes podem exibir o seu amigo secreto', () => {
        render(<RecoilRoot><Sorteio /></RecoilRoot>)

        const opcoes = screen.queryAllByRole('option');

        expect(opcoes).toHaveLength(participantes.length)
    })

    test('o amigo secreto é exibido quando solicitado', () => {
        render(<RecoilRoot><Sorteio /></RecoilRoot>)
        const select = screen.getByTestId("select");
        fireEvent.change(select, {
            target: {
                value: participantes[0]
            }
        })

        const botao = screen.getByRole('button')

        fireEvent.click(botao);

        const amigoSecreto = screen.getByRole('alert')

        expect(amigoSecreto).toBeInTheDocument();
    })
})