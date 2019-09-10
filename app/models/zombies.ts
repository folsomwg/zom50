import { Unit } from './unit';
import { Location } from './locations.enum';

export class Zombie extends Unit {
    name: string;
    location: Location = Location.outside
    xCoord: number;
    yCoord: number;
    _contained: boolean = false;

    get contained(): boolean {
        return this._contained;
    }
    set contained(b:boolean) {
        this._contained = false;
    }
}

export class SchoolZombie extends Zombie {
    name = 'School Zombie';
}

export class HospitalZombie extends Zombie {
    name = 'Hospital Zombie';
}

export class WarehouseZombie extends Zombie {
    name = 'Warehouse Zombie';
}