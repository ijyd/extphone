import { Component, OnInit } from '@angular/core';

import { SIPRegService } from './sip/sipreg.service.component';

declare var device;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'extphone';
  constructor(private sipreg: SIPRegService) { }


  wsConnect() {
    this.sipreg.wsConnect();
  }

  ngOnInit() {
    document.addEventListener('deviceready', onDeviceReady, false);
    function onDeviceReady() {
      alert(device.platform);
    }
  }
}
