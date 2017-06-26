import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  supportPhone: string;

  constructor() { }

  ngOnInit() {
    // this.supportPhone = this._api.getSupportPhone();
  }

}
