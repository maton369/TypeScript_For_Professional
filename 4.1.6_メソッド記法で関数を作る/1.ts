const obj = {
    // ✅ メソッド記法
    // オブジェクトリテラルのプロパティとして関数を定義する省略形
    double(num: number): number {
        return num * 2;
    },

    // ✅ 通常の記法 + アロー関数
    // プロパティにアロー関数を代入
    double2: (num: number): number => num * 2,
};

// メソッド呼び出し
console.log(obj.double(100));  // 200 と表示される
console.log(obj.double2(-50)); // -100 と表示される