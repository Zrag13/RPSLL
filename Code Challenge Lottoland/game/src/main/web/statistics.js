$(document).ready(() => {
    
    const player1winner = "Player 1 wins";
    const player2winner = "Player 2 wins";
    
    getGames();
    
    $("#game").click(() =>{
        window.location.href = 'index.html';
    })
    
    function getGames() {
        
        $.ajax({
            url: `http://localhost:8080/rpsgame/games`,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            cache: false,
            timeout: 3000,
            success: (games) => {
                console.log(games);
                $("#rounds").html(Object.keys(games).length);
                let player1wins = 0;
                let player2wins = 0;
                let draws = 0;
                games.forEach(element => {
                    
                    if(element.winner == player1winner) {
                        player1wins++;
                    }else if(element.winner == player2winner) {
                        player2wins++;
                    }else {
                        draws++;
                    }
                    
                });
                
                $("#player1").html(player1wins);
                $("#player2").html(player2wins);
                $("#draws").html(draws);
                
            },
            failure: (error) => {
                console.log(error.message);
            }
        })
        
    }
    
})