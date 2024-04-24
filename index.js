function getMultiplicationTable(num) {
    // Выводим заголовок таблицы
    let table = " ";
    for (let i = 1; i <= num; i++) {
        table += i + " ";
    }
    console.log(table);

    // Выводим таблицу
    for (let i = 1; i <= num; i++) {
        table = i + " ";
        for (let j = 1; j <= num; j++) {
            table += (i * j) + " ";
        }
        console.log(table);
    }
}

const table = getMultiplicationTable(5)