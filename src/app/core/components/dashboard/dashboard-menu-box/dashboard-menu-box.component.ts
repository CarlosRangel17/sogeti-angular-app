import { Component, Input } from '@angular/core';

export interface SectionLink {
  name: string;
  route: string;
}
export interface Section {
  title: string;
  subtitle: string;
  boxColor: string;
  links: SectionLink[];
}

@Component({
  selector: 'app-dashboard-menu-box',
  templateUrl: './dashboard-menu-box.component.html',
  styleUrls: ['./dashboard-menu-box.component.scss']
})
export class DashboardMenuBoxComponent {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() links: SectionLink[];
  // tslint:disable-next-line:no-input-rename
  @Input('box-color') boxColor: string;

  constructor() { }
}
