let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let cartItems = {};

function addToCart(productId) {
    const productElement = document.querySelector(`.item[data-id="${productId}"]`);
    const productName = productElement.dataset.name;
    const productPrice = parseInt(productElement.dataset.price);

    if (cartItems[productId]) {
        cartItems[productId].quantity++;
    } else {
        cartItems[productId] = {
            name: productName,
            price: productPrice,
            quantity: 1
        };
    }

    updateCart();
}

function changeQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        delete cartItems[productId];
    } else {
        cartItems[productId].quantity = newQuantity;
    }

    updateCart();
}



function updateCart() {
    let totalPrice = 0;
    let totalCount = 0;

    listCart.innerHTML = '';

    for (const productId in cartItems) {
        const { name, price, quantity } = cartItems[productId];

        totalPrice += price * quantity;
        totalCount += quantity;

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div>${name}</div>
            <div>$${(price * quantity).toLocaleString()}</div> <!-- Insert $ before the price -->
            <div>
                <button onclick="changeQuantity(${productId}, ${quantity - 1})">-</button>
                <span class="count">${quantity}</span>
                <button onclick="changeQuantity(${productId}, ${quantity + 1})">+</button>
            </div>`;
        listCart.appendChild(listItem);
    }

    total.textContent = '$' + totalPrice.toLocaleString(); 
    quantity.textContent = totalCount;

    
    document.cookie = `totalPrice=${totalPrice}`;
}



total.addEventListener('click', () => {
    window.location.href = 'card.html';
});
document.addEventListener('DOMContentLoaded', function() {
    const checkoutButton = document.getElementById('checkoutButton');

    checkoutButton.addEventListener('click', function() {
        window.location.href = 'card.html';
    });

   
});