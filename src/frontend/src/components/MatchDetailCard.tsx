import React from "react";
import { Link } from "react-router-dom";
import { match } from "../pages/teamPage";

export const MatchDetailCard = ({ teamName, match }: { teamName: string, match: match }) => {
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    return (
        <div className="MatchDetailCard">
            <h3>Latest Matches</h3>
            <h1>vs <Link to={`/team/${otherTeam}`}>{otherTeam}</Link></h1>
            <h2>{match.date}</h2>
            <h3>at {match.venue}</h3>
            <h3>{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
        </div >
    );
}