const uhyo: Human = { height: 1.84, weight: 72 };

// ❌ エラー: Block-scoped variable 'calcBMI' used before its declaration.
// 理由: 関数式（const calcBMI = function ...）は変数として宣言されるため、
//       宣言より前には参照できない（Temporal Dead Zone: TDZ）
console.log(calcBMI(uhyo));

type Human = {
    height: number; // 身長（m）
    weight: number; // 体重（kg）
};

// 関数式でBMIを計算する関数を定義
// Human型のオブジェクトを分割代入で受け取り、BMIを返す
const calcBMI = function ({ height, weight }: Human): number {
    return weight / height ** 2;
};