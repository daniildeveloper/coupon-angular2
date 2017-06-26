import { Component } from '@angular/core';
import { ApiServiceProvider } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiServiceProvider]
})
export class AppComponent {
  title = 'app works!';
  supportPhone;
  isSupportPhoneAvailable: Boolean = false;
  constructor(private _api: ApiServiceProvider) {

  }

  ngOnInit() {
    this._api.getSupportPhone().subscribe(
      data => {
        // console.log(data);
        this.supportPhone = data;
      }
    );
    this._api.getCouponCategorieById(1).subscribe(
      data => console.log(data)
    );
  }
}
