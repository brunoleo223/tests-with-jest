import { useRecoilValue, useSetRecoilState } from "recoil";
import { erroState, listaDeParticipantes } from "../atom";

export function useAdicionarParticipante() {
    const setLista = useSetRecoilState(listaDeParticipantes);
    const lista = useRecoilValue(listaDeParticipantes);
    const setError = useSetRecoilState(erroState);
    return (nomeDoParticipante: string) => {
        if(lista.includes(nomeDoParticipante)) {
            setError('Nomes duplicados não são permitidos');
        }
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante]);
    }
}