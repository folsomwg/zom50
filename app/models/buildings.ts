import { Unit } from './unit';
import { Zombie } from './zombies';
import { Location } from './locations.enum';

export class Building extends Unit {
    type: Location;
    xCoord: number;
    yCoord: number;
    _zombiesContained: Array<Zombie>;
    _numberContained: number = 0;

    get zombies(): Array<Zombie> {
        return this._zombiesContained;
    }
    set zombies(z:Array<Zombie>) {
        this._zombiesContained = z;
    }
    get numberContained(): number {
        return this._numberContained;
    }
    set numberContained(num:number) {
        this._numberContained = num;
    }
}

export class School extends Building {
    type = Location.school;
}

export class Hospital extends Building {
    type = Location.hospital;
}

export class Warehouse extends Building {
    type = Location.warehouse;
}

export class Player extends Building {
    type = Location.backpack;
}

export class Outside extends Building {
    type = Location.outside;
}
