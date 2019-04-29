import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Consultant } from 'src/app/shared/models/consultant';
import { ConsultantService } from 'src/app/shared/services/consultant.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultant-form',
  templateUrl: './consultant-form.component.html',
  styleUrls: ['./consultant-form.component.css']
})
export class ConsultantFormComponent implements OnInit {
  // tslint:disable-next-line:no-output-rename
  @Output('viewChange') viewChange = new EventEmitter<any>();
  consultant: Consultant;
  skills: any[];
  id: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private consultantService: ConsultantService
    ) {

    this.skills = this.consultantService.getConsultantSkills();

    this.id = this.route.snapshot.paramMap.get('id');

    console.log('consultant id:', this.id);
    if (this.id) {
      this.consultant = this.consultantService.get(this.id);
    } else {
      this.consultant = {
        Id: '',
        FirstName: '',
        LastName: '',
        DateCreated: '',
        AvatarImage: '',
        Title: '',
        RatePerHour: null,
        SkillType: 0,
        ClientId: ''
      };
    }
  }

  ngOnInit() {
  }

  save (consultant: any) {
    // console.log(consultant);
    if (this.id) {
      this.consultantService.create(consultant);
    } else {
      this.consultantService.update(consultant);
    }
    this.viewChange.emit('');
    this.router.navigate(['/company/consultants']);

  }


  cancel () {
    // console.log('cancel');
    this.viewChange.emit('');
    this.router.navigate(['/company/consultants']);
  }
}
