const express = require("express");
const cartItemsRoutes = express.Router();

const cartItems = [
  {
    id: 0,
    product: "spinach",
    price: 3.99,
    quantity: 1
  },
  {
    id: 1,
    product: "bananas",
    price: 0.55,
    quantity: 4
  },
  {
    id: 2,
    product: "bluebs",
    price: 3.99,
    quantity: 1
  },
  {
    id: 3,
    product: "sweet onion",
    price: 0.99,
    quantity: 1
  }
];
let nextId = 4;

//create an endpoint that responds to a request with the full array of cartItems
// send JSON
cartItemsRoutes.get("/cart-items", (request, response) => {
  response.json(cartItems);
});

//create an endpoint that gets a cartItem by id
cartItemsRoutes.get("/cart-items/:id", (request, response) => {
  //save the id parameter as a number
  let id = parseInt(request.params.id);
  //using array.find()
  let foundCartItem = cartItem.find(cartItem => cartItem.id === id);
  if (foundCartItem) {
    response.json(foundCartItem);
    response.status(200);
    response.send(`OK'd by this ID: ${id}`);
  } else {
    response.status(404);
    response.send(`No cart-item by this ID: ${id}`);
  }
});
// create an endpoint for POST of cart-item
cartItemsRoutes.post("/cartItems", (request, response) => {
  let newCartItem = request.body;
  //add the next ID to the newCartItem
  newCartItem.id = nextId;
  // add cart-item to the cart-item array
  cartItems.push(newCartItem);
  response.status(201);
  response.json(cartItems);
});

//create an endpoint for PUT of cartItem (updating cartItem)
cartItemsRoutes.put("/cartItems/:id", (request, response) => {
  //get the id parameter
  let id = parseInt(request.params.id);
  // create an object from the body of the request
  let updatedCartItem = request.body;
  //add the id property to the updatedFood
  updatedCartItem.id = id;
  // increment our nextId variable
  nextId++;
  //find cartItem
  let index = cartItem.findIndex(cartItem => cartItem.id === id);
  if (index >= 0) {
    // remove the old cartItem and add the updatedCartItem
    cartItems.splice(index, 1, updatedCartItem);
    response.send(cartItem);
  } else {
    response.status(404);
    response.send(`No cartItem by this ID: ${id}`);
  }
});
// create an endpoint for DELETE of cartItems
cartItemsRoutes.delete("/cartItems/:id", (request, response) => {
  //get the id parameter
  let id = parseInt(request.params.id);
  // find the cartItem's index
  let index = cartItems.findIndex(cartItem => cartItem.id === id);
});

module.exports = cartItemsRoutes;
