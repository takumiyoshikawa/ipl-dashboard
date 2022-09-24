package com.takumiyoshikawa.ipldashboard.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.takumiyoshikawa.ipldashboard.model.Match;
import com.takumiyoshikawa.ipldashboard.model.Team;
import com.takumiyoshikawa.ipldashboard.repositroy.MatchRepository;
import com.takumiyoshikawa.ipldashboard.repositroy.TeamRepository;

@RestController
@CrossOrigin
public class TeamController {

    private TeamRepository teamRepository;
    private MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName) {
        Team team = this.teamRepository.findByTeamName(teamName);
        team.setMatches(this.matchRepository.findLatestMatchesByTeam(teamName, 4));

        return team;
    }

    @GetMapping("/team/{teamName}/matches")
    public List<Match> getMatchForTeam(@PathVariable String teamName, @RequestParam int year) {
        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year, 12, 31);

        return this.matchRepository.getMatchesByTeamBetweenDates(teamName, startDate, endDate);
    };
}
