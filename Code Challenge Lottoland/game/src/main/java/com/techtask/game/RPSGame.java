package com.techtask.game;

public class RPSGame {
    
    private final long gameId;
    private final long userId;
    private final String player1;
    private final String player2;
    private final String winner;
     
    public RPSGame(long gameId, long userId, String player1, String player2, String winner) {
        this.gameId = gameId;
        this.userId = userId;
        this.player1 = player1;
        this.player2 = player2;
        this.winner = winner;
    }

    public long getGameId() {
        return gameId;
    }

    public long getUserId() {
        return userId;
    }

    public String getPlayer1() {
        return player1;
    }

    public String getPlayer2() {
        return player2;
    }

    public String getWinner() {
        return winner;
    }
    
    
    
}
