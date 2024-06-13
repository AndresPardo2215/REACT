import { LEVELS } from "./levels.enum";

export class Task {
    name = '';
    desription = '';
    completed = false;
    level = LEVELS.NORMAL;

    constructor(name, desription, completed, level) {
        this.name = name;
        this.desription = desription;
        this.completed = completed;
        this.level = level
    }

}