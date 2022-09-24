import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { match } from "./teamPage";

export const MatchPage = () => {
    const [matches, setMatches] = useState<match[]>();
    const { teamName, year } = useParams();

    useEffect(() => {
        const fetchMatches = async () => {
            const response = fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
            const data: match[] = await (await response).json();
            setMatches(data);
        };

        fetchMatches();
    }, []);

    return (
        <div className="MatchPage">
            <h1>Match Page</h1>
            {teamName && matches && matches.map(match => <MatchDetailCard teamName={teamName} match={match} />)}
        </div>
    )
}