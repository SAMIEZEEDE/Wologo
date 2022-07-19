/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';

@Injectable()
export class leadService {
 userInfo;
 statusCheck:any;
 userData =[];

    constructor() {
        this.initlead();
    }

    initlead() {
        this.userInfo = {
             ProtectionType:null,
             InsuranceType:null,
             dateOfBirth:'',
             genderAtBirth:'Female',
             maternityCoverage:'No',
             State:'Tennessee',
             OccupationCategory:'Artist',
             employmentStatus:'yes',
             income:'1,200',
             governmentEmployeeStatus:'No',
             nicotine:'No'
        }
    }




//     profileForm:any;
//     profileForm = new FormGroup({
//     ProtectionType: new FormControl(''),
//     InsuranceType: new FormControl(''),
//     dateOfBirth: new FormControl(''),
//     genderAtBirth: new FormControl(''),
//     maternityCoverage: new FormControl(''),
//     State: new FormControl(''),
//     OccupationCategory: new FormControl(''),
//     employmentStatus: new FormControl(''),
//     income: new FormControl(''),
//     governmentEmployeeStatus: new FormControl(''),

//   });

}
