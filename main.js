const canvas = document.getElementById("myCanvas");
canvas.width = 400;
const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width * 0.9); // laneCount defaults to 4
const car = new Car(road.getLaneCenter(1), 100, 30, 50);

function animate() {
    car.update();
    canvas.height = window.innerHeight;
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate);
}

animate();