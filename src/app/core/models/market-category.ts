import { Consultant } from '../../shared/models/consultant';

export interface MarketCategory {
    Key: number;
    AvatarUrl: string;
    Consultants: Consultant[];
}
