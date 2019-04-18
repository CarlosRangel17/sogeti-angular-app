import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Consultant } from 'src/app/shared/models/consultant';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-consultants',
  templateUrl: './manage-consultants.component.html',
  styleUrls: ['./manage-consultants.component.css']
})
export class ManageConsultantsComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('consultants') consultants: Consultant[] = [];
  displayedColumns: string[] = ['avatar', 'name', 'date-hired', 'title', 'skill', 'rate', 'client'];
  dataSource: MatTableDataSource<Consultant>;
  viewMode = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.router.events.subscribe(() => {
      this.viewMode = this.route.snapshot.url[this.route.snapshot.url.length - 1].path;
      console.log(this.viewMode);
    });
  }

  ngOnInit() {
    // console.log('ngOnInit:', this.consultants);
    this.dataSource = new MatTableDataSource<Consultant>(this.consultants);
    this.dataSource.paginator = this.paginator;
  }
}
