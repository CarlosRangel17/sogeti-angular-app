import { Component } from '@angular/core';

export interface SectionLink {
  name: string;
  route: string;
}
export interface Section {
  title: string;
  subtitle: string;
  links: SectionLink[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  company: Section = { title: 'Company', subtitle: 'Supplier', links: [
    { name: 'Go To Market', route: '/market' },
    { name: 'Go To Dashboard', route: '/dashboard' }
  ]};

  constructor() { }

}
