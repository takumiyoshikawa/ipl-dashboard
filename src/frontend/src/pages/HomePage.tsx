import React, { useEffect, useState } from "react"
import { TeamTile } from "../components/TeamTile";
import { teamResponse } from "./teamPage";
import './HomePage.scss';

export const HomePage = () => {

    const [teams, setTeams] = useState<teamResponse[]>();

    useEffect(() => {
        const fetchAllTeams = async () => {
            const response = fetch('/team');
            const data: teamResponse[] = await (await response).json();
            setTeams(data);
        };

        fetchAllTeams();
    }, []);

    return (
        <div className="HomePage">
            <div className="header-section">
                <h1 className="app-name">
                    IPL-Dashboard
                </h1>
            </div>
            <div className="team-grid">
                {teams && teams.map(team => <TeamTile key={team.id} teamName={team.teamName} />)}
            </div>
        </div>
    )
}