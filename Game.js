width = 800;
height = 800;

playerW = 20;
playerH = playerW;

playerX = width / 2;
playerY = height / 2;

VX = 0;
VY = 0;

appleX = 0;
appleY = 0;

appleW = 20;
appleH = appleW;

tail = [];
len = 3;

function startGame() {
    canvas = document.getElementById('Game_Canvas_ID');
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000 / 10);
    newApplePos();
    newTail();
}

function newTail() {
    tail = [];
    for (var i = 0; i < len; i++) {
        tail.push({ x: playerX, y: playerY });
    }
}

function newApplePos() {
    appleX = Math.floor(Math.random() * (width / appleW)) * appleW;
    appleY = Math.floor(Math.random() * (height / appleH)) * appleH;
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
    playerX += VX * playerW;
    if (playerX >= width)
        playerX = 0;
    if (playerX < 0)
        playerX = width - playerW;

    playerY += VY * playerH;
    if (playerY >= height)
        playerY = 0;
    if (playerY < 0)
        playerY = height - playerH;

    if (playerX == appleX && playerY == appleY) {
        newApplePos();
        tail.push({ x: playerX, y: playerY });
        len++;
    }

    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    for (var i = 0; i < len; i++) {
        ctx.fillRect(tail[i].x, tail[i].y, playerW, playerH);
    }
    for (var i = len - 2; i >= 0; i--) {
        tail[i + 1] = tail[i];
    }
    for (var i = 1; i < len; i++) {
        if (tail[i].x == playerX && tail[i].y == playerY) {
            len = 3;
            newTail();
            break;
        }
    }
    tail[0] = { x: playerX, y: playerY };

    ctx.fillStyle = "red";
    ctx.fillRect(appleX, appleY, appleW, appleH);
}