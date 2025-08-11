// Human型の定義：身長(height)と体重(weight)を持つ
type Human = {
    height: number; // 身長（メートル単位）
    weight: number; // 体重（キログラム単位）
};

// 関数calcBMI
// 引数のHuman型オブジェクトを分割代入し、heightとweightを直接受け取る
const calcBMI = function ({ height, weight }: Human): number {
    // BMI = 体重(kg) ÷ (身長(m) ^ 2) を計算
    return weight / height ** 2;
};

// Human型の値を作成
const uhyo: Human = { height: 1.84, weight: 72 };

// BMI計算結果を表示
// 出力例: 21.266540642722116
console.log(calcBMI(uhyo));