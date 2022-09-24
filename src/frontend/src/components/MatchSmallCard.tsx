import React from "react";
import { Link } from "react-router-dom";
import { match } from "../pages/teamPage";

export const MatchSmallCard = ({ teamName, match }: { teamName: string, match: match }) => {
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    return (
        <div className="MatchSmallCard">
            <h3>vs <Link to={`/team/${otherTeam}`}>{otherTeam}</Link></h3>
            <p>{match.matchWinner} won by {match.resultMargin} {match.result}</p>
        </div>
    );
}