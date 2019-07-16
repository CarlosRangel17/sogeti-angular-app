import { ContractService } from './contract-service';

export class Contract {
    Id: string;
    DateCreated: string;
    TermStartDate: string;
    TermEndDate: string;
    RequireFullTime: string;
    RatePerHour: string;
    Status: string;
    ClientId: string;
    Name: string;
    ConsultantId: string;
    SOWId: string;
    Description: string;
    Requirement1: string;
    Requirement2: string;
    Requirement3: string;
    ServiceType: string
    Services: ContractService[]

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
        this.DateCreated = asset.Record.DateCreated;
        this.TermStartDate = asset.Record.TermStartDate;
        this.TermEndDate = asset.Record.TermEndDate;
        this.RequireFullTime = asset.Record.RequireFullTime;
        this.RatePerHour = asset.Record.RatePerHour;
        this.Status = asset.Record.Status;
        this.ClientId = asset.Record.ClientId;
        this.Name = asset.Record.Name;
        this.ConsultantId = asset.Record.ConsultantId;
        this.SOWId = asset.Record.SOWId;
        this.Description = asset.Record.Description;
        this.Requirement1 = asset.Record.Requirement1;
        this.Requirement2 = asset.Record.Requirement2;
        this.Requirement3 = asset.Record.Requirement3;
        this.ServiceType = asset.Record.ServiceType;
        this.Services = [];
        this.ServiceType.split(',').forEach(x => this.Services.push(new ContractService(x)))
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