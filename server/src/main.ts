// Load environment variables from .env file
import "dotenv/config";

// Check database connection
// Note: This is optional and can be removed if the database connection
// is not required when starting the application
import "../database/checkConnection";

// Import the Express application from ./app
import app from "./app";

// Get the port from the environment variables
const port = process.env.APP_PORT;

// Start the server and listen on the specified port
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err: Error) => {
    console.error("Error:", err.message);
  });
const datas = [
  {
    id: 1,
    type: "restaurant",
    name: "Sushi Palace",
    address: "123 av de la wild",
    minPrice: 200,
    maxPrice: 500,
    category: "asiatique",
    picture: "client/src/assets/images/JapaneseFood.jpg",
  },
  {
    id: 2,
    type: "restaurant",
    name: "Pizza Italia",
    address: "124 av de la wild",
    minPrice: 200,
    maxPrice: 500,
    category: "italien",
    picture: "client/src/assets/images/PizzaFood.jpg",
  },
  {
    id: 3,
    type: "restaurant",
    name: "Burger place",
    address: "125 av de la wild",
    minPrice: 200,
    maxPrice: 500,
    category: "italien",
    picture: "client/src/assets/images/FastFood.jpg",
  },
  {
    id: 4,
    type: "hostel",
    name: "Wild Hostel",
    address: "126 av de la wild",
    minPrice: 50,
    maxPrice: 200,
    category: "Appart",
    picture: "client/src/assets/images/AppartHotel.jpg",
  },
  {
    id: 5,
    type: "hostel",
    name: "Bedroom Hostel",
    address: "127 av de la wild",
    minPrice: 50,
    maxPrice: 200,
    category: "Palace",
    picture: "client/src/assets/images/HotelBedroom.jpg",
  },
  {
    id: 6,
    type: "hostel",
    name: "Palace Hostel",
    address: "128 av de la wild",
    minPrice: 50,
    maxPrice: 200,
    category: "Palace",
    picture: "client/src/assets/images/Palace.jpg",
  },
  {
    id: 7,
    type: "activity",
    name: "Rock Climbing",
    address: "129 av de la wild",
    minPrice: 30,
    maxPrice: 100,
    category: "Sport",
    picture: "client/src/assets/images/rock-climbing.jpg",
  },
  {
    id: 8,
    type: "activity",
    name: "Escape Game",
    address: "130 av de la wild",
    minPrice: 30,
    maxPrice: 100,
    category: "Loisir",
    picture: "client/src/assets/images/escape_game.jpg",
  },
  {
    id: 9,
    type: "activity",
    name: "Paintball",
    address: "131 av de la wild",
    minPrice: 30,
    maxPrice: 100,
    category: "Sport",
    picture: "client/src/assets/images/paintball.jpg",
  },
];

app.get("/api/restaurants", (req, res, next) => {
  const result = datas.filter((data) => data.type === "restaurant");
  res.json(result);
});
app.get("/api/hostels", (req, res, next) => {
  const result = datas.filter((data) => data.type === "hostel");
  res.json(result);
});
app.get("/api/activities", (req, res, next) => {
  const result = datas.filter((data) => data.type === "activity");
  res.json(result);
});
