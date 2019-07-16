import { Injectable } from '@angular/core';
import { Consultant } from '../models/consultant';
import { ConsultantSkill } from '../models/consultant-skill';
import { MarketCategory } from '../../core/models/market-category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsultantAssetchain } from '../models/consultant-assetchain';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
  consultants: Observable<Object>;
  marketCategories: MarketCategory[] = [];
  baseUrl: string = 'http://localhost:8000'; // Should make ENV variable 

  constructor(private httpClient: HttpClient) { }

  create(consultant: Consultant) {

  }

  get(consultantId: string) {
    return this.getHardCodedConsultants().find(consultant => consultant.Id === consultantId);
  }

  getDemoConsultants(): Observable<ConsultantAssetchain[]> {
    return this.httpClient.get<ConsultantAssetchain[]>(this.baseUrl + '/get_all_consultants');
  }

  getConsultants() {
    return this.getDemoConsultants();
    // return this.getHardCodedConsultants();
  }

  getConsultantSkills(): ConsultantSkill[] {
    return this.getHardCodedSkills().sort((a, b) => a.Name.localeCompare(b.Name));
  }

  update(consultant: Consultant) {

  }

  private getHardCodedSkills() {
    return [
      {
        Key: 1,
        Name: 'Blockchain',
        Icon: 'code'
      },
      {
        Key: 2,
        Name: 'Web',
        Icon: 'web'
      },
      {
        Key: 3,
        Name: 'Mobile',
        Icon: 'mobile'
      },
      {
        Key: 4,
        Name: 'Cloud',
        Icon: 'cloud'
      },
      {
        Key: 5,
        Name: 'Business Analytics',
        Icon: 'bar_chart'
      }
    ];
  }

  private getHardCodedConsultants() {
    return [
      {
        Id: '1',
        DateCreated: '3/22/2019',
        FirstName: 'Carlos',
        LastName: 'Rangel',
        // tslint:disable-next-line:max-line-length
        AvatarImage: 'https://media.licdn.com/dms/image/C4E03AQFN2ftEHgSZBQ/profile-displayphoto-shrink_200_200/0?e=1565827200&v=beta&t=tKWAS4NaN7nAtONwaOf94o3S8NEEjVyxQxkv3POv9Yo',
        RatePerHour: 25,
        SkillType: 1,
        Title: 'Sr. Consultant',
        ClientId: '',
        jsonMap: Consultant.prototype.jsonMap,
        arrayMap: Consultant.prototype.arrayMap,
        stringMap: Consultant.prototype.stringMap
      },
      {
        Id: '2',
        DateCreated: '3/22/2019',
        FirstName: 'Keyur',
        LastName: 'Patel',
        // tslint:disable-next-line:max-line-length
        AvatarImage: 'https://media.licdn.com/dms/image/C4E03AQFUl-ubR5hmhg/profile-displayphoto-shrink_800_800/0?e=1565827200&v=beta&t=ldiL0NJ8LddIrxBPC80OBkkXSV-zrUG_lBk9MggoxB0',
        RatePerHour: 25,
        SkillType: 5,
        Title: 'Sr. Consultant',
        ClientId: '',
        jsonMap: Consultant.prototype.jsonMap,
        arrayMap: Consultant.prototype.arrayMap,
        stringMap: Consultant.prototype.stringMap
      },
      {
        Id: '3',
        DateCreated: '3/22/2019',
        FirstName: 'Puneet',
        LastName: 'Mittal',
        // tslint:disable-next-line:max-line-length
        AvatarImage: 'https://media.licdn.com/dms/image/C4D03AQGRNWlTsjUZjQ/profile-displayphoto-shrink_800_800/0?e=1565827200&v=beta&t=nr0Sh23JTQ0rCAp1yq-9VdJVmqNILB-n5ivEXHA_d2I',
        RatePerHour: 25,
        SkillType: 4,
        Title: 'Manager',
        ClientId: '',
        jsonMap: Consultant.prototype.jsonMap,
        arrayMap: Consultant.prototype.arrayMap,
        stringMap: Consultant.prototype.stringMap
      },
      {
        Id: '4',
        DateCreated: '3/22/2019',
        FirstName: 'Brandon',
        LastName: 'Timmons',
        // tslint:disable-next-line:max-line-length
        AvatarImage: 'https://media.licdn.com/dms/image/C4E03AQEYOFuiK_0_dw/profile-displayphoto-shrink_800_800/0?e=1565827200&v=beta&t=tWnKALbsypCXdAeu0HJv_z0R8GvsYfb1W118dkGqT8Q',
        RatePerHour: 25,
        SkillType: 2,
        Title: 'Sr. Consultant',
        ClientId: '',
        jsonMap: Consultant.prototype.jsonMap,
        arrayMap: Consultant.prototype.arrayMap,
        stringMap: Consultant.prototype.stringMap
      },
      {
        Id: '5',
        DateCreated: '3/22/2019',
        FirstName: 'Van',
        LastName: 'Tran',
        // tslint:disable-next-line:max-line-length
        AvatarImage: 'https://media.licdn.com/dms/image/C5603AQFzQMMgDoCZPA/profile-displayphoto-shrink_800_800/0?e=1565827200&v=beta&t=gNvqBXtxOMYtQtXFDQvAphDra0m8z5To2fz00l_4sDU',
        RatePerHour: 25,
        SkillType: 5,
        Title: 'Sr. Consultant',
        ClientId: '',
        jsonMap: Consultant.prototype.jsonMap,
        arrayMap: Consultant.prototype.arrayMap,
        stringMap: Consultant.prototype.stringMap
      },
      {
        Id: '6',
        DateCreated: '3/22/2019',
        FirstName: 'Darshan',
        LastName: 'Patel',
        // tslint:disable-next-line:max-line-length
        AvatarImage: 'https://media.licdn.com/dms/image/C5103AQEDqvKYESdOcA/profile-displayphoto-shrink_800_800/0?e=1565827200&v=beta&t=KwE8aFPbb4K-6UF0nX-XP0S6C9iAFy3KM8sj74mVsqo',
        RatePerHour: 25,
        SkillType: 2,
        Title: 'Sr. Consultant',
        ClientId: '',
        jsonMap: Consultant.prototype.jsonMap,
        arrayMap: Consultant.prototype.arrayMap,
        stringMap: Consultant.prototype.stringMap
      }
    ];
  }
}
