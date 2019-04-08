import { Component, OnInit } from '@angular/core';
import { Dashboard } from 'src/app/core/models/dashboard';
import { Role } from 'src/app/shared/models/Enumerations';
import { Address } from 'src/app/shared/models/address';

@Component({
  selector: 'app-regulator-dashboard',
  templateUrl: './regulator-dashboard.component.html',
  styleUrls: ['./regulator-dashboard.component.css']
})
export class RegulatorDashboardComponent implements OnInit {
  dashboard: Dashboard;
  constructor() { 
    this.dashboard = new Dashboard('Keyur Patel', Role.Regulator, 'keyur-patel.jpg', new Address('123 Test Blvd..', 'Suite 500', 'Fort Worth', 'TX', '76155'));
  }

  ngOnInit() {
  }

}
