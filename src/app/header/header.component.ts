import { Component, OnInit } from '@angular/core';
import { ApiServiceProvider } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ApiServiceProvider]
})
export class HeaderComponent implements OnInit {
  supportPhone;
  menuItems;
  constructor(private _api: ApiServiceProvider) { }

  ngOnInit() {
    this._api.getSupportPhone().subscribe(
      data => {
        this.supportPhone = data;
      }
    );
    this._api.getMenuItems().subscribe(
      data => {
        console.log(data);
        this.menuItems = data['items'];
      }
    )
  }

}
