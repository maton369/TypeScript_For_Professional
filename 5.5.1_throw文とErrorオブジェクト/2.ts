function getAverage(nums: number[]) {
    // 引数の配列が空かどうかをチェック
    // 空配列の場合は平均値を計算できないため、例外を発生させる
    if (nums.length === 0) {
        throw new Error("配列が空です");
    }

    // sum(nums) は配列の要素の合計値を返す関数（別途定義されている想定）
    // 平均値 = 合計値 / 要素数
    return sum(nums) / nums.length;
}