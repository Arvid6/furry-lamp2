// JavaScript Document
function coliCheck(player, shapeB) {
	"use strict";
	//Skapar vektorerna att gämföra med
	let	vX = (player.x + (player.width / 2)) - (shapeB.x + (shapeB.width / 2)),
		vY = (player.y + (player.height / 2)) - (shapeB.y + (shapeB.height / 2)),
	//Lägger till hälften av deras width och height i en variabel
		widths = (player.width / 2) + (shapeB.width / 2),
        heights = (player.height / 2) + (shapeB.height / 2),
		coliDir = null;

    //Om vX och vY är mindre än spelarens och boxens höjd/läng och kordinater betyder det att det är collision
    if (Math.abs(vX) < widths && Math.abs(vY) < heights) {
        //Vilket sida det är på (top,botten,höger,vänster)
        let oX = widths - Math.abs(vX),
            oY = heights - Math.abs(vY);
        if (oX >= oY) {
            if (vY > 0) {
                coliDir = "t";
                player.y += oY;
            } 
			else {
                coliDir = "b";
                player.y -= oY;
            }
        } 
		else {
            if (vX > 0) {
                coliDir = "h";
                player.x += oX;
            } 
			else {
                coliDir = "v";
                player.x -= oX;
            }
        }
    }
    return coliDir;
}

