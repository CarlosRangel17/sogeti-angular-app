import { Component, OnInit, Input } from '@angular/core';
import { Dashboard } from '../../models/dashboard';
import { Router, ActivatedRoute } from '@angular/router';

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
  options = [];
  selectedOption = '';
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    for (const route of this.router.config) {
      if (route.data && route.data.label && route.data.label === this.dashboard.Role && route.data.sublinks) {
        for (const link of route.data.sublinks) {
          this.options.push({
            key: link,
          });
        }
      }
    }

    this.selectedOption = this.route.snapshot.paramMap.get('section');
    if (!this.selectedOption) {
      this.selectedOption = this.options.length > 0 ? this.options[0].key : '';
    }
  }

  updateOption(newOption) {
    this.selectedOption = newOption;
  }

}
