package com.techtask.game;

import java.util.Random;

public class RockPaperScissors {
    
    public String player1, player2, winner;
    private static String[] moves = new String[] {"rock", "paper", "scissors"};
    
    public static void main(String[] args) {
        
    }
    
    public String[] getMoves(){
        
        String player1Move = randomMove();
        String player2Move = "rock";
        
        return new String[]{player1Move, player2Move};
        
    }
    
    private String randomMove(){
        
        return moves[(new Random().nextInt(moves.length))];
        
    }
    
    public String getWinner(String[] playerMoves){
        
        if(playerMoves[0].equals(playerMoves[1])) return "Draw";
        
        if((playerMoves[0].equals("rock") && playerMoves[1].equals("scissors"))
            || (playerMoves[0].equals("paper") && playerMoves[1].equals("rock"))
            || (playerMoves[0].equals("scissors") && playerMoves[1].equals("paper"))) return "Player 1 wins";
        
        return "Player 2 wins";
    }
    
}
