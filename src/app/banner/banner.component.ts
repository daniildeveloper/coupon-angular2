import { Component, OnInit } from '@angular/core';
import { ApiServiceProvider } from '../api.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  providers: [ApiServiceProvider]
})
export class BannerComponent implements OnInit {
  carouselElements;
  constructor(private _api: ApiServiceProvider) { }

  ngOnInit() {
    this._api.getBanner().subscribe(
      data => {
        this.carouselElements = data['items'];
      }
    );
  }

}
