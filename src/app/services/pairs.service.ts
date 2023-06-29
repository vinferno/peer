import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Dev } from './devs.service';

class Pair extends BaseService {
  id = 'Pair Item';

  constructor(dev1: Dev, dev2: Dev) {
    super();
    this.id = [dev1, dev2]
      .sort(this.compareIdOrder)
      .map((dev) => dev.id)
      .join('');
    [dev1, dev2].sort(this.compareIdOrder).forEach((dev) => {
      this.add(dev);
    });
  }

  compareIdOrder(a: Dev, b: Dev) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  }
}

@Injectable({
  providedIn: 'root',
})
export class PairsService extends BaseService {
  id = 'Pairs Service';
  constructor() {
    super();
  }

  createAllPairs(array: any[]) {
    for (var i = 0; i < array.length; i++) {
      for (var j = i + 1; j < array.length; j++) {
        const pair = new Pair(array[i], array[j]);
        this.add(pair);
      }
    }
  }
}
