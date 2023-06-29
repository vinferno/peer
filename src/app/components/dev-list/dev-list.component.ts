import { Component, OnInit } from '@angular/core';
import { DevsService } from 'src/app/services/devs.service';

@Component({
  selector: 'app-dev-list',
  templateUrl: './dev-list.component.html',
  styleUrls: ['./dev-list.component.scss']
})
export class DevListComponent implements OnInit {

  constructor(
    public devsService: DevsService,
  ) { }

  ngOnInit(): void {
  }

  get list () {
    return this.devsService.list;
  }

}
