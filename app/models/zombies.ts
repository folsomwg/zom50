import { Building } from './buildings';

export class Zombie {
    name: string;
    location: Building;
    _contained: boolean = false;

    constructor(name: string) {
        this.name = name;
    }

    get contained(): boolean {
        return this._contained;
    }
    set contained(b: boolean) {
        this._contained = b;
    }
}
