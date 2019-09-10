import { Injectable } from '@angular/core';
import { Building, School, Hospital, Factory, City } from './models/buildings';
import { Zombie } from './models/zombies';

@Injectable()
export class ZombieService {
    private _city: City;

    get city(): City {
        return this._city;
    }
    set city(c: City) {
        this._city = c;
    }

    get fromBuilding(): Building {
        return this.city.fromBuilding;
    }
    set fromBuilding(b: Building) {
        this.city.fromBuilding = b;
    }

    get toBuilding(): Building {
        return this.city.toBuilding;
    }
    set toBuilding(b: Building) {
        this.city.toBuilding = b;
    }

    get selectedZombie(): Zombie {
        return this.city.selectedZombie;
    }
    set selectedZombie(z: Zombie) {
        this.city.selectedZombie = z;
    }

    initCity(): City {
        let school = new School();
        let hospital = new Hospital();
        let factory = new Factory();
        this.city = new City();

        let tempZombies = Array<Zombie>();
        for (let i=0; i<15; i++) {
            let z = new Zombie('Zed ' + Math.ceil(Math.random() * (i+1) * 100));
            tempZombies.push(z);
        }

        school.zombies = tempZombies.splice(0,5);
        hospital.zombies = tempZombies.splice(0,5);
        factory.zombies = tempZombies.splice(0,5);

        this.city.buildings.push(school, hospital, factory);

        this.toBuilding = this.city.buildings[0];
        this.fromBuilding = this.city.buildings[0];
        this.selectedZombie = this.city.toBuilding.zombies[0];

        return this.city;
    }

    move(): void {
        if (this.toBuilding.zombies.indexOf(this.selectedZombie) <= -1) {
            this.fromBuilding.zombies.splice(this.fromBuilding.zombies.indexOf(this.selectedZombie), 1);
            this.toBuilding.zombies.push(this.selectedZombie);
            if (this.fromBuilding.zombies.length > 0 ) this.selectedZombie = this.fromBuilding.zombies[0];
        }
    }

    setBuilding(building: string, action: string): void {
        switch(building) {
            case 'School':
                (action === 'from') ? this.fromBuilding = this.city.buildings[0] : this.toBuilding = this.city.buildings[0];
                this.selectedZombie = this.fromBuilding.zombies[0];
                break;
            case 'Hospital':
                (action === 'from') ? this.fromBuilding = this.city.buildings[1] : this.toBuilding = this.city.buildings[1];
                this.selectedZombie = this.fromBuilding.zombies[0];
                break;
            case 'Factory':
                (action === 'from') ? this.fromBuilding = this.city.buildings[2] : this.toBuilding = this.city.buildings[2];
                this.selectedZombie = this.fromBuilding.zombies[0];
                break;
        }
    }

    setZombie(zombie: string): void {
        for (let i=0; i<this.city.fromBuilding.zombies.length; i++) {
            if (this.city.fromBuilding.zombies[i].name === zombie) {
                this.city.selectedZombie = this.city.fromBuilding.zombies[i];
            }
        }
    }
}
