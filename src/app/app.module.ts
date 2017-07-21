import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DialPanelComponent } from './dial-panel/dial-panel.component';
import { ConfPanelComponent } from './conf-panel/conf-panel.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { ContactsPanelComponent } from './contacts-panel/contacts-panel.component';

import { SIPRegService } from './sip/sipreg.service.component';

@NgModule({
  declarations: [
    AppComponent,
    DialPanelComponent,
    ConfPanelComponent,
    StatusBarComponent,
    ContactsPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SIPRegService],
  bootstrap: [AppComponent]
})
export class AppModule { }
