class User {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.#age = age;
    }

    public isAdult(): boolean {
        return this.#age >= 20;
    }
}

const uhyo = new User("uhyo", 25);
const john = new User("John Smith", 15);

// bindで this を uhyo に固定した関数である。
// 以後、call/applyで別の this を渡しても無視され、常に uhyo を参照するのである。
const boundIsAdult = uhyo.isAdult.bind(uhyo);

console.log(boundIsAdult());        // true が表示される（uhyo.#age = 25 を参照するため）である
console.log(boundIsAdult.call(john)); // true が表示される（callの this 指定は bind 済みのため無視される）である