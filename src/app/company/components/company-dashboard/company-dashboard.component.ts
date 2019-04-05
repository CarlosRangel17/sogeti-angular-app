import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/core/components/dashboard/dashboard-menu-box/dashboard-menu-box.component';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit {

  company: Section = { title: 'Company', subtitle: 'Supplier', boxColor: 'blue', links: [
    { name: 'Go To Market', route: '/market/company' },
    { name: 'Go To Sogeti Peer', route: '/company' }
  ]};
  
  constructor() { }

  ngOnInit() {
  }

}
