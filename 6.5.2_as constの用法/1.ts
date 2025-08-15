// string[]型（要素は文字列だが変更可能）
const names1 = ["uhyo", "John", "Taro"];

// readonly ["uhyo", "John", "Taro"]型（要素は固定・変更不可）
const names2 = ["uhyo", "John", "Taro"] as const;