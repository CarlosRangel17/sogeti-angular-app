import { Component, OnInit, ViewChild, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Consultant } from 'src/app/shared/models/consultant';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-manage-consultants',
  templateUrl: './manage-consultants.component.html',
  styleUrls: ['./manage-consultants.component.css']
})
export class ManageConsultantsComponent implements OnInit, OnChanges {
  private _consultants: Consultant[];
  // tslint:disable-next-line:no-input-rename
  @Input('consultants') set consultants(value: Consultant[]) {
    this._consultants = value;
    console.log(this._consultants);
  }
  // tslint:disable-next-line:no-output-rename
  @Output('viewChange') viewChange = new EventEmitter<any>();

  displayedColumns: string[] = ['avatar', 'name', 'title', 'skill', 'rate', 'date-hired', 'client', 'edit'];
  dataSource: MatTableDataSource<Consultant>;
  filteredConsultants: Consultant[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { 
    console.log('constructor:', this._consultants);
    this.dataSource = new MatTableDataSource<Consultant>(this._consultants);
    this.dataSource.paginator = this.paginator;
    this.filteredConsultants = this._consultants;
  }

  ngOnInit() {
    console.log('ngOnInit:', this._consultants);
    this.dataSource = new MatTableDataSource<Consultant>(this._consultants);
    this.dataSource.paginator = this.paginator;
    this.filteredConsultants = this._consultants;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes detected');
    this.dataSource = new MatTableDataSource<Consultant>(changes.consultants.currentValue);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(category: string) {
    // console.log('apply:', this.category);
    switch (category) {
      case 'Pending':
        this.filteredConsultants = this._consultants.filter(consultant => consultant.ClientId);
    break;
      case 'FTE':
        this.filteredConsultants = this._consultants.filter(consultant => consultant.ClientId);
        break;
      case 'ATO':
        this.filteredConsultants = this._consultants.filter(consultant => !consultant.ClientId);
        break;
      default:
        this.filteredConsultants = this._consultants;
    }
    this.dataSource = new MatTableDataSource<Consultant>(this.filteredConsultants);
    console.log('filtered', this.filteredConsultants);
  }

  viewFilter(view) {
    // console.log('emit view:', view);
    this.viewChange.emit(view);
  }

}
