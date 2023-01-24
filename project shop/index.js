const header = {
    headers: {
        'Access-Control-Allow-Methods': 'GET,POST,DELETE,PUT',
        'Access-Control-Allow-Origin': '*'
    }
}

window.onload = () => {
    const clickIcon = document.getElementsByClassName("content-showerIcon");
    const categoryItem = document.getElementsByClassName("category__hidden__inner__item");
    const colorLetter = document.getElementsByClassName("category-list_letter");
    const hiddenBlock = document.getElementsByClassName("category__hidden__content");
    const searchTitle = document.getElementsByClassName('search__title')[0];
    const itemImages = document.getElementsByClassName('item__image');
    const headerBlockTitle = document.getElementsByClassName('header-block_title');

    for (let i = 0; i < clickIcon.length; i++) {
        clickIcon[i].addEventListener("click", () => {
            clickIcon[i].classList.toggle("rotateArrow");
            hiddenBlock[i].classList.toggle("show");
            colorLetter[i].classList.toggle("clickColor");  
        })
    }

    for (let i = 0; i < categoryItem.length; i++) {
        categoryItem[i].addEventListener('click', () => {
            showItemsByCategory(categoryItem[i], itemImages)
            searchTitle.innerText = `All items for category ${categoryItem[i].innerText}`
        })
    }
    for (const header of headerBlockTitle) {
        const text = header.innerText
        header.addEventListener('click', () => {
            location.assign(`${text}.html`);
        })
    }
    // CORS
    // Обменивание ресурсов между сайтами. Безопастное обменивание.
};
//Про промисы:
// Promise, fetch(), statuses of Promise, methods Promise
// Заказ - запрос
// Подарок - данные в обертке

// fetch () -> 2 arguments; 1 -> стринг (URL), 2 -> настройки запроса : Promise<any>
// Pending, Fulfilled, Rejected, Settled
// Response, .status -> 100, 200, 300, 400, 500
// then(), catch(), finally(), all(), race()
// then() -> 2 arguments; 1 -> callback success, 2 -> callback failed
// catch() -> 1 argument; callback no success
// finally() -> argument; callback anytime
// all() -> 1 argument; array of requests
// race() -> 1 argument; array of requests -> 1 Promise
// 1 req -> small data, 2 req -> medium data, 3 req -> hard data

// где classList - это класс, который содержит все массивы  

//Про асинхронность
// Asynchronous functions (async / await)

async function showItemsByCategory (categoryItem, itemImages) {

    // Promise -> then(функция при успешном запросе, при неуспешном), catch(функция), finally(функция)
    // NO -> fetch().then().catch()
    // YES -> fetch() async / await

    const res = await (await fetch('https://fakestoreapi.com/products')).json();
    // 200, 300, 400, 500
    // 200 -> успешный запрос
    // 300 -> сайт либо переместили куда-то или удален
    // 400 -> ошибка со стороны пользователя
    // 500 -> ошибка со стороны сервера
    
    // Pending Promise (Pending, Fulfilled, Rejected, Settled)
    const selectedCategory = categoryItem.innerText === 'For men' ? "men's clothing" : "women's clothing"
    const filteredItems = res.filter(item => item.category === selectedCategory)
    filteredItems.forEach((element, index) => {
        itemImages[index].setAttribute('src', element.image);
    })
}

// 2 function -> обработку (не асинхронные)
// 1 function -> отвечает за сохранение данных каждые 10 секунд (async)
// 1 function -> отвечает за обновление данных каждые 10 секунд (async)

// NO ASYNC
// 1 -> 0sec
// 2 -> 0sec

// ASYNC
// 1 -> 0sec
// 2 -> 0sec

// 10 секунд -> 20 sec
// 0 секунд -> 10 sec