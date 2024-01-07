export class Team {
    constructor() {
        this.members = new Set();
    }
    add(member) {
        if(this.members.has(member)) {
            throw new Error('Объект уже существует');
        } else {
            this.members.add(member);
        }
    }
    addAll(...squad) {
        squad.forEach((el) => {
            this.members.add(el)
        });
    }
    toArray() {
        return Array.from(this.members);
    }
}