import { Component, OnInit } from '@angular/core';
import { ApiServiceProvider } from '../api.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-latest-views',
  templateUrl: './latest-views.component.html',
  styleUrls: ['./latest-views.component.css'],
  providers: [ApiServiceProvider]
})
export class LatestViewsComponent implements OnInit {

  latestCoupons;
  show = false;
  constructor(private _api: ApiServiceProvider) { }

  ngOnInit() {
    this._api.getLatestViews().subscribe(
      data => {
        this.latestCoupons = data['items'];
        this.show = true;
      }
    );
    // get each 30 seconds new info about latest views
    Observable.interval(1000 * 60 * 30).subscribe(
      x => {
        this._api.getLatestViews().subscribe(
          data => {
            this.latestCoupons = data['items'];
            this.show = true;
          }
        );
      }
    );
  }

}
