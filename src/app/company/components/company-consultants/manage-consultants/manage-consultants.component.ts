import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Consultant } from 'src/app/shared/models/consultant';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultantService } from 'src/app/shared/services/consultant.service';

@Component({
  selector: 'app-manage-consultants',
  templateUrl: './manage-consultants.component.html',
  styleUrls: ['./manage-consultants.component.css']
})
export class ManageConsultantsComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('consultants') consultants: Consultant[] = [];
  displayedColumns: string[] = ['name', 'date-hired', 'title', 'skill', 'rate', 'client'];
  dataSource: MatTableDataSource<Consultant>;
  viewMode = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    console.log(this.consultants);
    this.dataSource = new MatTableDataSource<Consultant>(this.consultants);
    this.router.events.subscribe(() => {
      this.viewMode = this.route.snapshot.paramMap.get('');
    });
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
