import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { PhoneModel } from '../models/phone.model';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.less']
})
export class PhoneListComponent implements OnInit {

  phones: PhoneModel[];
  show: boolean;

  constructor(private _dataService: DataService) {
    const vm: PhoneListComponent = this;
    vm.phones = [];
  }

  ngOnInit() {
    const vm: PhoneListComponent = this;
    vm.show = true;
    vm._dataService.getPhoneList()
      .subscribe(res => {
        vm.show = false;
        res.json().forEach(function(phoneElement: PhoneModel) {
            vm.phones.push(new PhoneModel(phoneElement));
        });
      }, error => console.log(error));

    console.log(vm.phones);
  }

}
