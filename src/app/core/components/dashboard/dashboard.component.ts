import { Component, OnInit, Input } from '@angular/core';
import { Dashboard } from '../../models/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input('dashboard') dashboard: Dashboard;
  @Input('layout') layout: string;
  @Input('layout-gap') layoutGap: string;
  @Input('layout-align') layoutAlign: string;
  @Input('flex-fill') flexFill: string;
  panelOpenState = false;

  constructor() { }

  ngOnInit() {
  }

}
