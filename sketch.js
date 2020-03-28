

let arrBall=new Array() //arreglo para almacenar las pelotas que se generen
let ball //objeto pelota

function setup(){
	createCanvas(windowWidth, windowHeight);
	
}

function draw(){
		background('#000000')
		for(let i=0;i<arrBall.length;i++){
			arrBall[i].draw();
			arrBall[i].movimiento();
			arrBall[i].colisionPelota();
		}
	
}

//funcion listener del clic
function mouseClicked()
{
	//generación de pelota con color aleatorio rgb
	let colores =color(random(0, 255),random(0, 255),random(0, 255))
	ball=new Ball(mouseX,mouseY,30,colores);
	arrBall.push(ball);

	//actualización del arreglo para que el movimiento continúe
	for(let i=0;i<arrBall.length;i++)
	{
		arrBall[i].indice=i;
		arrBall[i].arr=arrBall;
		
	}
}



