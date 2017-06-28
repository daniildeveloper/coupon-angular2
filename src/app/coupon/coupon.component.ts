import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceProvider } from '../api.service';
declare var Swiper: any;

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {
  id;
  coupon;
  subscribtion;
  slides;

  constructor(private _route: ActivatedRoute, private _api: ApiServiceProvider) { }

  ngOnInit() {
    this.subscribtion = this._route.params.subscribe(params => {
      this.id = params['id'];
    });
    this._api.getCoupon(this.id).subscribe(
      data => {
        this.coupon = data;
        this.slides = data['images'];
        console.log(data);
      }
    );
  }

}
