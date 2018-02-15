import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;

  constructor(private _http: Http) { }

  getPhoneList() {
    const vm: DataService = this;
    return vm._http.get('/phones')
      .map(result => vm.result = result);
  }

  getPhoneDetail(id) {
    const vm: DataService = this;
    return this._http.get('/phone/' + id);
}

}
