// Human型を定義（身長と体重を持つ）
type Human = {
    height: number; // 身長（m）
    weight: number; // 体重（kg）
};

// アロー関数でBMIを計算する関数を定義
// 引数はHuman型のオブジェクトで、分割代入を使用
// BMI = 体重(kg) ÷ [身長(m)]²
const calcBMI = ({ height, weight }: Human): number => {
    return weight / height ** 2;
};

// Human型の変数uhyoを作成
const uhyo: Human = { height: 1.84, weight: 72 };

// 関数を呼び出し、BMIを計算して表示
// 出力: 21.266540642722116
console.log(calcBMI(uhyo));