tg = window.Telegram.webApp

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
]

const cardsWrapper = document.querySelector(".cards")

products.forEach((el) => {
    cardsWrapper.innerHTML += `
    <div class="card">
      <h2>${el.title}</h2>
      <span>${el.starts}⭐️</span>
      <p>${el.desc}</p>
      <span>${el.category}</span>
      <button id="show-btn">Чекать</button>
    </div>
    `
})

const productInfoModal = document.querySelector('.modal-for-product-info')
const productInfoModalOverlay = document.querySelector('.modal-for-product-info-overlay')
const modalProductInfo = document.querySelector('.modal-product-info')
const showBtns = document.querySelectorAll("#show-btn")

showBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        products.forEach((el, index) => {
            if (i == index) {
                modalProductInfo.innerHTML = ""
                productInfoModal.classList.add('active-modal')
                productInfoModalOverlay.classList.add('active-modal-overlay')
                modalProductInfo.innerHTML += `
                  <div class="card modal-info">
                     <h2>${el.title}</h2>
                      <span/>${el.starts}⭐️</span>
                      <p>${el.desc}</p>
                      <span>${el.category}</span>
                      <button id="buy-btn">Купить</button>
                  </div>
                `
            }
        })
        const buyBtn = document.querySelectorAll("#buy-btn")

        buyBtn.forEach((btn, i) => {
            btn.addEventListener("click", () => {
                products.forEach((el, index)=> {
                    if(i == index) {
                        tg.sendData(JSON.stringify(el))
                    }
                })
            })
        })
    })
})


productInfoModalOverlay.addEventListener("click", () => {
    productInfoModal.classList.remove('active-modal')
    productInfoModalOverlay.classList.remove('active-modal-overlay')
})
