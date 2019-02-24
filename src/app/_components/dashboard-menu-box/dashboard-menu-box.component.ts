import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-menu-box',
  templateUrl: './dashboard-menu-box.component.html',
  styleUrls: ['./dashboard-menu-box.component.scss']
})
export class DashboardMenuBoxComponent {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() links: string;

  constructor() { }
}
