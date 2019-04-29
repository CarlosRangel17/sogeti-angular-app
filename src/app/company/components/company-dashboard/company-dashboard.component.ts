import { Component, OnInit } from '@angular/core';
import { Dashboard } from 'src/app/core/models/dashboard';
import { Address } from 'src/app/shared/models/address';
import { Role } from 'src/app/shared/models/enumerations';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss']
})
export class CompanyDashboardComponent implements OnInit {
  dashboard: Dashboard;
  viewMode = 'overview';
  id = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.dashboard = new Dashboard('Sogeti Capgemeni', Role.Company, 'sogeti-logo.png',
      new Address('222 West Las Colinas Blvd', '# 1550', 'Irving', 'TX', '75039'));
      // TODO: Optimization - Logs more than once
    this.router.events.subscribe(() => {
      this.viewMode = this.route.snapshot.paramMap.get('section');
      // Pass id into app-company-consultant component
      // console.log('id:', this.route.snapshot.paramMap.get('id'));
      this.id = this.route.snapshot.paramMap.get('id');
    });
  }

  ngOnInit() {
  }
}
