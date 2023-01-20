window.onload = () => {
    const clickIcon = document.getElementsByClassName("content-showerIcon");
    const categoryItem = document.getElementsByClassName("category__hidden__inner__item");
    const colorLetter = document.getElementsByClassName("category-list_letter");
    const hiddenBlock = document.getElementsByClassName("category__hidden__content");
 const searchTitle = document.getElementsByClassName('search__title')[0];

    for (let i = 0; i < clickIcon.length; i++) {
        clickIcon[i].addEventListener("click", () => {
            clickIcon[i].classList.toggle("rotateArrow");
            hiddenBlock[i].classList.toggle("show");
            colorLetter[i].classList.toggle("clickColor");  
    })
}

for (let i = 0; i < categoryItem.length; i++) {
 categoryItem[i].addEventListener('click', () => {
    searchTitle.innerText = `All items for category ${categoryItem[i].innerText}`
 })
    
}
};


// где classList - это класс, который содержит все массивы  