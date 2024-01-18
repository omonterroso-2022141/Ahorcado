let canvas = document.getElementById('canva');
let canva = canvas.getContext("2d");

canva.beginPath();
canva.moveTo(150,350);
canva.lineTo(150,50);
canva.lineTo(300,50);
canva.lineTo(300,100);
canva.moveTo(200,340);
canva.lineTo(100,340);
canva.lineWidth = 20;
canva.strokeStyle = "#000";
canva.stroke();
canva.closePath();
