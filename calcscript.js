//start
window.addEventListener("load", function () {
	update();//Update körs när hemsidan har laddat klart,
});

canvas.width = width;
canvas.height = height;

function update() {
	mc.play();
	//If satser som startas när key[tangenten] blir true
	if (keys[16] && (keys[39] || keys[68])) {
		if(boost === 0 && boostTime !== seconds){//Boost till höger
			boost = 1;
			boostTime = seconds;
			player.velX += 40;
			if(timerstart == 0){
				timerstart = 1;
				timer();
			}
		}
	}

	if (keys[16] && (keys[37] || keys[65])) {
		if(boost === 0 && boostTime !== seconds){//vänster
			boost = 1;
			boostTime = seconds;
			player.velX -= 40;
			if(timerstart == 0){
				timerstart = 1;
				timer();
			}
		}
	}
	if (keys[39] || keys[68]) {
		if (player.velX < player.speed) {//Gå åt höger
			player.velX++;
			if(timerstart == 0){
				timerstart = 1;
				timer();
			}
		}
	}
	if (keys[37] || keys[65]) {
		if (player.velX > -player.speed) {//Gå åt vänster
			player.velX--;
			if(timerstart == 0){
				timerstart = 1;
				timer();
			}
		}
	}
	if(keys[82]){
		window.location.href = window.location.href;//Den här delen av koden används för att ladda om sidan.
	}
	if ((keys[38] && !keys[88]) || (keys[87] && !keys[88]) || (keys[32] && !keys[88])) {//Hoppa
		if (!player.jumping && player.grounded) {
			player.jumping = true;
			player.grounded = false;
			player.velY = -player.speed * 2;
			if(timer == 0){
				timer();
			}
		}
	}
	if ((keys[38] && keys[88]) || (keys[87] && keys[88]) || (keys[32]&& keys[88])) {
		if (!player.jumping && player.grounded) {
			player.jumping = true;
			player.grounded = false;
			player.velY = -player.speed * 1.5;
			if(timer == 0){
				timer();
			}
		}
	}

    player.velX *= friction;
    player.velY += gravity;

    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
	
	player.grounded = false;
	for (var i = 0; i < boxes.length; i++) {//Ritar platformar och väggar//Den här skulle kunna skapa problem med systemet jag använder just nu och borde inte användas på större projekt men det funkar i det här fallet, Vad som skulle kunna skapa problem är att när jag logga loopen så sa den att den kördes 100+ gånger i typ 0.1 sekunder PÅ FÖRSTA BANAN vilket skulle kunna skapa problem, så tagga behöva reworka allt om jag gör spelet större
			ctx.fillStyle = '#000000';
			ctx.fillRect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
			var dir = coliCheck(player, boxes[i]);

			if (dir === "h" || dir === "v") {
				player.velX = 0;
				player.jumping = false;
			} else if (dir === "b") {
				player.grounded = true;
				player.jumping = false;
			} else if (dir === "t") {
				player.velY *= -1;
			}
		}

if(player.grounded){//Styr så att karaktären inte faller igenom saker och ting. genom att kolla när man är på marken och då göra ens y fart till 0
	player.velY = 0;
	boost = 0;
    }
   
    player.x += player.velX;
    player.y += player.velY;
	
	//Ritar ens karaktär
	ctx.fill();
 
	ctx.fillStyle = player.img;
	ctx.fillRect(player.x, player.y, player.width, player.height);

	 for(var j = 0; j < lowin.length; j++){
		ctx.save();
		ctx.fillStyle = lowin[j].color;
		ctx.fillRect(lowin[j].x, lowin[j].y, lowin[j].width, lowin[j].height);
		ctx.restore();

		//Lowin collision
		if(powCheck(player, lowin[j])){
			if (lowin[j].effect==='win'){

				lowin.splice(0, lowin.length)//Tar bort alla gamla boxes och lowins 
				boxes.splice(4, boxes.length);

				level ++;
				player.y=500;
				text.textContent = "Level " + level;

				switch (level) { //switch statements för att ladda barnonra.
					case 1:
						level1();
						break;
					case 2:
						level2();
						break;
					case 3:
						level3();
						break;
					case 4:
						level4();
						break;
					case 5:
						level5();
						break;
					case 6:
						level6();
						break;
					case 7:
						level7();
						break;
					case 8:
						level8();
						break;
					case 9:
						level9();
						break;
			
					default:
						break;
				}
			}
			else if (lowin[j].effect==='truewin'){
				alert("You Win, Your time: " + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" + (mseconds > 9 ? mseconds : "0" + mseconds));
				clearTimeout(t);
				window.location.href = window.location.href;
			}


			else if (lowin[j].effect==='lose'){//Switch statements för att flytta ens kraktär när den dör.
				mj.play();
				player.y = 600;
				switch (level) {
					case 1:
						player.x = start1;
						break;
					case 2:
						player.x = start2;
						break;
					case 3:
						player.x = start3;
						break;
					case 4:
						player.x = start4;
						break;
					case 5:
						player.x = start5;
						break;
					case 6:
						player.x = start6;
						break;
					case 7:
						player.x = start7;
						break;
					case 8:
						player.x = start8;
						break;
					case 9:
						player.x = start9;
						break;
			
					default:
						break;
				}
			}
	 	}
	}
    requestAnimationFrame(update);//requestanimationframe gör så att spelet uppdateras så fort det kan, varje gång det uppdateras kallas en frame. 
}

function add() {//Timer som håller koll på hur lång tid man har tagit på sig samt ser till så att boost bara kan användas 1 gång varje sekund
    mseconds++;
    if (mseconds >= 60) {
        mseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
    }
    
    h2.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" + (mseconds > 9 ? mseconds : "0" + mseconds);
    timer();
}
function timer() {
    t = setTimeout(add, 10);
}

if(level == 1){
	level=1;
	level1();
}

