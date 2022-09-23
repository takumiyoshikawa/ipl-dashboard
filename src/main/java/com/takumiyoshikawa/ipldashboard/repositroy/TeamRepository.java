package com.takumiyoshikawa.ipldashboard.repositroy;

import org.springframework.data.repository.CrudRepository;

import com.takumiyoshikawa.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {
    Team findByTeamName(String teamName);
}
