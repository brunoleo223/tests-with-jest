import { render, screen } from '@testing-library/react';
import React from 'react';
import Formulario from './Formulario';

test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
    render(<Formulario />);
    // encontrar input na DOM
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    // encontra o botão de submit
    const button = screen.getByRole('button');
    // garantir que o input está no documento
    expect(input).toBeInTheDocument();
    // garantir que o button está desabilitado
    expect(button).toBeDisabled();
})