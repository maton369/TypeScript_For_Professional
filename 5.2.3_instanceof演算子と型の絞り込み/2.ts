type HasAge = {
    age: number; // 年齢を持つ型
}

class User {
    name: string; // ユーザー名
    age: number;  // 年齢

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

/**
 * 年齢や特定条件に応じて料金を返す関数
 * @param customer - HasAge型（ageプロパティを持つ）オブジェクト
 * @returns 料金（number型）
 */
function getPrice(customer: HasAge) {
    // `instanceof` で実際にUserクラスのインスタンスかどうかを判定
    if (customer instanceof User) {
        // 名前が "uhyo" の場合は特別に無料
        if (customer.name === "uhyo") {
            return 0;
        }
    }
    // 18歳未満は1000円、それ以外は1800円
    return customer.age < 18 ? 1000 : 1800;
}

// 単なるオブジェクト（Userクラスのインスタンスではない）
const customer1: HasAge = { age: 15 };
const customer2: HasAge = { age: 40 };

// Userクラスのインスタンス（name と age を持つ）
const uhyo = new User("uhyo", 26);

console.log(getPrice(customer1)); // 1000（18歳未満）
console.log(getPrice(customer2)); // 1800（18歳以上）
console.log(getPrice(uhyo));      // 0（Userインスタンス & 名前がuhyo）