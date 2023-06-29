import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  id = 'NoID';
  ids: string[] = [];
  items: any = {};

  add(item: {id: string}) {
      const id = item.id;
      this.ids.push(id);
      this.items[id] = item;
  }
  getById(id: string) {
      return this.items[id];
  }
  addId(id: string) {
      this.id = id;
  }
  get list () {
      return this.ids.map(id => this.items[id]);
  }

  remove(item: {id: string}) {
      return this.removeById(item.id);
  }
  removeById(id: string) {
      this.ids.splice(this.ids.indexOf(id), 1);
      return delete this.items[id];
  }

  listToIds(list: {id: string}[]) {
      return list.map(item => item.id);
  }
}
