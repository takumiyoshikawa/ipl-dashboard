import React from "react";
import { Link } from "react-router-dom";
import { match } from "../pages/teamPage";
import './MatchSmallCard.scss';

export const MatchSmallCard = ({ teamName, match }: { teamName: string, match: match }) => {
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const isMatchWon = teamName === match.matchWinner;
    return (
        <div className={isMatchWon ? ' MatchSmallCard won-card' : 'MatchSmallCard lost-card'} >
            <span className="vs">vs</span>
            <h3><Link to={`/team/${otherTeam}`}>{otherTeam}</Link></h3>
            <p className="match-result">{match.matchWinner} won by {match.resultMargin} {match.result}</p>
        </div>
    );
}