import { Component } from '@angular/core';
import { DevsService } from './services/devs.service';
import { PairsService } from './services/pairs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'peer';

  constructor(
    public devsService: DevsService,
    public pairsService: PairsService,
    ) {
    console.log('AppComponent constructor()');
    this.devsService.createAllDevs();
    console.log(this.devsService.list);

    this.pairsService.createAllPairs(this.devsService.list);
    console.log(this.pairsService.list);
  }
}
