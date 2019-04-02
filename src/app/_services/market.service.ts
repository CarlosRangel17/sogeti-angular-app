import { Injectable } from '@angular/core';
import { Consultant } from '../_models/consultant';
import { Utils } from '../helpers/utils';
import { MarketCategory } from '../_models/market-category';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  profile: string;
  consultants: Consultant[];
  categories: MarketCategory[];
  constructor(
    private route: ActivatedRoute,
    private utils: Utils
  ) {
    // TODO: Figure out how to do this with ActivatedRoute
    let url: any = window.location.href;
    url = url.split('/');
    this.profile = url[url.length - 1];
  }

  getMarketAssets() {

    // Make HTTP request here
    this.consultants = [
      {
        DateCreated: '3/22/2019',
        FirstName: 'Carlos',
        LastName: 'Rangel',
        // tslint:disable-next-line:max-line-length
        AvatarImage: 'https://media.licdn.com/dms/image/C4E03AQFN2ftEHgSZBQ/profile-displayphoto-shrink_200_200/0?e=1558569600&v=beta&t=iWpdbQ922v2JsPuIdyxyYWgEWOh1cdQSB_k9nzjVnXI',
        RatePerHour: 25,
        SkillType: 2,
        Title: 'Sr. Consultant',
      },
      {
        DateCreated: '3/22/2019',
        FirstName: 'Keyur',
        LastName: 'Patel',
        // tslint:disable-next-line:max-line-length
        AvatarImage: 'https://media.licdn.com/dms/image/C4E03AQFUl-ubR5hmhg/profile-displayphoto-shrink_800_800/0?e=1558569600&v=beta&t=-uz2TrCF78TGE8L3q-wWazRCZPO_WmCXok-Y-1Nyt9A',
        RatePerHour: 25,
        SkillType: 5,
        Title: 'Sr. Consultant',
      },
      {
        DateCreated: '3/22/2019',
        FirstName: 'Puneet',
        LastName: 'Mittal',
        // tslint:disable-next-line:max-line-length
        AvatarImage: 'https://media.licdn.com/dms/image/C4D03AQGRNWlTsjUZjQ/profile-displayphoto-shrink_800_800/0?e=1558569600&v=beta&t=9ZXm6tPjXvOtqSr3aUS1maSPCAAMHZCONg8i9x95lZQ',
        RatePerHour: 25,
        SkillType: 3,
        Title: 'Manager',
      },
      {
        DateCreated: '3/22/2019',
        FirstName: 'Brandon',
        LastName: 'Timmons',
        // tslint:disable-next-line:max-line-length
        AvatarImage: 'https://media.licdn.com/dms/image/C4E03AQEYOFuiK_0_dw/profile-displayphoto-shrink_800_800/0?e=1558569600&v=beta&t=Bv8Ivkti0y1zFOakTgcv7NsV0VHwfuW5BSvcIAU2rkM',
        RatePerHour: 25,
        SkillType: 3,
        Title: 'Sr. Consultant',
      },
      {
        DateCreated: '3/22/2019',
        FirstName: 'Van',
        LastName: 'Tran',
        // tslint:disable-next-line:max-line-length
        AvatarImage: 'https://media.licdn.com/dms/image/C5603AQFzQMMgDoCZPA/profile-displayphoto-shrink_800_800/0?e=1558569600&v=beta&t=1rgYw_vZlet8GpRVsR2BDHwg3-G5yvKUP-Pqs_cVdYc',
        RatePerHour: 25,
        SkillType: 5,
        Title: 'Sr. Consultant',
      },
      {
        DateCreated: '3/22/2019',
        FirstName: 'Darshan',
        LastName: 'Patel',
        // tslint:disable-next-line:max-line-length
        AvatarImage: 'https://media.licdn.com/dms/image/C5103AQEDqvKYESdOcA/profile-displayphoto-shrink_800_800/0?e=1558569600&v=beta&t=yfZTDWNC9ReObSYctn7ZgRm-hPBgsW6zv_8LHwwdmPs',
        RatePerHour: 25,
        SkillType: 3,
        Title: 'Sr. Consultant',
      }
    ];

    // Format to market place category options
    const categories = this.utils.groupBy(this.consultants,
      (consultant) => consultant.SkillType);

    const mostReviewed = this.consultants;
    const newlyAdded = this.consultants;
    categories.set(0, mostReviewed);
    categories.set(1, newlyAdded);

    return categories;
  }
}
