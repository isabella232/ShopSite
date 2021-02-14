// Сами страницы
let price1 = new Vue({
    el: ".tile-2",
    data: {
        header: "Тостер от JetBrains",
        text: "799руб в месяц",
        p: "p1.html",
        img: "img/image-1.jpg"
    }
});
let price2 = new Vue({
    el: ".tile-3",
    data: {
        header: "Чайник от Valve",
        text: "1399руб",
        p: "p2.html",
        img: "img/image-2.jpg"
    }
});
let price3 = new Vue({
    el: ".tile-4",
    data: {
        header: "Фонарик от Bethesda",
        text: "1999руб",
        p: "p3.html",
        img: "img/image-3.jpg"
    }
});
let price4 = new Vue({
    el: ".tile-5",
    data: {
        header: "Миксер от PlayStation",
        text: "1719руб",
        p: "p4.html",
        img: "img/image-4.jpg"
    }
});
let price5 = new Vue({
    el: ".tile-6",
    data: {
        header: "Кружка от EA",
        text: "339руб",
        p: "p5.html",
        img: "img/image-5.jpg"
    }
});
// Логика
let poisk;
let search = document.getElementById('search');
search.onchange = function() {
    poisk = search.value;
    if (poisk == "Тостер" || poisk == "тостер") {
        Nill();
    }
    if (poisk == "Чайник" || poisk == "чайник") {
        price1.header = 'Чайник от Valve';
        price1.text = '1399руб';
        price1.p = 'p2.html';
        price1.img = 'img/image-2.jpg';
        Nill();
    }
    if (poisk == "Фонарь" || poisk == "фонарь" || poisk == "Фонарик" || poisk == "фонарик") {
        price1.header = 'Фонарик от Bethesda';
        price1.text = '1999руб';
        price1.p = 'p3.html';
        price1.img = 'img/image-3.jpg';
        Nill();
    }
    if (poisk == "Миксер" || poisk == "миксер") {
        price1.header = 'Миксер от Playstation';
        price1.text = '1719руб';
        price1.p = 'p4.html';
        price1.img = 'img/image-4.jpg';
        Nill();
    }
    if (poisk == "Кружка" || poisk == "кружка") {
        price1.header = 'Кружка от EA';
        price1.text = '339руб';
        price1.p = 'p5.html';
        price1.img = 'img/image-5.jpg';
        Nill();
    }

}
function Nill() {
    price2.header = null;
    price2.text = null;
    price2.p = '#';
    price2.img = 'img/null.jpg';
    price3.header = null;
    price3.text = null;
    price3.p = '#';
    price3.img = 'img/null.jpg';
    price4.header = null;
    price4.text = null;
    price4.p = '#';
    price4.img = 'img/null.jpg';
    price5.header = null;
    price5.text = null;
    price5.p = '#';
    price5.img = 'img/null.jpg';
}






















