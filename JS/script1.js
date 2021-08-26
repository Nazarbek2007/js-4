var namer = prompt('Введите свое имя!')

var year = +prompt('Введите свой год рождения!')

var now = +prompt('Введите нынещний год!')

if ((isNaN(year) && isNaN(now)) || ( year == 0 && now >= year)) {
    alert('Что-то пошло не так!... Попробуйте написать правильно!')
} else{
    alert(namer + ', вам сейчас ' + (now - year) + ' !')
} 



