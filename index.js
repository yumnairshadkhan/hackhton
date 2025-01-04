
let cart = [];
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartSection = document.getElementById("cart-section");
function toggleCart() {
    cartSection.classList.toggle("visible");
}
document.querySelectorAll(".btn-shop").forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.getAttribute("data-name");
        const productPrice = parseFloat(button.getAttribute("data-price"));
        const existingProduct = cart.find(item => item.name === productName);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ name: productName, price: productPrice, quantity: 1 });
        }

        updateCart();
    });
});


    function updateCart() {
        cartItems.innerHTML = ""; 
        let total = 0;
    
        cart.forEach(item => {
            total += item.price * item.quantity;
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>$${item.price}</span>
                <span>
                    <button onclick="decrease('${item.name}')">-</button>
                    ${item.quantity}
                    <button onclick="increase('${item.name}')">+</button>
                </span>
            `;
            cartItems.appendChild(cartItem);
        });
    
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0); 
        cartTotal.textContent = `Total : ${total.toFixed(2)}`; 
    }
    

function decrease(productName) {
        productName.quauntity--;
        updateCart();
    }

function increase(productName) {
        productName.quauntity++;
        updateCart();
    }


function clearCart() {
    cart = [];
    updateCart();
}

function close(){
    var section = document.querySelector("#cart-section");
    section.classList.remove("visible");
}