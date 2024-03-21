import { Component, OnInit } from '@angular/core';
import {  UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit{

  form: UntypedFormGroup;
  submitted = false;
  order_details: any = [];
  isEdit = false;

  constructor(private fb: UntypedFormBuilder, private http: HttpClient) {
    this.form = fb.group({
    })

  }

  ngOnInit(): void {
    this.showAll();
    
  }


  showAll(){
    let url = 'http://localhost:8085/order/getall';
    this.http.get(url).subscribe({
      next: response =>{
        this.order_details = response;
      },
      error: err =>{
        console.log(err);        
      }
    });
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

  // updateStatus(ordetails: any) {
    // Assuming you have a property called orderActivityStatus in your ordetails object
    // ordetails.orderActivityStatus = ordetails.deliveryUpdate;
    // After updating, you might want to send this information to the server or update the database
// }

  
}
