// AnimalFamily型: 動物の家族を表す型
type AnimalFamily = {
    familyName: string; // 家族名（文字列型）
    mother: Animal;     // 母（Animal型）
    father: Animal;     // 父（Animal型）
    child: Animal;      // 子（Animal型）
};

// HumanFamily型: 人間の家族を表す型
type HumanFamily = {
    familyName: string; // 家族名（文字列型）
    mother: Human;      // 母（Human型）
    father: Human;      // 父（Human型）
    child: Human;       // 子（Human型）
};