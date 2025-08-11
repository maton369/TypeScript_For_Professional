// 普通の書き方
// アロー関数の本体を波括弧で囲み、return文で値を返す
const calcBMI = ({
    height, weight
}: Human): number => {
    return weight / height ** 2;
};

// 省略形
// 関数本体が単一の式の場合、波括弧とreturnを省略できる
// この場合、その式の評価結果が関数の戻り値になる
const calcBMI = ({
    height, weight
}: Human): number => weight / height ** 2;