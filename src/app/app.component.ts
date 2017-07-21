import { Component } from '@angular/core';

import { SIPRegService } from './sip/sipreg.service.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'extphone';
  constructor(private sipreg: SIPRegService) { }


  wsConnect() {
    this.sipreg.wsConnect();
  }
}
