// پروڈکٹس ڈیٹا
const products = [
    {
        name:  "لیڈیز بیگ",
        price:  "2500 روپے",
        image:  "bag1.jpg"
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
        image:  "tasbeeh.jpg"
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
                <a href="https://wa.me/923001234567?text=میں%20${encodeURIComponent(product.name)}%20خریدنا%20چاہتا%20ہوں%20(${product.price})" class="btn">
                    <i class="fab fa-whatsapp"></i> آرڈر کریں
                </a>
            </div>
        `;
    });
}

// صفحہ لوڈ ہونے پر
window.onload = displayProducts;