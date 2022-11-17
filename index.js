
    var secretNum = Math.ceil(Math.random() * 10);
    var tries = 0;

    function guessNum(num) {
        if(tries == 5) return alert("Попытки кончились, обновите страницу")
        if (tries == 'stop') return alert('Вы выиграли, обновите страницу')

        if(num == secretNum) {
            tries = 'stop'
            return  alert('Угадали это число ' + num)
        } else {
            tries++
            alert('Не правильно, еще раз')
        }
    }