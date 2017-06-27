import { Component, OnInit } from '@angular/core';
import { ApiServiceProvider } from '../api.service';

/**
 * all simple coupons are here
 */
@Component({
  selector: 'app-coupons-chunk',
  templateUrl: './coupons-chunk.component.html',
  styleUrls: ['./coupons-chunk.component.css']
})
export class CouponsChunkComponent implements OnInit {
  coupons;
  
  constructor(private _api: ApiServiceProvider) { }

  ngOnInit() {
    this._api.getCoupons().subscribe(
      data => {
        this.coupons = data['items'];
      }
    )
  }

  isTop() {
    let style = {
      'border':  '5px solid #FEC52E'
    };
    

  }

}
