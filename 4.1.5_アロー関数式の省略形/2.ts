type Human = {
    height: number;
    weight: number;
};
type ReturnObj = {
    bmi: number
};

// ✅ 正しい書き方
// アロー関数でオブジェクトを返す場合、オブジェクトリテラルを()で囲む必要がある
// これは {} が「ブロック」として解釈されるのを防ぐため
const calcBMIObject = ({
    height, weight
}: Human): ReturnObj => ({
    bmi: weight / height ** 2
});

// ❌ コンパイルエラーになる例
// 波括弧 {} が「関数本体のブロック」として解釈されるため
// 戻り値を返す return 文がないとエラーになる
const calcBMIObject2 = ({
    height, weight
}: Human): ReturnObj => {
    bmi: weight / height ** 2; // ← return がないので戻り値がない扱い
};