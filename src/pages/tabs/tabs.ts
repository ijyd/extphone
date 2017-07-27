import { Component } from '@angular/core';
import { PopoverController } from "ionic-angular";


import { MePage } from '../me/me';
import { ContactsPage } from '../contacts/contacts';
import { DialPage } from '../dial/dial';
import { ChatPage } from '../chat/chat';
import { PopoverPage } from '../popover/popover';

@Component({
  templateUrl: 'tabs.html',
  selector: 'entry-page',
})
export class TabsPage {

  tabDial = DialPage;
  tabChat = ChatPage;
  tabContacts = ContactsPage;
  tabMe = MePage;

  constructor(public popoverCtrl: PopoverController) {
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}
