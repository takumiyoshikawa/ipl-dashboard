import React from "react"
import { Link } from "react-router-dom";
import './YearSelector.scss';


export const YearSelector = ({ teamName }: { teamName: string }) => {
    let years = [];

    const startYear: string | undefined = process.env.REACT_APP_DATA_START_YEAR;
    const endYear: string | undefined = process.env.REACT_APP_DATA_END_YEAR;
    if (startYear && endYear) {
        for (let i = parseInt(startYear); i <= parseInt(endYear); i++) {
            years.push(i)
        }
    }

    return (
        <ol className="YearSelector">
            {years.map(year => <li key={year}><Link to={`/team/${teamName}/matches/${year}`}>{year}</Link></li>)}
        </ol>
    )
}