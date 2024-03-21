import { Component, OnInit  } from '@angular/core';
import {  UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-orderdeshboard',
  templateUrl: './orderdeshboard.component.html',
  styleUrls: ['./orderdeshboard.component.css']
})

export class OrderdeshboardComponent implements OnInit{

  base = "http://localhost:8085/get_available_dlm/"
  urlupdate="http://localhost:8085/order/update/"
 
  form: UntypedFormGroup;
  submitted = false;
  order_details:  any = [];
  delivary_man_details: any = [];
  isEdit = false;
 
  constructor(private fb: UntypedFormBuilder, private http: HttpClient) {
    this.form = fb.group({

      id: [],
      senderName: ['',],
      senderCell: ['', ],
      SenderAddress: ['', ],
      recipientLocation: ['', ],
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

    this.form = fb.group({
      id: [],
       heroName: ['', Validators.required],
       heroCell: ['', ],
       heroEmail: ['', ],
       heroPassword: ['', ],
       heroAddress: ['', ],
       heroLocation: ['Select', ],
       heroStatus: ['', ],
       empid: ['', ]
       
     });
   }

  ngOnInit(): void {
    this.showAlldelivary();
    this.showAll();
  }

  hh?: any;
  orderIds?:number;

  getBylo(value: any, orderId: any){

    this.hh=value;
    this.orderIds=orderId;
    console.log(this.hh)
    console.log(this.orderIds)
    this.http.get(this.base+this.hh).subscribe(
      data => {
        this.delivary_man_details = data,
        console.log(this.delivary_man_details);
      }
    ) 
  }

  assinDeliMen(dm:number){
    this.submitted=true
    this.http.patch(this.urlupdate+this.orderIds+"/"+dm, dm).subscribe(
      data=>console.log("Done")
    )
    window.location.reload()
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
    });

  } 

  edit(OrderDetails: any){
    this.form.patchValue({
      id: OrderDetails.id,
      senderName: OrderDetails.senderName,
      senderCell: OrderDetails.senderCell,
      SenderAddress: OrderDetails.SenderAddress,
      userLocation: OrderDetails.userLocation,

      recipientLocation: OrderDetails.recipientLocation,
      recipientName: OrderDetails.recipientName,
      recipientMobileNo: OrderDetails.recipientMobileNo,
      recipientAddress: OrderDetails.recipientAddress,
      


      selectProductType: OrderDetails.selectProductType,
      packageWeight: OrderDetails.packageWeight,
      numberOfItem: OrderDetails.numberOfItem,
      payment: OrderDetails.payment,
      orderActivityStatus: OrderDetails.orderActivityStatus,
      ord_id_fk: OrderDetails.delivary_man_details,
    });
  }

  showAlldelivary(){
    let url = 'http://localhost:8085/delivary/getall';
    this.http.get(url).subscribe({
      next: response =>{
        this.delivary_man_details = response;
      },
      error: err =>{
        console.log(err);        
      }
    })
  }
  }

