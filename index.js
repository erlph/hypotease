let canvasElement = document.getElementById("myCanvas");
let context = canvasElement.getContext("2d");

class Triangle {
    constructor(sideA, sideB, angle1, angle2) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.angle1 = angle1;
        this.angle2 = angle2;
    }

    drawTriangle(context) {
        // the triangle
        let radians1 = this.angle1 * (Math.PI/180);
        let radians2 = this.angle2 * (Math.PI/180); 
        let x1 = 100 + Math.cos(radians1) * this.sideA;
        let y1 = 100 + Math.sin(radians1) * this.sideA;

        let x2 = 100 + Math.cos(radians2) * this.sideB;
        let y2 = 100 + Math.sin(radians2) * this.sideB;

        context.beginPath();
        context.moveTo(100, 100);
     
        context.lineTo(x1, y1);
       
        context.lineTo(x2, y2);
        context.closePath();

        // the outline
        context.lineWidth = 8;
        context.strokeStyle = '#AA6C39';
        context.stroke();

        // the fill color
        context.fillStyle = "#A020F0";
        context.fill();
    }

}




let a;
let b;
let c;

let myTriangle = new Triangle(120,160,90,0)
myTriangle.drawTriangle(context)

document.getElementById("myButtonA").onclick = () => {
    a = Number(document.getElementById("myTextA").value);
    document.getElementById("enteredValueA").innerHTML = "The length of the side A is: " + a + " pixels";
    context.clearRect(0, 0, canvasElement.width, canvasElement.height)
    myTriangle = new Triangle(a,100,90,0)
    myTriangle.drawTriangle(context)
}

document.getElementById("myButtonB").onclick = () => {
    b = Number(document.getElementById("myTextB").value)
    document.getElementById("enteredValueB").innerHTML = "The length of the side B is: " + b + " pixels";
    context.clearRect(0, 0, canvasElement.width, canvasElement.height)
    myTriangle = new Triangle(a,b,90,0)
    myTriangle.drawTriangle(context)
}

document.getElementById("calculate").onclick = () => {
    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2))
    document.getElementById("result").innerHTML = "The length of the side C (The Hypotenuse) is: " + c.toFixed(2) + " pixels";

}



