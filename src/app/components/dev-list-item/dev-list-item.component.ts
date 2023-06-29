import { Component, Input, OnInit } from '@angular/core';
import { Dev } from 'src/app/services/devs.service';

@Component({
  selector: 'app-dev-list-item',
  templateUrl: './dev-list-item.component.html',
  styleUrls: ['./dev-list-item.component.scss']
})
export class DevListItemComponent implements OnInit {
  @Input() dev: Dev | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
