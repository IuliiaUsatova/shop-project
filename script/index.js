const header = {
  headers: {
    "Access-Control-Allow-Methods": "GET,POST,DELETE,PUT",
    "Access-Control-Allow-Origin": "*"
  }
};

window.onload = () => {
  const clickIcon = document.getElementsByClassName("content-showerIcon");
  const categoryItem = document.getElementsByClassName("category__hidden__inner__item");
  const colorLetter = document.getElementsByClassName("category-list_letter");
  const hiddenBlock = document.getElementsByClassName("category__hidden__content");
  const searchTitle = document.getElementsByClassName("search__title")[0];
  const itemImages = document.getElementsByClassName("item__image");
  const headerBlockTitle = document.getElementsByClassName("header-block_title");
  const searchInput = document.getElementsByClassName("search__input")[0];
  const hiddenDropdown = document.getElementsByClassName("search__dropdown")[0];
  const dropdownTexts = document.getElementsByClassName("search__dropdown__text");
//toggle логика
const opacityBurger = document.getElementsByClassName('opacity__background')[0];
const burgerBlock = document.getElementsByClassName('burger__block')[0];
const burgerIcon = document.getElementsByClassName('tablet_burger')[0];
const burgerModalBlock = document.getElementsByClassName('burger__modal')[0];



burgerIcon.addEventListener('click', () => {
  burgerModalBlock.style.display = 'block'
  setTimeout(() => {
  opacityBurger.classList.add('toggle__background');
  burgerBlock.classList.add('toggle__burger');
  },100);
})
opacityBurger.addEventListener('click', () => {
  opacityBurger.classList.remove('toggle__background');
  burgerBlock.classList.remove('toggle__burger');
  setTimeout(() => {
    burgerModalBlock.style.display = 'none'
  },100);
  })

  //contains - если есть такой класс то возвращаем true, есни нет - false
  //toggle - если есть класс, то он его добавит или удалит
//   searchInput.addEventListener('focus', () => {
//     // если есть hidden то мы убираем его при нажатии
//     if (hiddenDropdown.classList.contains('hidden')) {
//       hiddenDropdown.classList.remove('hidden');
//     }
//   });

//   for (const text of dropdownTexts) {
//     text.addEventListener('click', () => {
//       //меняется категория с помощью нижней строки кода
//       searchTitle.innerText = `All items for category ${text.innerText}`;
//       hiddenDropdown.classList.add('hidden');
//     });
//   }
  searchInput.addEventListener('focus', () => {
    if (hiddenDropdown.classList.contains('hidden')) {
        hiddenDropdown.classList.remove('hidden')
    }
})

for (const text of dropdownTexts) {
    text.addEventListener('click', () => {
        showItemsByCategory(text, itemImages)
        searchTitle.innerText = `All items for category: ${text.innerText}`
        hiddenDropdown.classList.add('hidden')
    })
}

  for (let i = 0; i < clickIcon.length; i++) {
    clickIcon[i].addEventListener("click", () => {
      clickIcon[i].classList.toggle("rotateArrow");
      hiddenBlock[i].classList.toggle("show");
      colorLetter[i].classList.toggle("clickColor");
    });
  }

  for (let i = 0; i < categoryItem.length; i++) {
    categoryItem[i].addEventListener("click", () => {
      showItemsByCategory(categoryItem[i], itemImages);
      searchTitle.innerText = `All items for category ${categoryItem[i].innerText}`;
    });
  }
  for (const header of headerBlockTitle) {
    const text = header.innerText;
    header.addEventListener("click", () => {
      location.assign(`${text}.html`);
    });
  }

  // CORS
  // Обменивание ресурсов между сайтами. Безопастное обменивание.

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
};

  async function showItemsByCategory (categoryItem, itemImages) {
    const selectedCategory = categoryItem.innerText === 'For men' ? "men's clothing" : "women's clothing"
    const res = await (await fetch('https://fakestoreapi.com/products', header.headers)).json();
    const filteredItems = res.filter(item => item.category === selectedCategory)
    console.log(filteredItems);
    filteredItems.forEach((element, index) => {
        itemImages[index].setAttribute('src', element.image);
    })
}

