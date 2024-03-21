import { Component, OnInit } from '@angular/core';
import {  UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})

export class OrderDetailsComponent implements OnInit {
  
  form: UntypedFormGroup;
  submitted = false;
  order_details: any = [];
  isEdit = false;
  status: any = [];
  constructor(private fb: UntypedFormBuilder, private http: HttpClient) {
    this.form = fb.group({
      id: [],

      senderName: ['',],
      senderCell: ['', ],
      senderAddress: ['',],
      userLocation: ['Select', ],
      email:['', ],

      recipientLocation: ['', ],
      recipientName: ['', ],
      recipientMobileNo: ['',],
      recipientAddress: ['',],

      selectProductType: ['Document',],
      packageWeight: ['Select Weight',],
      numberOfItem: ['', ],
      payment: ['', ],
      orderActivityStatus: ['', ],
    });
   


  }





  delivary_man_details: any = [];

  ngOnInit(): void {
    this.showAll();
    this.showAllTown();
  }

  showAllTown(){
    let url = 'http://localhost:8085/status/getall';
    this.http.get(url).subscribe({
      next: response =>{
        this.status = response;
      },
      error: err =>{
        console.log(err);        
      }
    });
  
  }
  // this.order_details.orderActivityStatus='Pending';


  get f() {
    return this.form.controls;
  }

  save(){
    this.submitted = true;
    if(this.form.valid){

      let url = 'http://localhost:8085/order/save/';
      let data = this.form.value;
      this.http.post(url, data).subscribe({
        next: response => {
          alert("Data was saved successful.")
          
          this.showAll();
          this.form.reset();
        },
        error: err =>{
          alert("Data was saved failed!, Please try again.")

        }
      });
    }else{
      console.log("invalid");
    }
    window.location.reload();
 }


 
 showAll(){
  let url = 'http://localhost:8085/orderPanding/getall/Pending';
  this.http.get(url).subscribe({
    next: response =>{
      this.order_details = response;
    },
    error: err =>{
      console.log(err);        
    }
  })
}


edit(OrderDetails: any){
  this.form.patchValue({
    
    id: OrderDetails.id,
    senderName: OrderDetails.senderName,
    senderCell: OrderDetails.senderCell,
    senderAddress: OrderDetails.senderAddress,
    userLocation: OrderDetails.userLocation,

    recipientLocation: OrderDetails.recipientLocation,
    recipientName: OrderDetails.recipientName,
    recipientMobileNo: OrderDetails.recipientMobileNo,
    recipientAddress: OrderDetails.recipientAddress,

    selectProductType: OrderDetails.selectProductType,
    packageWeight: OrderDetails.packageWeight,
    numberOfItem: OrderDetails.numberOfItem,
    payment: OrderDetails.payment,
    
  });
  this.isEdit = true;
}
deleteById(id: number){
  let url = 'http://localhost:8085/order/delete/'+id;
  this.http.get(url).subscribe({
    next: response =>{
      alert("Recored was deleted.");
      this.showAll();
    },
    error: err =>{
      alert("Recored deletation failed!.");
    }
  });
}
// Validatro 
  





        relode(){
          window.location.reload();
        }



}

