width = 1000;
height = 800;
playerX = width / 2;
playerY = height / 2;
VX = 0;
VY = 0;
ctx;
function startGame() {
    canvas = document.getElementById('Game_Canvas_ID');
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000 / 60);
}

function keyPush(evt) {
    switch (evt.keyCode) {
        case 37:
            VX = -1;
            VY = 0;
            break;
        case 38:
            VX = 0;
            VY = -1;
            break;
        case 39:
            VX = 1;
            VY = 0;
            break;
        case 40:
            VX = 0;
            VY = 1;
            break;
    }
}

function game() {
    playerX += VX;
    playerY += VY;

    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.fillRect(playerX,playerY,50,50);
}