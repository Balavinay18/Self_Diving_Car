const canvas = document.getElementById("myCanvas");
canvas.width = 400; 

const ctx = canvas.getContext("2d");

// Fixed 'car' to 'Car'
const car = new Car(200, 100, 30, 50);
car.draw(ctx);

animate();

function animate(){
    car.update();
    canvas.height = window.innerHeight;

    car.draw(ctx);
    requestAnimationFrame(animate);
}