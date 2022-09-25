// first lesson

// console.log("I love pizza");
// console.log("I am soooo fat!")

// window.alert("because I really love pizza")

// one line comment

/* multi
line 
comment
*/


// //second lesson:
// let firstName ="Bro";
// let age = 21;
// let student= true;

// console.log(firstName);
// console.log("You are", age, "years old");
// console.log("Enrolled:", student);

// document.getElementById("p1").innerHTML = "Hello " + firstName;
// document.getElementById("p2").innerHTML = "You are " + age + " years old."
// document.getElementById("p3").innerHTML = "Enrollment status: " + student


//third lesson: 

// let students = 20;

// students = students +1;

// students *= 2;
// console.log(students)


// //forth lesson:

// // let username = window.prompt("What's your name?");
// // console.log(username);
// let username;
// document.getElementById("myButton").onclick = () => {
//     username = document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myLabel").innerHTML= "Hello " + username
// }


//fifth lesson:

// let age = window.prompt("quel age as tu? ");

// console.log(typeof age);

// age = Number(age)
// age += 1;

// console.log(typeof age);
// console.log("Congrats! You are",age, "years old.");36


// let x;
// let y;
// let z;

// x = Number("3.14");
// y= String(3.14)
// z = Boolean("")

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


// //sixth lesson

// const PI = 3.14159;

// let radius;
// let circumference;

// radius = window.prompt("What is the radius?");
// radius = Number(radius);

// // PI = 50;

// circumference = 2*PI*radius;

// console.log("The circumference of your circle is: " + circumference);



//seventh lesson;

// let x;
// let y = 5;
// let z = 9;
// let maximum;
// let minimum;


// x = Math.round(x);
// x = Math.floor(x)
// x = Math.ceil(x);
// x = Math.pow(x,2)
// x = Math.sqrt(x)
// x = Math.abs(x)

// maximum = Math.max(x,y,z);
// minimum = Math.min(x,y,z);

// x = Math.PI;

// console.log(x);


// eighth lesson: 

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



