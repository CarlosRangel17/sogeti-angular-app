import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css']
})
export class DashboardContentComponent implements OnInit {

  @Input('selected-option') selectedOption = '';
  constructor() { 
  }

  ngOnInit() {
  }

}
