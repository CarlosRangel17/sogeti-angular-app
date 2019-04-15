import { Component, OnInit } from '@angular/core';
import { Consultant } from 'src/app/shared/models/consultant';
import { ConsultantService } from 'src/app/shared/services/consultant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-consultants',
  templateUrl: './company-consultants.component.html',
  styleUrls: ['./company-consultants.component.css']
})
export class CompanyConsultantsComponent implements OnInit {
  consultants: Consultant[] = [];
  viewMode = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private consultantService: ConsultantService
    ) {
    this.consultants = this.consultantService.getConsultants();
    console.log(this.consultants);
    this.router.events.subscribe(() => {
      this.viewMode = this.route.snapshot.paramMap.get('');
    });
  }

  ngOnInit() {
  }
}
