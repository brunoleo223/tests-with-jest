import { useRecoilState } from "recoil"
import { listaDeParticipantes } from "../atom"

export const useListaParticipantes = () => {
    return useRecoilState(listaDeParticipantes);
}