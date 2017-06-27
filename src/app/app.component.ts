import { Component } from '@angular/core';
import { ApiServiceProvider } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiServiceProvider]
})
export class AppComponent {
  title = 'Chiki chiki. Powered by daniiltserin!';
  supportPhone;
  isSupportPhoneAvailable: Boolean = false;
  constructor(private _api: ApiServiceProvider) {

  }

  ngOnInit() {
  }
}
