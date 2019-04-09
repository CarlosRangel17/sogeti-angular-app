import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'role' })
export class RolePipe implements PipeTransform {
    transform(value: string): string {

        switch (value) {
            case "Company":
                return 'Supplier';
            case "Client":
                return 'Buyer';
            case "Consultant":
                return 'Asset';
            case "Regulator":
                return 'Asset Verifier';
        }
    }
}
