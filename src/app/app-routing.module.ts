import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DialPanelComponent } from './dial-panel/dial-panel.component';
import { ConfPanelComponent } from './conf-panel/conf-panel.component';
import { ContactsPanelComponent } from './contacts-panel/contacts-panel.component';



const routes: Routes = [
  { path: '', redirectTo: '/dial', pathMatch: 'full' },
  { path: 'dial', component: DialPanelComponent },
  { path: 'conf', component: ConfPanelComponent },
  { path: 'contacts', component: ContactsPanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
