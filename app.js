// product inventory
let products = [
    {img:"https://www.boat-lifestyle.com/cdn/shop/products/main2_b66dce6b-710d-49cb-9d1c-2bc8c9c0ab15_600x.png?v=1645698328", name: "Wireless Bluetooth Headphones", category: "Electronics", price: 1499 , description: "Comfortable wireless headphones with noise cancellation and 30-hour battery life."},
    {img:"https://m.media-amazon.com/images/I/61RADUe94LL._AC_UF1000,1000_QL80_.jpg", name: "Smart Fitness Watch", category: "Accessories", price: 2999 , description: "Smartwatch with heart-rate monitoring, step tracking, and sleep analysis."},
    {img:"https://cdn.yourdesignstore.in/uploads/yds/productImages/full/17802423443738b41f0d88-9ae0-49c7-b5a0-d23c638ed475.jpg", name: "Premium Cotton T-Shirt", category: "Clothing", price: 800 , description: "Soft, breathable cotton T-shirt suitable for everyday wear."},
    {img:"https://annamsshop.com/cdn/shop/files/premium-water-bottle-stainless-steel-2.png?v=1793456611&width=1445", name: "Stainless Steel Water Bottle", category: "Home and Kitchen", price: 499 , description: "Durable, leak-proof water bottle with a 1-litre capacity."},
    {img:"https://verityverse.in/cdn/shop/files/image_2026-08-03_20-06-35.webp?v=1785767869", name: "Mechanical Gaming Keyboard", category: "Electronics", price: 3499 , description: "RGB backlit mechanical keyboard with responsive keys and a durable design."}
];

// selecting the product container
let product_container = document.querySelector(".product-container");

// creating an index for the product
let product_index = 0;

// selecting the buttons to apply event listeners
let add_product = document.querySelector(".add-product");
let remove_product = document.querySelector(".remove-product");
let reset = document.querySelector(".reset-product");

// selecting the message
let message = document.querySelector(".message");

// creating click event for adding, removing and reset the profiles
add_product.addEventListener("click", function()
{
    if(product_index>=products.length)
    {
        message.innerText = "All Products Added";
        return;
    }

    // product card
    let product_card = document.createElement("div");
    product_card.setAttribute("class", "product-card");

    // image element for product
    let img = document.createElement("img");
    img.setAttribute("src", products[product_index].img);

    // name of the product
    let name = document.createElement("h2");
    name.innerText = products[product_index].name;

    // category of the product
    let category = document.createElement("h5");
    category.innerText = products[product_index].category;

    // name of the product
    let price = document.createElement("p");
    price.innerText = products[product_index].price;

    // description of the product
    let description = document.createElement("p");
    description.innerText = products[product_index].description;

    // appending the product card as a child to product container
    product_container.appendChild(product_card);

    // filling the product card
    product_card.append(img, name, category, price, description);

    // increasing the index 
    product_index++;

})