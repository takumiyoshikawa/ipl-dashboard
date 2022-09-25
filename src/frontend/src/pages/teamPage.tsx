import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";
import { PieChart } from 'react-minimal-pie-chart';
import './TeamPage.scss';

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
    const { teamName } = useParams()
    useEffect(() => {
        const fetchMatches = async () => {
            const response = fetch(`http://localhost:8080/team/${teamName}`);
            const data: teamResponse = await (await response).json();
            setTeam(data);
        };

        fetchMatches();
    }, [teamName]);

    return (
        <div className="TeamPage">
            <div className="team-name-section">
                <h1 className="team-name"> {team && team.teamName}</h1>
            </div>
            <div className="win-loss-section">
                <p>Win / Losses</p>
                {team &&
                    <PieChart
                        data={[
                            { title: 'Losses', value: team.totalMatch - team.totalWin, color: '#a34d5d' },
                            { title: 'Wins', value: team.totalWin, color: '#4da375' },
                        ]}
                    />
                }
            </div>

            <div className="match-detail-section">
                <h3>Latest Matches</h3>
                {team && <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />}
            </div>
            {team && team.matches.slice(1).map((match) => (<MatchSmallCard teamName={team.teamName} match={match} />))}
            <div className="more-link">
                <a href="#">More {'>'}</a>
            </div>
        </div>
    )
}