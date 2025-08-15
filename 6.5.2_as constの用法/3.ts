// "uhyo" | "John" | "Taro" のいずれかであることを保証する型
type Name = "uhyo" | "John" | "Taro";

// Name[] 型の配列 → 要素は必ず Name のみ
const names: Name[] = ["uhyo", "John", "Taro"];