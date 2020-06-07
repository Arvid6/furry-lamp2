// JavaScript Document
function powCheck(player, lowin) {
	"use strict";
	let	vX = (player.x + (player.width / 2)) - (lowin.x + (lowin.width / 2)),
		vY = (player.y + (player.height / 2)) - (lowin.y + (lowin.height / 2)),
		pwidths = (player.width / 2.5) + (lowin.width / 2),
		pheights = (player.height / 2) + (lowin.height / 2),
		powDir = null;

    if (Math.abs(vX) < pwidths && Math.abs(vY) < pheights) {
			powDir = true;
		}
    return powDir;
}