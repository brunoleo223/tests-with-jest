import { useListaParticipantes } from "../stale/hooks/useListaParticipantes"

export const ListaParticipantes = () => {
    const participantes: string[] | any = useListaParticipantes();
    console.log(participantes);
    return (
        <ul>
            {participantes.map(participante => (
                <li key={participante}>
                    {participante}
                </li>
            ))}
        </ul>
    )
}

