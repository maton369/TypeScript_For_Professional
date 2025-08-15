const names = ["uhyo", "John", "Taro"] as const;

// type Name は "uhyo" | "John" | "Taro" 型になる
type Name = (typeof names)[number];