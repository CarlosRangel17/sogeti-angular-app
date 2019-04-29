import { Component, OnInit } from '@angular/core';
import { Dashboard } from 'src/app/core/models/dashboard';
import { Role } from 'src/app/shared/models/enumerations';
import { Address } from 'src/app/shared/models/address';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {
  dashboard: Dashboard;
  viewMode = 'overview';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.dashboard = new Dashboard('Allied Pilots Association', Role.Client, 'apa-logo.png',
      new Address('14600 Trinity Blvd.', 'Suite 500', 'Fort Worth', 'TX', '76155'));
      this.router.events.subscribe(() => {
        this.viewMode = this.route.snapshot.paramMap.get('section');
      });
    }

  ngOnInit() {
  }

}
