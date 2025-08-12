type HasName = {
    name: string;
}
type HasNameAndAge = {
    name: string;
    age: number;
}

// HasName型のオブジェクトを受け取り、そのnameを表示する関数
const showName = (obj: HasName) => {
    console.log(obj.name);
};

// showNameはHasNameを受け取る関数だが、
// TypeScriptでは関数の引数の型チェックが「双変性（bivariance）」で行われるため、
// HasNameAndAgeを受け取る関数としても代入可能になる。
// （strictFunctionTypesがfalseの場合の挙動）
const g: (obj: HasNameAndAge) => void = showName;

// gを呼び出すと、実際にはshowNameが実行される。
// 渡されたオブジェクトはHasNameAndAge型だが、showNameはHasNameとして受け取り、
// ageプロパティは無視してnameだけを使う。
g({
    name: "uhyo",
    age: 26,
}); // コンソールには "uhyo" と表示される