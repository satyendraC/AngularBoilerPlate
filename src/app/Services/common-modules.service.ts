import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class CommonModulesService {

  constructor(public local : LocalStorageService) { }

  getData(key) {
    var fetchData = this.local.get(btoa(key));
    if (fetchData) {
      return JSON.parse(atob(fetchData));
    } else {
      return false;
    }
  }

  setData(key, data) {
    var storeData = btoa(JSON.stringify(data));
    this.local.set(btoa(key), storeData);
    return true;
  }


}
