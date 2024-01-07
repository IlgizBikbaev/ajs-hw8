 export class ErrorRepository {
    constructor() {
    this.errors = new Map([
        [1, "слишком длинное имя"],
        [2, "слишком короткое имя"],
        [3, "неправильно введённое имя"],
        [4, "неправильный тип игрока"],
        [5, "Герой умер, нельзя повысить его уровень!"]
    ]);
    }
    
    translate(code) {
            if (!this.errors.has(code)) {
                return 'Unknown error';
            } else {
               return this.errors.get(code);
            }
        }
}
