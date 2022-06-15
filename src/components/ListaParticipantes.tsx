import { useListaParticipantes } from "../stale/hooks/useListaParticipantes"

export const ListaParticipantes = () => {
    const participantes: string[] | any = useListaParticipantes();
    return (
        <ul>
            {participantes.map((participante: any) => {
                <li key={participante}>{participante}</li>
            })}
        </ul>
    )
}