import { Component, OnInit } from '@angular/core';
import { ZombieService } from './zombie.service';

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

    ngOnInit() {

    }
}