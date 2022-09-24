import React from "react";
import { match } from "../pages/teamPage";

export const MatchSmallCard = ({ match }: { match: match }) => {
    return (
        <div className="MatchSmallCard">
            <p>{match.team1} vs {match.team2}</p>

        </div>
    );
}