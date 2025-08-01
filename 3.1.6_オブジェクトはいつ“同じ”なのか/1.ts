// foo というオブジェクトを定義（プロパティ num を持つ）
const foo = { num: 1234 };

// bar に foo を代入（同じオブジェクトを参照する）
const bar = foo;

// bar.num の値を表示（foo と同じオブジェクトなので 1234 が出力される）
console.log(bar.num); // 1234 と表示される

// bar.num に 0 を代入（オブジェクトの中身を変更している）
bar.num = 0;

// foo.num の値を再度表示（同じオブジェクトを参照しているので 0 が出力される）
console.log(foo.num); // 0 と表示される