package com.techtask.game;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rpsgame")
@CrossOrigin(origins = {"*"})
public class GameController {
    
    private final AtomicLong counter = new AtomicLong();
    private final AtomicLong user = new AtomicLong();
    private static List<RPSGame> rpsGames = new ArrayList<>();
    
    @PostMapping("/game")
    public RPSGame rpsGame (@RequestBody String userId) {
    
        RockPaperScissors rps = new RockPaperScissors();
        
        String[] playerMoves = rps.getMoves();
        String winner = rps.getWinner(playerMoves);
            
        RPSGame rpsGame = new RPSGame(counter.incrementAndGet(), getUserID(userId), playerMoves[0], playerMoves[1], winner);
        addGame(rpsGame);
        return rpsGame;
    }
    
    @GetMapping("/games")
    public List<RPSGame> rpsGames () {
        
        return rpsGames;
        
    }
    
    @GetMapping("/mygames/{id}")
    public List<RPSGame> myGames (@PathVariable long id) {
        
        if(id == 0) return null;
        
        List<RPSGame> myGameList = rpsGames.stream()
                .filter(game -> game.getUserId() == id)
                .collect(Collectors.toList());
                
        return myGameList;
        
    }
    
    private long getUserID(String userId){
        
        if(userId == null || userId.equals("0")) return user.incrementAndGet();
        
        return Long.parseLong(userId);
        
    }
    
    private void addGame(RPSGame rpsGame){
        
        rpsGames.add(rpsGame);
        
    }
    
}
