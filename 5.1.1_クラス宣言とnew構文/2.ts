// ❌ 定義前に使用している
const uhyo = new User(); // クラスがまだ存在しないためエラー

class User {
    name: string = "";
    age: number = 0;
}