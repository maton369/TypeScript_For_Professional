type Human = {
    type: "human"; // 判別用プロパティ（固定文字列リテラル型）
    name: string;  // 名前
    age: number;   // 年齢
};

// Human 型のオブジェクトと、新しい年齢（Human["age"]型＝number）を受け取り
// age を更新した新しいオブジェクトを返す関数
function setAge(human: Human, age: Human["age"]) {
    return {
        ...human, // 既存のプロパティをコピー
        age       // age プロパティだけを上書き
    };
}

const uhyo: Human = {
    type: "human",
    name: "uhyo",
    age: 26,
};

// uhyo の age を 27 に更新した新しいオブジェクトを生成
const uhyo2 = setAge(uhyo, 27);

// 結果を出力 → { type: "human", name: "uhyo", age: 27 }
console.log(uhyo2);