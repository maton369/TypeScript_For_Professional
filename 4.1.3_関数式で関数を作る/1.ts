// Human型の定義：身長(height)と体重(weight)を持つ
type Human = {
    height: number; // 身長（メートル単位）
    weight: number; // 体重（キログラム単位）
};

// BMIを計算する関数（無名関数を変数に代入）
const calcBMI = function (human: Human): number {
    // BMI = 体重(kg) ÷ 身長(m)^2 の計算式
    return human.weight / human.height ** 2;
};

// Human型のオブジェクトを作成
const uhyo: Human = { height: 1.84, weight: 72 };

// BMI計算結果を出力
// 出力例: 21.266540642722116
console.log(calcBMI(uhyo));