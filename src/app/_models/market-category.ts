import { Consultant } from './consultant';

export interface MarketCategory {
    Key: number;
    AvatarUrl: string;
    Consultants: Consultant[];
}
