/**
 * Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
 * Если координаты не переданы - 0,0; Аналогично если только 1 координата.
 * Реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
 */
class Point {
    x
    y
    constructor(x, y) {
        if (x === undefined) {
            x = 0;
        }
        if (y === undefined) {
            y = 0;
        }
        this.x = x;
        this.y = y;
    }

    distance() {
        return Math.sqrt((Math.pow((this.x), 2) + Math.pow((this.y), 2)))
    }
}

/**
 * Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
 * который будет наследоваться от точки в двумерном пространстве.
 * Реализовать статический метод, который возвращает расстояние между Point3D.
 */
class Point3D extends Point {
    z
    constructor(x, y, z) {
        if (z === undefined) {
            z = 0;
        }
        super(x, y)
        this.z = z;


    }
    static vectorLength(a, b) {
        return Math.sqrt(
            Math.pow(a.x - b.x, 2) +
            Math.pow(a.y - b.y, 2) +
            Math.pow(a.z - b.z, 2)
        );
    }
}

/**
 * Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала.
 * Предусмотреть 2 варианта инициализации - массивом в конструкторе (из него создается очередь) и без параметров.
 * Для тех, кто доверяет, но проверяет: написать тесты на методы класса (oop.spec.js)
 */
class Queue {



    constructor(args) {
        if(args === undefined)
        {this.elements = [];
            this.size = 0;
        }else if(typeof(args)==='number')
        {
            this.elements = [args];
            this.size = 1;
        }else if(typeof(args)==='object')
        {
            this.size = 0;
            this.elements =[];
            for (let i = 0; i < args.length; i++) {
                this.elements.push(args[i]);
                this.size++;
            }
        }
    }

    push(...args) {
        if(typeof(args) === 'object'){
            for (let i = 0; i < args.length; i++) {
                this.elements.push(args[i]);
                this.size++;
            }
        }
        else{
            this.elements.push(args);
            this.size++;
        }
    }

    pop() {
        if (this.elements.length <= 0) {
            return undefined;
        }
        let elem = this.elements.shift();
        this.size--;
        return elem;
    }
    
    clear(){
        this.elements.length = 0;
        this.size = 0;
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
    Math,
};
