import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Formulario from './Formulario';

test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
    render(<RecoilRoot><Formulario /></RecoilRoot>);
    // encontrar input na DOM
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    // encontra o botão de submit
    const button = screen.getByRole('button');
    // garantir que o input está no documento
    expect(input).toBeInTheDocument();
    // garantir que o button está desabilitado
    expect(button).toBeDisabled();
})

test('adicionar participante caso exista um nome preenchido', () => {
    render(<RecoilRoot><Formulario /></RecoilRoot>);
    // encontrar input na DOM
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    // encontra o botão de submit
    const button = screen.getByRole('button');
    // inserir valor no input
    fireEvent.change(input, {
        target: {
            value: 'Bruno Leo'
        }
    })
    // clicar em submeter
    fireEvent.click(button);
    // garantir que o input esteja com o foco ativo 
    expect(input).toHaveFocus();
    // garantir que o input esteja vazio
    expect(input).toHaveValue("");
})

test('nomes duplicados não podem ser adicionados a lista', () => {
    render(<RecoilRoot><Formulario /></RecoilRoot>);
    // encontrar input na DOM
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    // encontra o botão de submit
    const button = screen.getByRole('button');
    // inserir valor no input
    fireEvent.change(input, {
        target: {
            value: 'Bruno Leo'
        }
    })
    // clicar em submeter
    fireEvent.click(button);
    // inserir valor duplicado no input
    fireEvent.change(input, {
        target: {
            value: 'Bruno Leo'
        }
    })
    // clicar em submeter
    fireEvent.click(button);
    const menssagemDeErro = screen.getByRole('alert');
    expect(menssagemDeErro.textContent).toBe('Nomes duplicados não são permitidos')
})