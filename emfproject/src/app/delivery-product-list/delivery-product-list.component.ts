import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delivery-product-list',
  templateUrl: './delivery-product-list.component.html',
  styleUrls: ['./delivery-product-list.component.css']
})
export class DeliveryProductListComponent implements OnInit
{
 

  form: UntypedFormGroup;
  submitted = false;
  order_details:  any = [];


  ngOnInit(): void {
    this.showAll();
   
  }

  constructor(private fb: UntypedFormBuilder, private http: HttpClient) {
    this.form = fb.group({

      id: [],
      recipientName: ['',],
      recipientMobileNo: ['', ],
      recipientAddress: ['', ],
      userLocation: ['', ],
      selectProductType: ['', ],
      packageWeight: ['', ],
      numberOfItem: ['', ],
      payment: ['', ],
      orderActivityStatus: ['', ],
      name:['',],

    });
   }

   showAll(){
    let url = 'http://localhost:8085/done_order/Dhaka';
    this.http.get(url).subscribe({
      next: response =>{
        this.order_details = response;
      },
      error: err =>{
        console.log(err);        
      }
    });
  } 


}
