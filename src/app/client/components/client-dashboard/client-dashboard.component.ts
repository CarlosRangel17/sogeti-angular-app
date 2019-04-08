import { Component, OnInit } from '@angular/core';
import { Dashboard } from 'src/app/core/models/dashboard';
import { Role } from 'src/app/shared/models/Enumerations';
import { Address } from 'src/app/shared/models/address';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {
  dashboard: Dashboard;
  constructor() { 
    this.dashboard = new Dashboard('Allied Pilots Association (APA)', Role.Client, 'apa-logo.png', new Address('14600 Trinity Blvd.', 'Suite 500', 'Fort Worth', 'TX', '76155'));
  }

  ngOnInit() {
  }

}
