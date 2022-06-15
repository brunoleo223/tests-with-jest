import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { useListaParticipantes } from '../stale/hooks/useListaParticipantes';
import { Rodape } from './Rodape';

jest.mock('../stale/hooks/useListaParticipantes', () => {
    return {
        useListaParticipantes: jest.fn()
    }
});



const mockNavegacao = jest.fn();
const mockSorteio = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
});

jest.mock('../stale/hooks/useSorteador', () => {
    return {
        useSorteador: () => mockSorteio
    }
});

describe('quando não existem participantes suficientes', () => { 
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue([])
    })
    test('a brincadeira não pode ser iniciada', () => {
        render(<RecoilRoot><Rodape /></RecoilRoot>);

        const botao = screen.getByRole('button');

        expect(botao).toBeDisabled()
    })
 })
describe('quando existem participantes suficientes', () => { 
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(['Bruno', 'Leonardo', 'Costa'])
    })
    test('a brincadeira pode ser iniciada', () => {
        render(<RecoilRoot><Rodape /></RecoilRoot>);

        const botao = screen.getByRole('button');

        expect(botao).not.toBeDisabled()
    })

    test('a brincadeira foi iniciada', () => {
        render(<RecoilRoot><Rodape /></RecoilRoot>);

        const botao = screen.getByRole('button');

        expect(botao).not.toBeDisabled()
        fireEvent.click(botao);
        expect(mockNavegacao).toHaveBeenCalledTimes(1);
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio');
        expect(mockSorteio).toHaveBeenCalledTimes(1);
    })
 })