// クラス `Human` を定義する。
// `greet` メソッドは "Hello" と出力するだけの簡単な処理。
class Human {
    greet() {
        console.log("Hello");
    }
}

// `Human` クラスを模した関数コンストラクタ。
// 即時実行関数 (IIFE) によって、`Human` という名前の関数が定義される。
var Human = /** @class */ (function () {
    // コンストラクタ関数（空の初期化処理）
    function Human() {
    }

    // `greet` メソッドを `Human.prototype` に追加することで、
    // すべてのインスタンスがこのメソッドを共有して持つことになる。
    Human.prototype.greet = function () {
        console.log("Hello");
    };

    // `Human` コンストラクタ関数を戻り値として返すことで、
    // `var Human = ...` に代入される。
    return Human;
}());