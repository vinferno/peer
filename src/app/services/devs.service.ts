import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

export class Dev extends BaseService {
  id = 'Dev Item'
  constructor(id: string) {
    super();
    this.id = id;
  }
}

@Injectable({
  providedIn: 'root',
})
export class DevsService extends BaseService {
  id = 'Devs Service'
  constructor() {
    super();
  }

  createAllDevs() {
    const devList = [
      'Vinson',
      'Aman',
      'Angel',
      'Bryce',
      'Chazz',
      'Gichelle',
      'John',
      'Lielt',
      'Mekdes',
      'Saba',
      'Sirisha',
    ];


    devList.forEach((dev) => {
      this.add(new Dev(dev));
    });

  }



}
