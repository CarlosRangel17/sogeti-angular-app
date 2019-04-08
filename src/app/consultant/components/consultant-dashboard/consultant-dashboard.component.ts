import { Component, OnInit } from '@angular/core';
import { Dashboard } from 'src/app/core/models/dashboard';
import { Role } from 'src/app/shared/models/Enumerations';
import { Address } from 'src/app/shared/models/address';

@Component({
  selector: 'app-consultant-dashboard',
  templateUrl: './consultant-dashboard.component.html',
  styleUrls: ['./consultant-dashboard.component.css']
})
export class ConsultantDashboardComponent implements OnInit {
  dashboard: Dashboard;
  constructor() { 
    this.dashboard = new Dashboard('Carlos Rangel', Role.Consultant, 'carlos-rangel.jpg', new Address('1009 McKinney St', 'Lot A', 'Arlington', 'TX', '76012'));
  }

  ngOnInit() {
  }

}
