import { Component } from '@angular/core';
import { Section } from '../dashboard-menu-box/dashboard-menu-box.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  company: Section = { title: 'Company', subtitle: 'Supplier', boxColor: 'blue', links: [
    { name: 'Go To Market', route: '/market' },
    { name: 'Go To Sogeti Peer', route: '/company' }
  ]};

  regulator: Section = { title: 'Regulator', subtitle: 'Asset Verifier', boxColor: 'red', links: [
    { name: 'Go To Regulator Peer', route: '/regulator' },
  ]};

  client: Section = { title: 'Client', subtitle: 'Buyer', boxColor: 'yellow', links: [
    { name: 'Go To Market', route: '/market' },
    { name: 'Go To Client Peer', route: '/client' }
  ]};

  consultant: Section = { title: 'Consultant', subtitle: 'Asset', boxColor: 'green', links: [
    { name: 'Go To Consultant Peer', route: '/consultant' },
  ]};

  constructor() { }

}
