import { Component, OnInit } from '@angular/core';
import { ZombieService } from './zombie.service';
import { School, Hospital, Factory, City, Building } from './models/buildings';
import { Zombie } from './models/zombies';

@Component({
    selector: 'zom50',
    moduleId: module.id,
    templateUrl: './app.component.html',
    providers: [ ZombieService ]
})

export class AppComponent implements OnInit {
    constructor(
        private _zombieService: ZombieService
    ) {}

    get city(): City {
        return this._zombieService.city;
    }
    get school(): Building {
        return this._zombieService.city.buildings[0];
    }
    get hospital(): Building {
        return this._zombieService.city.buildings[1];
    }
    get factory(): Building {
        return this._zombieService.city.buildings[2];
    }

    zombieSelect(zombie: string) { 
        this._zombieService.setZombie(zombie);
    }

    fromBuildingSelect(building: string) {
        this._zombieService.setBuilding(building, 'from');
    }

    toBuildingSelect(building: string) {
        this._zombieService.setBuilding(building, 'to');
    }

    move() {
        this._zombieService.move();
    }

    ngOnInit() {
        this._zombieService.initCity();
    }
}