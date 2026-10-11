const cars = [
  { name: "Hyundai Creta", type: "SUV", price: 2800 },
  { name: "Maruti Baleno", type: "Hatchback", price: 1600 },
  { name: "Honda City", type: "Sedan", price: 2400 },
  { name: "Toyota Innova Crysta", type: "MUV", price: 3600 },
  { name: "Kia Seltos", type: "SUV", price: 3000 },
  { name: "Maruti Swift", type: "Hatchback", price: 1400 }
];

const list = document.getElementById("car-list");
const searchBox = document.getElementById("search");

function showCars(items) {
  list.innerHTML = "";
  items.forEach(function (car) {
    const div = document.createElement("div");
    div.className = "car";
    div.innerHTML =
      "<div><strong>" + car.name + "</strong><br>" + car.type +
      " | Rs. " + car.price + " per day</div>" +
      "<button>Book Now</button>";
    list.appendChild(div);
  });
}

searchBox.addEventListener("input", function () {
  const text = searchBox.value.toLowerCase();
  const result = cars.filter(function (car) {
    return car.name.toLowerCase().includes(text) ||
           car.type.toLowerCase().includes(text);
  });
  showCars(result);
});

showCars(cars);
