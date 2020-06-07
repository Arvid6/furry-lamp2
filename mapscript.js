//Alla funktioner är fyllda med instuktioner på hur levlarna ska byggas
function level1(){
	player.x=start1;//Lägger toll kordinaterna för startpositionen
	lowin.push({
		x: 810,
		y: 300,
		width: 20,
		height: 20,
		color: 'limegreen',
		effect: 'win',
		});
	//Boxar
	boxes.push({//Vänster box
		x: -60,
		y: 0,
		width: 70,
		height: height,
	});
	boxes.push({//Höger box
		x: width - 10,
		y: 0,
		width: 60,
		height: height,
	});
	boxes.push({//Botten box
		x: 0,
		y: height - 10,
		width: width,
		height: 50,
	});
	boxes.push({//Tak box
		x: 0,
		y: 0,
		width: width,
		height: 10,
	});
	boxes.push({
		x: 400,
		y: 400,
		width: 260,
		height: 15,
	});
	boxes.push({
		x: 220,
		y: 450,
		width: 80,
		height: 30,
	});
	boxes.push({
		x: 380,
		y: 520,
		width: 90,
		height: 100,
	});
	boxes.push({
		x: 740,
		y: 330,
		width: 160,
		height: 40,
	});
}

function level2(){
	player.x=start2;
	lowin.push({
		x: 810,
		y: 300,
		width: 20,
		height: 20,
		color: 'limegreen',
		effect: 'win',
		});
	lowin.push({
		x: 10,
		y: 580,
		width: 210,
		height: 10,
		color: 'red',
		effect: 'lose',
		});
	lowin.push({
		x: 580,
		y: 340,
		width: 20,
		height: 60,
		color: 'red',
		effect: 'lose',
		});
	boxes.push({
		x: 580,
		y: 400,
		width: 120,
		height: 15,
	});
	boxes.push({
		x: 400,
		y: 400,
		width: 60,
		height: 15,
	});
	boxes.push({
		x: 220,
		y: 450,
		width: 80,
		height: 1000,
	});
	boxes.push({
		x: 380,
		y: 520,
		width: 90,
		height: 1000,
	});
	boxes.push({
		x: 740,
		y: 330,
		width: 160,
		height: 40,
	});
}

function level3(){
	player.x=start3;
	lowin.push({
		x: 810,
		y: 410,
		width: 20,
		height: 20,
		color: 'limegreen',
		effect: 'win',
	});
	lowin.push({
		x: 560,
		y: 10,
		width: 10,
		height: 400,
		color: 'red',
		effect: 'lose',
	});
	lowin.push({
		x: 560,
		y: 480,
		width: 10,
		height: 20,
		color: 'red',
		effect: 'lose',
	}); 
	boxes.push({
		x: 130,
		y: 550,
		width: 140,
		height: 1000,
	});
	boxes.push({
		x: 450,
		y: 500,
		width: 300,
		height: 1000,
	});
	boxes.push({
		x: 750,
		y: 440,
		width: 140,
		height: 1000,
	});
}

function level4(){
	player.x=start4;
	lowin.push({
		x: 810,
		y: 140,
		width: 20,
		height: 20,
		color: 'limegreen',
		effect: 'win',
	});
	lowin.push({
		x: 220,
		y: 580,
		width: 520,
		height: 10,
		color: 'red',
		effect: 'lose',
	}); 
	boxes.push({
		x: 300,
		y: 300,
		width: 100,
		height: 10,
	});
	boxes.push({
		x: 160,
		y: 340,
		width: 60,
		height: 10000,
	});
	boxes.push({
		x: 550,
		y: 250,
		width: 100,
		height: 90,
	});
	boxes.push({
		x: 740,
		y: 180,
		width: 160,
		height: 10000,
	});
	boxes.push({
		x: 140,
		y: 550,
		width: 20,
		height: 10,
	});
	boxes.push({
		x: 10,
		y: 475,
		width: 20,
		height: 10,
	});
	boxes.push({
		x: 140,
		y: 400,
		width: 20,
		height: 10,
	});
}

function level5(){
	player.x=start5; 
	lowin.push({
		x: 810,
		y: 140,
		width: 20,
		height: 20,
		color: 'limegreen',
		effect: 'win',
	});
	lowin.push({
		x: 10,
		y: 580,
		width: 620,
		height: 10,
		color: 'red',
		effect: 'lose',
	}); 
	boxes.push({
		x: 550,
		y: 440,
		width: 60,
		height: 20,
	});
	boxes.push({
		x: 760,
		y: 500,
		width: 60,
		height: 20,
	});
	boxes.push({
		x: 630,
		y: 550,
		width: 60,
		height: 200,
	});
	boxes.push({
		x: 400,
		y: 390,
		width: 120,
		height: 20,
	});
	boxes.push({
		x: 350,
		y: 360,
		width: 60,
		height: 50,
	});
	boxes.push({
		x: 650,
		y: 360,
		width: 100,
		height: 20,
	});
	boxes.push({
		x: 750,
		y: 300,
		width: 100,
		height: 20,
	});
	boxes.push({
		x: 900,
		y: 240,
		width: 80,
		height: 20,
	});
	boxes.push({
		x: 430,
		y: 290,
		width: 90,
		height: 20,
	});
	boxes.push({
		x: 630,
		y: 230,
		width: 100,
		height: 20,
	});
}

function level6(){
	player.x=start6;
	lowin.push({
		x: 1170,
		y: 220,
		width: 20,
		height: 20,
		color: 'limegreen',
		effect: 'win',
	});
	lowin.push({
		x: 230,
		y: 580,
		width: 870,
		height: 10,
		color: 'red',
		effect: 'lose',
	}); 
	boxes.push({
		x: 1100,
		y: 250,
		width: 160,
		height: 10000,
	});
	boxes.push({
		x: 150,
		y: 530,
		width: 80,
		height: 300,
	});
	boxes.push({
		x: 300,
		y: 470,
		width: 60,
		height: 20,
	});
	boxes.push({
		x: 300,
		y: 470,
		width: 60,
		height: 20,
	});
	boxes.push({
		x: 467,
		y: 403,
		width: 60,
		height: 20,
	});
	boxes.push({
		x: 270,
		y: 330,
		width: 60,
		height: 20,
	});
	boxes.push({
		x: 470,
		y: 280,
		width: 60,
		height: 20,
	});
	boxes.push({
		x: 710,
		y: 230,
		width: 60,
		height: 20,
	});
	boxes.push({
		x: 893,
		y: 230,
		width: 60,
		height: 20,
	});
}

function level7(){
	player.x=start7;
	lowin.push({
		x: 1430,
		y: 120,
		width: 20,
		height: 20,
		color: 'limegreen',
		effect: 'win',
	});
	lowin.push({
		x: 310,
		y: 570,
		width: 310,
		height: 20,
		color: 'red',
		effect: 'lose',
	});
	lowin.push({
		x: 890,
		y: 570,
		width: 450,
		height: 20,
		color: 'red',
		effect: 'lose',
	}); 
	boxes.push({
		x: 1340,
		y: 150,
		width: 160,
		height: 10000,
	});
	boxes.push({
		x: 10,
		y: 550,
		width: 300,
		height: 10000,
	});
	boxes.push({
		x: 620,
		y: 550,
		width: 270,
		height: 10000,
	});
	boxes.push({
		x: 360,
		y: 480,
		width: 30,
		height: 20,
	});
	boxes.push({
		x: 940,
		y: 520,
		width: 90,
		height: 20,
	});
	boxes.push({
		x: 1320,
		y: 540,
		width: 20,
		height: 10,
	});
	boxes.push({
		x: 1330,
		y: 470,
		width: 10,
		height: 10,
	});
	boxes.push({
		x: 1330,
		y: 390,
		width: 10,
		height: 10,
	});
	boxes.push({
		x: 1150,
		y: 360,
		width: 40,
		height: 10,
	});
	boxes.push({
		x: 1330,
		y: 290,
		width: 10,
		height: 10,
	});
	boxes.push({
		x: 1170,
		y: 240,
		width: 50,
		height: 10,
	});
	boxes.push({
		x: 1060,
		y: 190,
		width: 50,
		height: 20,
	});
}

function level8(){
	player.x=start8;
	lowin.push({
		x: 1430,
		y: 120,
		width: 20,
		height: 20,
		color: 'limegreen',
		effect: 'win',
	});
	lowin.push({
		x: 10,
		y: 570,
		width: 610,
		height: 20,
		color: 'red',
		effect: 'lose',
	});
	lowin.push({
		x: 890,
		y: 570,
		width: 450,
		height: 20,
		color: 'red',
		effect: 'lose',
	});
	lowin.push({
		x: 650,
		y: 450,
		width: 30,
		height: 30,
		color: 'red',
		effect: 'lose',
	});  
	boxes.push({
		x: 1340,
		y: 150,
		width: 160,
		height: 70,
	});
	boxes.push({
		x: 620,
		y: 550,
		width: 270,
		height: 10000,
	});
	boxes.push({
		x: 480,
		y: 480,
		width: 30,
		height: 20,
	});
	boxes.push({
		x: 340,
		y: 340,
		width: 30,
		height: 20,
	});
	boxes.push({
		x: 550,
		y: 270,
		width: 300,
		height: 20,
	});
	boxes.push({
		x: 1140,
		y: 520,
		width: 90,
		height: 20,
	});
	boxes.push({
		x: 940,
		y: 460,
		width: 90,
		height: 20,
	});
	boxes.push({
		x: 580,
		y: 413,
		width: 90,
		height: 20,
	});
	boxes.push({
		x: 1040,
		y: 190,
		width: 70,
		height: 20,
	});
}

function level9(){
	player.x=start9;
	lowin.push({
		x: 1450,
		y: 80,
		width: 20,
		height: 20,
		color: 'limegreen',
		effect: 'truewin',
	});
	lowin.push({
		x: 680,
		y: 130,
		width: 50,
		height: 460,
		color: 'red',
		effect: 'lose',
	});
	lowin.push({
		x: 350,
		y: 580,
		width: 380,
		height: 10,
		color: 'red',
		effect: 'lose',
	});  
	boxes.push({
		x: 140,
		y: 520,
		width: 100,
		height: 70,
	});
	boxes.push({
		x: 310,
		y: 350,
		width: 40,
		height: 240,
	});
	boxes.push({
		x: 300,
		y: 440,
		width: 10,
		height: 13,
	});
	boxes.push({
		x: 150,
		y: 400,
		width: 70,
		height: 20,
	});
	boxes.push({
		x: 40,
		y: 470,
		width: 30,
		height: 20,
	});
	boxes.push({
		x: 550,
		y: 330,
		width: 90,
		height: 30,
	});
	boxes.push({
		x: 600,
		y: 260,
		width: 90,
		height: 30,
	});
	boxes.push({
		x: 670,
		y: 190,
		width: 10,
		height: 10,
	});
	boxes.push({
		x: 745,
		y: 130,
		width: 200,
		height: 10,
	});
	boxes.push({
		x: 1235,
		y: 110,
		width: 200,
		height: 10,
	});
}