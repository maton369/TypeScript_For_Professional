const uhyo: Human & Animal = {
    name: "uhyo",
    species: "Homo sapiens sapiens"
};

// エラーなく呼び出せる！
const value = mysteryFunc(uhyo);
console.log(value);