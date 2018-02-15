import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { PhoneModel } from '../models/phone.model';

import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.less'],
  animations: [
    trigger('appear', [
      state('inactive', style({
        opacity: '0'
      })),
      state('active', style({
        opacity: '1'
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('900ms ease-out'))
    ])
  ]
})
export class PhoneListComponent implements OnInit {

  phones: PhoneModel[];
  show: boolean;
  appearState: string;

  constructor(private _dataService: DataService) {
    const vm: PhoneListComponent = this;
    vm.phones = [];
    vm.show = true;
    vm.appearState = 'inactive';
  }

  ngOnInit() {
    const vm: PhoneListComponent = this;
    vm._dataService.getPhoneList()
      .subscribe(res => {
        vm.show = false;
        res.json().forEach(function(phoneElement: PhoneModel) {
            vm.phones.push(new PhoneModel(phoneElement));
            vm.appearState = 'active';
        });
      }, error => console.log(error));
  }

}
