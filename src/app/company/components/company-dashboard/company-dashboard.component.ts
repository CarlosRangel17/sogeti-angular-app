import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/core/components/dashboard/dashboard-menu-box/dashboard-menu-box.component';
import { Dashboard } from 'src/app/core/models/dashboard';
import { Address } from 'src/app/shared/models/address';
import { Role } from 'src/app/shared/models/Enumerations';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss']
})
export class CompanyDashboardComponent implements OnInit {
  dashboard: Dashboard;
  company: Section = { title: 'Company', subtitle: 'Supplier', boxColor: 'blue', links: [
    { name: 'Go To Market', route: '/market/company' },
    { name: 'Go To Sogeti Peer', route: '/company' }
  ]};
  
  constructor() { 
    this.dashboard = new Dashboard('Sogeti Capgemeni', Role.Company, 'sogeti-logo.png', new Address('222 West Las Colinas Blvd', '# 1550', 'Irving', 'TX', '75039'));
  }

  ngOnInit() {
  } 
}