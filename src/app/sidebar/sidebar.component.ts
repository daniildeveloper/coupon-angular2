import { Component, OnInit } from '@angular/core';
import { ApiServiceProvider } from '../api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [ApiServiceProvider]
})
export class SidebarComponent implements OnInit {
  couponCategories;
  constructor(private _api: ApiServiceProvider) { }

  ngOnInit() {
    this._api.getCouponCategories().subscribe(
      data => {
        this.couponCategories = data['items'];
      }
    )
  }

}
