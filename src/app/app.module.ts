import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SIPRegService } from './sip/sipreg.service.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SIPRegService],
  bootstrap: [AppComponent]
})
export class AppModule { }
