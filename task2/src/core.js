//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    var x = parseFloat(n);
    return !isNaN(n) && (x | 0) === x;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let _arr = [];
    for (let i = 2; i <= 20; i += 2)
        _arr.push(i);
    return _arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    var total = 0;
    for (var i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);

}


//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    return (Math.log(n) / Math.log(2)) % 1 === 0;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */

function getOperationFn(initialValue, operatorFn) {
    let storedValue = initialValue;
    if (!operatorFn) {
        return () => storedValue;
    }
    return (newValue) => {
        storedValue = operatorFn(storedValue, newValue);
        return storedValue;
    };
}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start, step) {
    var generation = function () {
        if (start === undefined) {
            start = 0;
        }
        else if (step === undefined) {
            step = 1;
            start = start + step;
        }
        else {
            if( start === 1 && step === 1)
            {
                start += step;
                return start;
            }
            res = start;
            start += step;
            return res;
        }
        return start;
    }
    return generation;
}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp итп) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) {
    if (firstObject === secondObject) {
        return true;
    }

    if (typeof firstObject === "number" && isNaN(firstObject) && typeof secondObject === "number" && isNaN(secondObject)) {
        return true;
    }

    if (typeof firstObject != "object" || firstObject === null || typeof secondObject != "object" || secondObject === null) {
        return false;
    }

    let keysA = Object.keys(firstObject), keysB = Object.keys(secondObject);


    if (keysA.length !== keysB.length) {
        return false;
    }

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(firstObject[key], secondObject[key])) {
            return false;
        }
    }
    return true;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};

