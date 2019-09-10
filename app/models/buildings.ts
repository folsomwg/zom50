import { Zombie } from './zombies';
import { Location } from './locations.enum';

export class Building {
    name: string;
    type: Location;
    _zombiesContained: Array<Zombie>;

    get zombies(): Array<Zombie> {
        return this._zombiesContained;
    }
    set zombies(z:Array<Zombie>) {
        this._zombiesContained = z;
    }
    get numberContained(): number {
        return this._zombiesContained.length;
    }
}

export class School extends Building {
    name: string = "School";
    type = Location.school;
}

export class Hospital extends Building {
    name: string = "Hospital";
    type = Location.hospital;
}

export class Factory extends Building {
    name: string = "Factory";
    type = Location.factory;
}

export class City {
    name: string = "City 17";
    buildings: Array<Building> = new Array<Building>();
    fromBuilding: Building;
    toBuilding: Building;
    selectedZombie: Zombie;
}
