import React, { useEffect, useState } from "react";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

export type match = {
    id: number;
    city: string;
    date: string;
    playerOfMatch: string;
    venue: string;
    neutralVenue: string;
    team1: string;
    team2: string;
    tossWinner: string;
    tossDecision: string;
    matchWinner: string;
    result: string;
    resultMargin: string;
    umpire1: string;
    umpire2: string;
}


type teamResponse = {
    id: number;
    teamName: string;
    totalMatch: number;
    totalWin: number;
    matches: match[];
}

export const TeamPage = () => {

    const [team, setTeam] = useState<teamResponse>();

    useEffect(() => {
        const fetchMatches = async () => {
            const response = fetch('http://localhost:8080/team/Delhi%20Capitals');
            const data: teamResponse = await (await response).json();
            setTeam(data);
        };

        fetchMatches();
    }, []);

    return (
        <div className="TeamPage">
            <h1> {team && team.teamName}</h1>
            {team && <MatchDetailCard match={team.matches[0]} />}
            {team && team.matches.slice(1).map((match) => (<MatchSmallCard match={match} />))}
        </div>
    )
}