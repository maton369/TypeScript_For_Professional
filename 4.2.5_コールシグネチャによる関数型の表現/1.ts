// MyFunc型は「呼び出し可能で、かつオプションのisUsedプロパティを持つ」型を定義
type MyFunc = {
    // 関数に追加できる任意のプロパティ
    isUsed?: boolean;
    // 関数シグネチャ（引数: number, 戻り値: void）
    (arg: number): void;
};

// MyFunc型の変数 double を定義し、引数の数値を2倍にして表示する関数を代入
const double: MyFunc = (arg: number) => {
    console.log(arg * 2);
};

// 関数にプロパティ isUsed を追加（true を設定）
double.isUsed = true;
console.log(double.isUsed); // true と表示される

// 関数として呼び出す
double(1000); // 2000 と表示される