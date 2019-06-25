export class Consultant {
    Id: string;
    DateCreated: string;
    FirstName: string;
    LastName: string;
    AvatarImage: string;
    Title: string;
    RatePerHour: number;
    SkillType: number; // Enum 0:Blockchain, 1:Web, 2:Mobile, 3:BusinessAnalytics
    // SkillLevel: number;
    // Skill1: string;
    // Skill2: string;
    // Skill3: string;
    ClientId: string;
    constructor(type: ModelType, asset:any) {
        console.log('type:', type);
        console.log('asset:', asset);
    
        switch(type) {
            case ModelType.JSON:
                this.jsonMap(asset);
                break;
            case ModelType.Array:
                this.arrayMap(asset);
                break;
            case ModelType.String:
                this.stringMap(asset);
                break;
            default:
                this.jsonMap(asset);
                break;
        }
    }

    jsonMap(asset: any){

        
        this.Id = asset.Key;
        console.log('Key', asset.Key);
        this.DateCreated = asset.Record.DateCreated;
        console.log('Date Created', asset.Record.DateCreated);
        this.FirstName = asset.Record.FirstName;
        this.LastName = asset.Record.LastName;
        this.AvatarImage = asset.Record.AvatarImage;
        this.Title = asset.Record.Title;
        this.RatePerHour = asset.Record.RatePerHour;
        this.SkillType = asset.Record.SkillType;
    }

    arrayMap(asset: any) {

    }

    stringMap(asset: any) {

    }
}

export enum ModelType {
    JSON = 1,
    Array,
    String
}