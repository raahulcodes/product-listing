// product inventory
let products = [
    {img:"", name: "Wireless Bluetooth Headphones", category: "Electronics", price: 1499 , description: "Comfortable wireless headphones with noise cancellation and 30-hour battery life."},
    {img:"", name: "Smart Fitness Watch", category: "Accessories", price: 2999 , description: "Smartwatch with heart-rate monitoring, step tracking, and sleep analysis."},
    {img:"", name: "Premium Cotton T-Shirt", category: "Clothing", price: 800 , description: "Soft, breathable cotton T-shirt suitable for everyday wear."},
    {img:"", name: "Stainless Steel Water Bottle", category: "Home and Kitchen", price: 499 , description: "Durable, leak-proof water bottle with a 1-litre capacity."},
    {img:"", name: "Mechanical Gaming Keyboard", category: "Electronics", price: 3499 , description: "RGB backlit mechanical keyboard with responsive keys and a durable design."}
];

// selecting the product container
let product_container = document.querySelector(".product-container");

// creating an index for the product
let product_index = 0;

// selecting the buttons to apply event listeners
let add_product = document.querySelector(".add-product");
let remove_product = document.querySelector(".remove-product");
let reset = document.querySelector(".reset-product");