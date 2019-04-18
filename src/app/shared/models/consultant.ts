export interface Consultant {
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
    // ClientId: string;
}
