const productsData = [
    { id: 1, name: 'Автомобильные покрышки', price: 12000, img: 'https://avatars.mds.yandex.net/get-mpic/16778995/2a00000197456d98206bf6e0bc11cca13bd8/orig' },
    { id: 2, name: 'Тормозные колодки', price: 7000, img: 'https://avatars.mds.yandex.net/get-mpic/12218575/2a000001966f7574eb88ed028d5a95394053/orig' },
    { id: 3, name: 'Выжимной диск', price: 7500, img: 'https://static.chipdip.ru/lib/423/DOC019423404.jpg' },
    { id: 4, name: 'Глушитель', price: 3000, img: 'https://avatars.mds.yandex.net/get-mpic/13315531/2a000001973be843e2e842b314748ae1acf6/orig' },
    { id: 5, name: 'Лобовое стекло', price: 20000, img: 'https://avatars.mds.yandex.net/get-mpic/16136863/2a000001996a64c1213def380a01e061fdee/orig' }
];



let cartCount = 0;


const cartCountElement = document.getElementById('cartCount');
const productsContainer = document.getElementById('productsContainer');


function updateCartCounter() {
    cartCountElement.textContent = cartCount;
}


function addToCart(productName) {
    cartCount = cartCount + 1;
    updateCartCounter();                   
}


for (let i = 0; i < productsData.length; i++) {
    const product = productsData[i];


    const card = document.createElement('div');
    card.className = 'card';


    card.innerHTML = `
    <div>
        <img class="product-img" src="${product.img}" alt="${product.name}">
        <div class="product-name">${product.name}</div>
        <div class="product-price">${product.price} ₽</div>
    </div>
    <button class="add-btn" data-product-name="${product.name}">Добавить в корзину</button>
    `;

    
const button = card.querySelector('.add-btn');


button.addEventListener('click', function() {

    const name = button.getAttribute('data-product-name');
    addToCart(name);
});

    productsContainer.appendChild(card);
}

updateCartCounter();