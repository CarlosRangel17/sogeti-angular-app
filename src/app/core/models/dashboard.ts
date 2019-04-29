import { Address } from 'src/app/shared/models/address';
import { Role } from 'src/app/shared/models/enumerations';

export class Dashboard {
    AvatarUrl: string;
    Role: Role;
    Name: string;
    Address: Address;

    constructor(
        name: string,
        role: Role,
        avatarUrl: string,
        address: Address) {
            this.AvatarUrl = avatarUrl;
            this.Role = role;
            this.Name = name;
            this.Address = address;
        }
}
