import { useNavigate } from "react-router-dom"
import { useListaParticipantes } from "../stale/hooks/useListaParticipantes"
import { useSorteador } from "../stale/hooks/useSorteador";

export const Rodape = () => {
    const participantes = useListaParticipantes()

    const navegarPara = useNavigate();

    const sortear = useSorteador();

    const iniciar = () => {
        sortear();
        navegarPara("/sorteio")
    }

    return(
        <footer>
            <button 
                disabled={participantes.length < 3}
                onClick={iniciar}
            >
                Iniciar princadeira
            </button>
        </footer>
    )
}