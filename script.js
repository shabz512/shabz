// پروڈکٹس ڈیٹا
const products = [
    {
        name:  "لیڈیز بیگ",
        price:  "2500 روپے",
        image:  "bag.png"
     },
    {
        name: "شابز کلاسک ",
        price: "2300 روپے",
        image: "perfume 2.png"  // تصویر کا نام اور راستہ درست ہونا چاہیے
    },
    {
        name: "شابز پرفیوم",
        price: "2500 روپے",
        image: "perfume.png"
    },
    {
        name: " بے بی میک اپ کٹ",
        price: "1200 روپے",
        image: "kit.png"
    },
    {
        name: "بے بی سوٹ",
        price: "2100 روپے",
        image: "suit1.png"
    },
    {
        name:   "ڈیجیٹل تسبیح",
        price:  "999 روپے",
        image:  "tasbeeh.png"
    }
];
// پروڈکٹس ڈسپلے کریں
let cart = [];
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(`${productName} کارٹ میں شامل ہو گیا ہے!`);
}
function displayProducts() {
    const grid = document.querySelector('.product-grid');
    products.forEach(product => {
        grid.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button onclick="addToCart('${product.name}', '${product.price}')">کارٹ میں شامل کریں</button>
                <a href="https://wa.me/923479466158?text=میں%20${encodeURIComponent(product.name)}%20خریدنا%20چاہتا%20ہوں%20(${product.price})" class="btn">
                    <i class="fab fa-whatsapp"></i> خریدیں
                </a>
            </div>
        `;
    });
}
function addToCart(productName, price) {
    cart.push({ name: productName, price: parseInt(price) });
    updateCart();
    alert(`${productName} کارٹ میں شامل ہو گیا ہے!`);
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    let total = 0;
    
    cartItems.innerHTML = '';
    
    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <span>${item.name} - ${item.price} روپے</span>
            <button onclick="removeFromCart(${index})" class="remove-btn">×</button>
        `;
        cartItems.appendChild(itemElement);
        total += item.price;
    });
    
    totalPrice.textContent = total;
    document.getElementById('cart-section').style.display = cart.length ? 'block' : 'none';
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length > 0) {
        const message = `میں یہ آرڈر کرنا چاہتا ہوں:\n${cart.map(item => `${item.name} - ${item.price} روپے`).join('\n')}\nکل قیمت: ${document.getElementById('total-price').textContent} روپے`;
        window.open(`https://wa.me/923479466158?text=${encodeURIComponent(message)}`, '_blank');
    } else {
        alert('آپ کے کارٹ میں کوئی پروڈکٹ نہیں ہے');
    }
});
// صفحہ لوڈ ہونے پر
window.onload = displayProducts;