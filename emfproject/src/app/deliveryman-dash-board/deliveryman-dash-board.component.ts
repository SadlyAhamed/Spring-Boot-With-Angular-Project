import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deliveryman-dash-board',
  templateUrl: './deliveryman-dash-board.component.html',
  styleUrls: ['./deliveryman-dash-board.component.css']
})

export class DeliverymanDashBoardComponent implements OnInit{

  base ="http://localhost:8085/order/out/"

  form: UntypedFormGroup;
  submitted = false;
  order_details:  any = [];



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

  ngOnInit(): void {
    this.showAll();
   
  }

  showAll(){
    let url = 'http://localhost:8085/get_available_processing_order/Dhaka';
    this.http.get(url).subscribe({
      next: response =>{
        this.order_details = response;
      },
      error: err =>{
        console.log(err);        
      }
    });
  } 


  ordsts?: any;

  getUpdateStatus(value: any){
    this.submitted=true
    this.ordsts=value
    console.log(this.ordsts)
    this.http.put<any>(this.base+this.ordsts, this.order_details).subscribe(data=>console.log("Done"))
    window.location.reload();
      
    
  }



}
