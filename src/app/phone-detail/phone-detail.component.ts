import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { PhoneModel } from '../models/phone.model';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.less']
})
export class PhoneDetailComponent implements OnInit {

  phone: PhoneModel;
  sub: any;
  id: any;

  constructor(private route: ActivatedRoute, private _dataService: DataService) {
    const vm: PhoneDetailComponent = this;
    vm.sub = vm.route.params.subscribe(params => {
        vm.id = params['id'];
    });
  }

  ngOnInit() {
    const vm: PhoneDetailComponent = this;

    vm._dataService.getPhoneDetail(vm.id)
      .subscribe(function(res) {
        vm.phone = res.json();
      }, error => console.log(error));
  }

}
