butt.onmouseover = function() {
    butt.innerHTML = 'Нет в продаже';
    butt.style.borderColor = 'darkgrey';
    butt.style.backgroundColor = 'lightgray';
    butt.style.color = 'darkgrey';
}
butt.onmouseout = function() {
    butt.innerHTML = 'Купить';
    butt.style.borderColor = 'lightgreen';
    butt.style.backgroundColor = 'green';
    butt.style.color = 'lightgreen';
}