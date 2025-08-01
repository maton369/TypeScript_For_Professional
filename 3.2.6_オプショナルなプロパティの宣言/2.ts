type MyObj = {
    foo: boolean;
    bar: boolean;
    baz?: number; // bazプロパティは省略可能（optional）で、number型
};

// bazを指定していないオブジェクト
const obj: MyObj = { foo: false, bar: true };

// bazに1234を指定しているオブジェクト
const obj2: MyObj = { foo: true, bar: false, baz: 1234 };

// objにはbazが存在しないため、undefinedが表示される
console.log(obj.baz); // undefined と表示される

// obj2にはbazが存在し、1234が表示される
console.log(obj2.baz); // 1234 と表示される