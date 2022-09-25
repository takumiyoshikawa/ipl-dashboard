import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { match } from "./teamPage";
import './MatchPage.scss';
import { YearSelector } from "../components/YearSelectror";

export const MatchPage = () => {
    const [matches, setMatches] = useState<match[]>();
    const { teamName, year } = useParams();

    useEffect(() => {
        const fetchMatches = async () => {
            const response = fetch(`/team/${teamName}/matches?year=${year}`);
            const data: match[] = await (await response).json();
            setMatches(data);
        };

        fetchMatches();
    }, [teamName, year]);

    return (
        <div className="MatchPage">
            <div className="year-selector">
                <h3>Select Year</h3>
                {teamName && <YearSelector teamName={teamName} />}
            </div>
            <div>
                <h1 className="page-heading">{teamName} matches in {year}</h1>
                {teamName && matches && matches.map(match => <MatchDetailCard key={match.id} teamName={teamName} match={match} />)}
            </div>
        </div>
    )
}