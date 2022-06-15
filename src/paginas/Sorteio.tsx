import React, { useState } from "react";
import { useListaParticipantes } from "../stale/hooks/useListaParticipantes";
import { useResultadoDoSorteio } from "../stale/hooks/useResultadoDoSorteio";

export const Sorteio = () => {

    const participantes: string[] | any = useListaParticipantes();
    const [participanteDaVez, setParticipanteDaVez] = useState('');
    const [amigoSecreto, setAmigoSecreto] = useState('');
    const resultado = useResultadoDoSorteio();

    const sortear = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(resultado.has(participanteDaVez)){
            setAmigoSecreto(resultado.get(participanteDaVez))
        }
    }

    

    return (
        <section>
            <form onSubmit={sortear}>
                <select 
                data-testid="select"
                required 
                name="participanteDaVez" 
                id="participanteDaVez" 
                placeholder="Selecione o seu nome"
                value={participanteDaVez}
                onChange={(e) => setParticipanteDaVez(e.target.value)}
                >
                    {participantes.map((participante: any) => (
                        <option key={participante} value={participante}>{participante}</option>
                    ))}
                </select>
                {amigoSecreto && <p role="alert">Amigo secreto: {amigoSecreto}</p>}
                <button>Sortear</button>
            </form>
        </section>
    )
}