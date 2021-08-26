function random(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    return num;
}

var one = +prompt('Введите колличество решаемых примеров!')

var two = +prompt('Введите минимальное число!')

var three = +prompt('Введите максимальное число!')


for(let i = 1; i <= one; i++) {
    var four =random(two, three)
    
    var five =random(two, three)
    
    var end = +prompt('Сколько будет ' + (four + ' + ' + five) + ' = ' +'?')
    
    if(end === four + five) {
        alert('Вы ответили правильно!')
    }else {
        alert('Ваш ответ не правильный!Правильно будет ' + (four + five) + '!')
    }
    
}




 