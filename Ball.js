class Ball{
    
    constructor(x,y,d,c){
        this.x=x
        this.y=y
        this.d=d
        this.c=c
        this.dirX=this.direccion();
        this.dirY=this.direccion();
        this.index;
        this.arr;
        this.speed=6  
    }

    draw(){   
        push()
        fill(this.c)
        ellipse(this.x, this.y, this.d, this.d)
        this.colisionPared() 
    }

    movimiento(){

        if(this.dirX===-1 )
        {
            // -X
            this.x+=this.dirX-this.speed
        }
        else{
            // X
            this.x+= this.dirX +this.speed
        }

         if(this.dirY===-1)
        {
            //Y
            this.y+=this.dirY-this.speed
        }
        else       
            //-Y
            this.y+=this.dirY+this.speed
    }

    colisionPared(){
        
        //colisión en eje X
        if(this.x+floor(this.d/2)+this.dirX+this.speed>=width || this.x-floor(this.d/2)+this.dirX-this.speed<=0)
            this.dirX=-this.dirX;

        //colisión en eje Y
        if(this.y+floor(this.d/2)+this.dirY+this.speed>=height || this.y-floor(this.d/2)+this.dirY-this.speed<=0)
            this.dirY=-this.dirY

    }

   colisionPelota(){

        for(let i=0;i<this.arr.length;i++)
        {
           
                var dx = this.x - this.arr[i].x;
                var dy = this.y - this.arr[i].y;
                var distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < floor(this.d/2) + floor(this.d/2)) {
                    
                    this.arr[i].dirX=-this.arr[i].dirX
                    this.arr[i].dirY=-this.arr[i].dirY

                    this.dirX=-this.dirX
                    this.dirY=-this.dirY
                }  
        }

    }

    direccion(){
       //dirección aleatoria de rebote
        return floor(random(2)) * 2 - 1
    }

}