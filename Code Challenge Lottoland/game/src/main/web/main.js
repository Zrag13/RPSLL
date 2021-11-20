$(document).ready(() => {
    
    let userId = "0";
    const imgsrc = "img/";
    const imgfrmt = ".png";
    
    $("#playRound").click( () => {
        
        playNewRound();
        getUserGames();
        
    })
    
    $("#restart").click( () => {
        restarGame();
    })
    
    $("#statistics").click( () => {
        window.location.href = 'statistics.html';
    })
    
    function playNewRound() {
        
        $.ajax({
            url: "http://localhost:8080/rpsgame/game",
            type: "POST",
            data: userId.toString(),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            cache: false,
            timeout: 3000,
            success: (game) => {
                console.log(game);
                console.log(game.player1);
                $("#player1").html(game.player1.toUpperCase());
                $("#player2").html(game.player2.toUpperCase());
                $("#result").html(game.winner.toUpperCase());
                $("#player1img").attr("src", `${imgsrc}${game.player1}${imgfrmt}`);
                $("#player2img").attr("src", `${imgsrc}${game.player2}${imgfrmt}`);
                userId = game.userId;
            },
            failure: (error) => {
                console.log(error.message);
            }
        })
        
    }
    
    function getUserGames() {
        
        $.ajax({
            url: `http://localhost:8080/rpsgame/mygames/${userId}`,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            cache: false,
            timeout: 3000,
            success: (games) => {
                console.log(games);
                $("#nRounds").html(Object.keys(games).length);
                let data = "";
                let count = 0;
                games.forEach(element => {
                    count++;
                    data+= `
                        <tr>
                            <th scope="row">${count}</td>
                            <td>${element.player1}</td>
                            <td>${element.player2}</td>
                            <td>${element.winner}</td>
                        <tr>
                    `
                });
                
                $("#playedGames").html(data);
                
            },
            failure: (error) => {
                console.log(error.message);
            }
        })
        
    }
    
    function restarGame() {
        
        $("#playedGames").html("");
        $("#nRounds").html("");
        $("#player1").html("");
        $("#player2").html("");
        $("#result").html("");
        $("#player1img").attr("src", "");
        $("#player2img").attr("src", "");
        userId = "0";
        
    }
    
})