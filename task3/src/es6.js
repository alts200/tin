"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно (а местами и нужно) дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    var t = fio.split (' ');
    var shortFIO = t [1] + ' ' + t [0];
   return shortFIO
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    const unique = [...new Set(array)];
     return unique;
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
function calculateSalaryDifference(array) {
    let minValue = Math.min(...array);
    let maxValue = Math.max(...array);
    var result = maxValue/minValue;
    return result;
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    #dict;
    constructor() {
        this.#dict = new Map();
    }

    set(key, value){
        if( typeof(key) === 'string' && typeof(value) === 'string'){
            this.#dict.set(key, value);
            return true;
        }
        return false;
    }

    get(key){
        if( typeof(key) === 'string'){
            return this.#dict.get(key)
        }
        return false;
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};

