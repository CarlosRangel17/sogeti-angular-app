import { Injectable } from '@angular/core';
import { Consultant } from '../models/consultant';
import { ConsultantSkill } from '../models/consultant-skill';
import { MarketCategory } from '../../core/models/market-category';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
  consultants: Consultant[];
  marketCategories: MarketCategory[] = [];
  constructor() { }

  create(consultant: Consultant) {

  }

  get(consultantId: string) {
    return this.getHardCodedConsultants().find(consultant => consultant.Id === consultantId) ;
  }

  getConsultants() {
    return this.getHardCodedConsultants();
  }

  getConsultantSkills(): ConsultantSkill[] {
    return this.getHardCodedSkills().sort((a, b) => a.Name.localeCompare(b.Name));
  }

  getMarketConsultants() {
    this.marketCategories = [];
    // TODO: Replace w/Http Request
    this.consultants = this.getConsultants();

    // Format assets here
    this.consultants.forEach(consultant => {
      const marketCategory = this.marketCategories.find(category => (category.Key === consultant.SkillType));
      // For market category purposes
      if (this.marketCategories && marketCategory) {
        marketCategory.Consultants.push(consultant);
      } else {
        this.marketCategories.push({
          Key: consultant.SkillType,
          AvatarUrl: '',
          Icon: consultant.SkillType.toString(),
          Consultants: [consultant]
        });
      }
    });

    // Increment for market cateogry UI/UX
    this.marketCategories.forEach(category => {
      category.Key += 1;
      category.Icon = category.Key.toString();
    });

    // TODO: Work out logic for 'Most Reviewed' & 'Newly Added' categories
    const mostReviewed = this.consultants;
    const newlyAdded = this.consultants;
    this.marketCategories.push({
      Key: 0,
      AvatarUrl: '',
      Icon: '0',
      Consultants: mostReviewed
    });
    this.marketCategories.push({
      Key: 1,
      AvatarUrl: '',
      Icon: '1',
      Consultants: newlyAdded
    });

    console.log(this.marketCategories);
    return this.marketCategories.sort((a, b) => a.Key - b.Key);
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
        AvatarImage: 'https://media.licdn.com/dms/image/C4E03AQFN2ftEHgSZBQ/profile-displayphoto-shrink_200_200/0?e=1558569600&v=beta&t=iWpdbQ922v2JsPuIdyxyYWgEWOh1cdQSB_k9nzjVnXI',
        RatePerHour: 25,
        SkillType: 1,
        Title: 'Sr. Consultant',
        ClientId: ''
      },
      {
        Id: '2',
        DateCreated: '3/22/2019',
        FirstName: 'Keyur',
        LastName: 'Patel',
        // tslint:disable-next-line:max-line-length
        AvatarImage: 'https://media.licdn.com/dms/image/C4E03AQFUl-ubR5hmhg/profile-displayphoto-shrink_800_800/0?e=1558569600&v=beta&t=-uz2TrCF78TGE8L3q-wWazRCZPO_WmCXok-Y-1Nyt9A',
        RatePerHour: 25,
        SkillType: 5,
        Title: 'Sr. Consultant',
        ClientId: ''
      },
      {
        Id: '3',
        DateCreated: '3/22/2019',
        FirstName: 'Puneet',
        LastName: 'Mittal',
        // tslint:disable-next-line:max-line-length
        AvatarImage: 'https://media.licdn.com/dms/image/C4D03AQGRNWlTsjUZjQ/profile-displayphoto-shrink_800_800/0?e=1558569600&v=beta&t=9ZXm6tPjXvOtqSr3aUS1maSPCAAMHZCONg8i9x95lZQ',
        RatePerHour: 25,
        SkillType: 4,
        Title: 'Manager',
        ClientId: ''
      },
      {
        Id: '4',
        DateCreated: '3/22/2019',
        FirstName: 'Brandon',
        LastName: 'Timmons',
        // tslint:disable-next-line:max-line-length
        AvatarImage: 'https://media.licdn.com/dms/image/C4E03AQEYOFuiK_0_dw/profile-displayphoto-shrink_800_800/0?e=1558569600&v=beta&t=Bv8Ivkti0y1zFOakTgcv7NsV0VHwfuW5BSvcIAU2rkM',
        RatePerHour: 25,
        SkillType: 2,
        Title: 'Sr. Consultant',
        ClientId: ''
      },
      {
        Id: '5',
        DateCreated: '3/22/2019',
        FirstName: 'Van',
        LastName: 'Tran',
        // tslint:disable-next-line:max-line-length
        AvatarImage: 'https://media.licdn.com/dms/image/C5603AQFzQMMgDoCZPA/profile-displayphoto-shrink_800_800/0?e=1558569600&v=beta&t=1rgYw_vZlet8GpRVsR2BDHwg3-G5yvKUP-Pqs_cVdYc',
        RatePerHour: 25,
        SkillType: 5,
        Title: 'Sr. Consultant',
        ClientId: ''
      },
      {
        Id: '6',
        DateCreated: '3/22/2019',
        FirstName: 'Darshan',
        LastName: 'Patel',
        // tslint:disable-next-line:max-line-length
        AvatarImage: 'https://media.licdn.com/dms/image/C5103AQEDqvKYESdOcA/profile-displayphoto-shrink_800_800/0?e=1558569600&v=beta&t=yfZTDWNC9ReObSYctn7ZgRm-hPBgsW6zv_8LHwwdmPs',
        RatePerHour: 25,
        SkillType: 2,
        Title: 'Sr. Consultant',
        ClientId: ''
      }
    ];
  }
}
