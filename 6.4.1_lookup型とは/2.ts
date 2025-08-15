type Human = {
    type: "human"; // 判別用プロパティ（固定文字列リテラル型）
    name: string;  // 名前
    age: bigint;   // 年齢（bigint型に変更）
};

// Human 型のオブジェクトと、新しい年齢（bigint型）を受け取り
// age を更新した新しいオブジェクトを返す関数
function setAge(human: Human, age: Human["age"]) {
    return {
        ...human, // 既存のプロパティをコピー
        age       // age プロパティだけを上書き（bigint型）
    };
}

const uhyo: Human = {
    type: "human",
    name: "uhyo",
    age: 26n, // BigIntリテラル（末尾にnを付ける）
};

// uhyo の age を BigInt(27n) に更新した新しいオブジェクトを生成
const uhyo2 = setAge(uhyo, 27n);

// 結果を出力 → { type: "human", name: "uhyo", age: 27n }
console.log(uhyo2);