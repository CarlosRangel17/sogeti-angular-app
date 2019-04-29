import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Consultant } from 'src/app/shared/models/consultant';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-manage-consultants',
  templateUrl: './manage-consultants.component.html',
  styleUrls: ['./manage-consultants.component.css']
})
export class ManageConsultantsComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('consultants') consultants: Consultant[] = [];
  // tslint:disable-next-line:no-output-rename
  @Output('viewChange') viewChange = new EventEmitter<any>();

  displayedColumns: string[] = ['avatar', 'name', 'title', 'skill', 'rate', 'date-hired', 'client', 'edit'];
  dataSource: MatTableDataSource<Consultant>;
  filteredConsultants: Consultant[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { 
    this.filteredConsultants = this.consultants;
  }

  ngOnInit() {
    // console.log('ngOnInit:', this.consultants);
    this.dataSource = new MatTableDataSource<Consultant>(this.consultants);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(category: string) {
    // console.log('apply:', this.category);
    switch (category) {
      case 'Pending':
        this.filteredConsultants = this.consultants.filter(consultant => consultant.ClientId);
    break;
      case 'FTE':
        this.filteredConsultants = this.consultants.filter(consultant => consultant.ClientId);
        break;
      case 'ATO':
        this.filteredConsultants = this.consultants.filter(consultant => !consultant.ClientId);
        break;
      default:
        this.filteredConsultants = this.consultants;
    }
    this.dataSource = new MatTableDataSource<Consultant>(this.filteredConsultants);
    console.log(this.filteredConsultants);
  }

  viewFilter(view) {
    // console.log('emit view:', view);
    this.viewChange.emit(view);
  }

}
