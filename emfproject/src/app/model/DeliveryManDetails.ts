export class DeliveryManDetails {
    id: number;
    heroName: string;
    heroCell: string;
    heroEmail: string;
    heroPassword: string;
    heroAddress: string;
    heroLocation: string;
    heroStatus: number;
    empId: string;
  
    constructor(id: number, heroName: string, heroCell: string, heroEmail: string, heroPassword: string, heroAddress: string, heroLocation: string, heroStatus: number, empId: string) {
      this.id = id;
      this.heroName = heroName;
      this.heroCell = heroCell;
      this.heroEmail = heroEmail;
      this.heroPassword = heroPassword;
      this.heroAddress = heroAddress;
      this.heroLocation = heroLocation;
      this.heroStatus = heroStatus;
      this.empId = empId;
    }
  }
  