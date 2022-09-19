package com.takumiyoshikawa.ipldashboard.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String teamName;
    private long totalMatch;
    private long totalWin;

    public Team(String teamName, long totalMatch) {
        this.teamName = teamName;
        this.totalMatch = totalMatch;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public long getTotalMatch() {
        return totalMatch;
    }

    public void setTotalMatch(long totalMatch) {
        this.totalMatch = totalMatch;
    }

    public long getTotalWin() {
        return totalWin;
    }

    public void setTotalWin(long totalWin) {
        this.totalWin = totalWin;
    }

    @Override
    public String toString() {
        return "Team [teamName=" + teamName + ", totalMatch=" + totalMatch + ", totalWin=" + totalWin + "]";
    }

    
}
