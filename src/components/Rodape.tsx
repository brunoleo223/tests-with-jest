import { useNavigate } from "react-router-dom"
import { useListaParticipantes } from "../stale/hooks/useListaParticipantes"
import { useSorteador } from "../stale/hooks/useSorteador";

import './Rodape.css';

export const Rodape = () => {
    const participantes = useListaParticipantes()

    const navegarPara = useNavigate();

    const sortear = useSorteador();

    const iniciar = () => {
        sortear();
        navegarPara("/sorteio")
    }

    console.log(participantes.length)

    return(
        <footer className="rodape-configuracoes">
            <button 
                disabled={participantes.length < 1}
                onClick={iniciar}
                className="botao"
            >
                Iniciar princadeira
            </button>
            <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
        </footer>
    )
}