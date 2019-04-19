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
  @Input('category') category = '';
  // tslint:disable-next-line:no-input-rename
  @Input('consultants') consultants: Consultant[] = [];
  // tslint:disable-next-line:no-output-rename
  @Output('viewChange') viewChange = new EventEmitter<any>();

  displayedColumns: string[] = ['avatar', 'name', 'title', 'skill', 'rate', 'date-hired', 'client', 'edit'];
  dataSource: MatTableDataSource<Consultant>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
    // console.log('ngOnInit:', this.consultants);
    this.dataSource = new MatTableDataSource<Consultant>(this.consultants);
    this.dataSource.paginator = this.paginator;
    console.log('category:', this.category);
  }

  viewFilter(view) {
    // console.log('emit view:', view);
    this.viewChange.emit(view);
  }

}