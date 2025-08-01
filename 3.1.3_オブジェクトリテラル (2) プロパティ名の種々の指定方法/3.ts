const propName = "foo";

const obj = {
    [propName]: 123, // propName の値をキーとして使う → "foo": 123
};

console.log(obj.foo); // 123