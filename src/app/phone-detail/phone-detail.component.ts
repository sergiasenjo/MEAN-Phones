import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { PhoneModel } from '../models/phone.model';

import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.less'],
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
export class PhoneDetailComponent implements OnInit {

  phone: PhoneModel;
  sub: any;
  id: string;
  show: boolean;
  appearState: string;

  constructor(private route: ActivatedRoute, private _dataService: DataService) {
    const vm: PhoneDetailComponent = this;
    vm.phone = new PhoneModel({_id: '', name: '', image: ''});
    vm.sub = vm.route.params.subscribe(params => {
        vm.id = params['id'];
    });
    vm.show = true;
    vm.appearState = 'inactive';
  }

  ngOnInit() {
    const vm: PhoneDetailComponent = this;

    vm._dataService.getPhoneDetail(vm.id)
      .subscribe(function(res) {
        vm.phone = res.json();
        vm.show = false;
        vm.appearState = 'active';
      }, error => console.log(error));
  }

}
