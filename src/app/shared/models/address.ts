export class Address {
    Address1: string;
    Address2: string;
    City: string;
    State: string;
    Zip: string;

    constructor(address1: string, address2: string, city: string, state: string, zip: string) {
        this.Address1 = address1;
        this.Address2 = address2;
        this.City = city;
        this.State = state;
        this.Zip = zip;
    }

    get address(): string {
        return this.Address1 + ' ' + this.Address2 + ' ' + this.City + ', ' + this.State + ', ' + this.Zip; 
    }
}