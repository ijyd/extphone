import { Component } from '@angular/core';


@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css'],
})
export class StatusBarComponent {

  constructor() { }

  private status = 'Registration failed';
  private title = 'extphone';
}
