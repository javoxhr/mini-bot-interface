const tg = window.Telegram.WebApp;

tg.expand()

const products = [
    {
        title: "Pubg accaunt 40LV",
        desc: "40 level google akauntga ulangan parloni bilaman",
        starts: 370,
        category: "pubg"
    },
    {
        title: "Instagrm Accaunt",
        desc: "1000 ta dan ko'p active obunachisi bor",
        starts: 220,
        category: "instagram"
    },
    {
        title: "Telegram Kanal",
        desc: "telegram kanal sotiladi 2300 obunashisi bor hammasi active",
        starts: 420,
        category: "Telegram"
    },
    {
        title: "Telegram Grupa",
        desc: "telegram grupa sotiladi 6230 obunashisi bor hammasi active",
        starts: 420,
        category: "Telegram"
    },
];

const cardsWrapper = document.querySelector(".cards");

// Генерируем карточки
products.forEach((el, i) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <h2>${el.title}</h2>
        <span>${el.starts}⭐️</span>
        <p>${el.desc}</p>
        <span>${el.category}</span>
        <button class="show-btn" data-index="${i}">Чекать</button>
    `;
    cardsWrapper.appendChild(card);
});

const productInfoModal = document.querySelector('.modal-for-product-info');
const productInfoModalOverlay = document.querySelector('.modal-for-product-info-overlay');
const modalProductInfo = document.querySelector('.modal-product-info');

document.querySelectorAll(".show-btn").forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const index = event.target.dataset.index;
        const product = products[index];

        modalProductInfo.innerHTML = `
            <div class="card modal-info">
                <h2>${product.title}</h2>
                <span>${product.starts}⭐️</span>
                <p>${product.desc}</p>
                <span>${product.category}</span>
                <button class="buy-btn">Купить</button>
            </div>
        `;

        productInfoModal.classList.add('active-modal');
        productInfoModalOverlay.classList.add('active-modal-overlay');

        document.querySelector(".buy-btn").addEventListener("click", () => {
            tg.sendData(JSON.stringify(product));
        });
    });
});

productInfoModalOverlay.addEventListener("click", () => {
    productInfoModal.classList.remove('active-modal');
    productInfoModalOverlay.classList.remove('active-modal-overlay');
});
