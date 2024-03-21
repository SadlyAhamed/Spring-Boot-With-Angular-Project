import { Component, OnInit, ViewChild } from '@angular/core';
import {  NgForm, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit{
@ViewChild('serch')serch?: NgForm;

  order_details: any = [];
  orderD:any[] = [];
  serchResult:any;
  form: UntypedFormGroup;


  ngOnInit(): void {
    this.showAll();
  }

  constructor(private fb: UntypedFormBuilder, private http: HttpClient) {
    this.form = fb.group({
      id: [],

      senderName: ['',],
      senderCell: ['', ],
      senderAddress: ['', ],
      userLocation: ['Select', ],

      recipientLocation: ['', ],
      recipientName: ['', Validators.required],
      recipientMobileNo: ['', ],
      recipientAddress: ['', ],

      selectProductType: ['Document', ],
      packageWeight: ['Select Weight', ],
      numberOfItem: ['', ],
      payment: ['', ],
      orderActivityStatus: ['', ],
     
      
    });
  }

  // showAll(){
  //   let url = 'http://localhost:8085/order/getall';
  //   this.http.get(url).subscribe(
  //    data => {
  //     this.order_details = data;
  //     this.orderD = this.order_details
  //    console.log(this.orderD);
  //    }
  //   )
  // }

  showAll() {
    const url = 'http://localhost:8085/order/getall';
    
    this.http.get(url).subscribe(
        (data: any) => {
            this.order_details = data;
            this.orderD = this.order_details;
            console.log(this.orderD);
        },
        (error) => {
            console.error('Error occurred while fetching orders:', error);
            // You can handle the error here, for example, show a message to the user
        }
    );
}


//   searched = false;

//   searchByid(){
//     console.log(this.serch?.value.serchId);
//     console.log(this.orderD)
//     this.serchResult =this.orderD.find(trid=>trid.orderTrakingNumber == this.serch?.value.serchId)
//     this.searched = true;
//     console.log(this.serchResult)
// }
searched = false;

searchById() {
    const searchId = this.serch?.value.serchId;
    
    if (searchId) {
        console.log(searchId);
        console.log(this.orderD);

        this.serchResult = this.orderD.find(order => order.orderTrakingNumber === searchId);
        this.searched = true;
        console.log(this.serchResult);
    } else {
        console.error('Search ID is empty.');
        // You can handle this scenario as per your application logic
    }
}

}
