function rand(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
function random(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
let count = rand(0,4);
let count_1 = random(0,5);
let price = new Vue({
    el: ".tile-2",
    data: {
        image1: "img\image-1.jpg",
        header1: "Тостер от Jetbrains",
        text1:  "799руб",
        p1:     "p1.html",
    }
});
let price1 = new Vue({
    el: ".tile-3",
    data: {
        image2: "img\image-2.jpg",
        header2: "Чайник от Valve",
        text2:  "1399руб",
        p2:     "p1.html",
    }
});
if (count == 0) {
    price.image1  = "img/image-1.jpg";
    price.header1 = "Тостер от Jetbrains";
    price.text1   = "799руб в месяц";
    price.p1      = "p1.html";
}
if (count == 1) {
    price.image1 = "img/image-2.jpg";
    price.header1 = "Чайник от Valve";
    price.text1  = "1399руб";
    price.p1     = "p2.html";
}
if (count == 2) {
    price.image1 = "img/image-3.jpg";
    price.header1 = "Фонарик от Bethesda";
    price.text1  = "1999руб";
    price.p1     = "p3.html";
}
if (count == 3) {
    price.image1 = "img/image-4.jpg";
    price.header1 = "Миксер от PlayStation";
    price.text1 = "1719руб";
    price.p1 = "p4.html";
}
if (count == 4) {
    price.image1 = "img/image-5.jpg";
    price.header1 = "Кружка от EA";
    price.text1 = "399руб";
    price.p1 = "p5.html";
}
if (count_1 == 0) {
    price1.image2 = "img/image-1.jpg";
    price1.header2 = "Тостер от Jetbrains";
    price1.text2  = "799руб в месяц";
    price1.p2     = "p1.html";
}
if (count_1 == 1) {
    price1.image2 = "img/image-3.jpg";
    price1.header2 = "Фонарик от Bethesda";
    price1.text2  = "1999руб";
    price1.p2     = "p3.html";
}
if (count_1 == 2) {
    price1.image2 = "img/image-2.jpg";
    price1.header2 = "Чайник от Valve";
    price1.text2  = "1399руб";
    price1.p2     = "p2.html";
}
if (count_1 == 3) {
    price1.image2 = "img/image-4.jpg";
    price1.header2 = "Миксер от PlayStation";
    price1.text2  = "1719руб";
    price1.p2     = "p4.html";
}
if (count_1 == 4) {
    price1.image2 = "img/image-5.jpg";
    price1.header2 = "Кружка от EA";
    price1.text2 = "399руб";
    price1.p2 = "p5.html";
}
/*
if (count == 0 && count_1 == 0) {
    count = rand(0,2);
    count_1 = random(0,2);
}
if (count == 1 && count_1 == 1) {
    count = rand(0,2);
    count_1 = random(0,2);
}
if (count == 2 && count_1 == 2) {
    count = rand(0,2);
    count_1 = random(0,2);
}
*/
