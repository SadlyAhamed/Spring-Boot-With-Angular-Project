import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Deliveryman } from 'src/app/model/deliveryman';
import {  UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { DeliveryManDetails } from '../model/DeliveryManDetails';


@Component({
  selector: 'app-deliveryman',
  templateUrl: './deliveryman.component.html',
  styleUrls: ['./deliveryman.component.css']
})

export class DeliverymanComponent implements OnInit{

  form: UntypedFormGroup;
  submitted = false;
  delivary_man_details: DeliveryManDetails[] = [];
  
  isEdit = false;

  status: any = [];
  constructor(private fb: UntypedFormBuilder, private http: HttpClient) {
    
    this.form = fb.group({
     id: [],
      heroName: ['', Validators.required],
      heroCell: ['', ],
      heroEmail: ['', ],
      heroPassword: ['', ],
      heroAddress: ['', ],
      heroLocation: ['Select', ],
      empId: ['', ]
      
    });
  }


  ngOnInit(): void {
    this.showAll();
    this.showAllTown();
  }
  get f() {
    return this.form.controls;
  }
  save(){
    this.submitted = true;
    if(this.form.valid){

      let url = 'http://localhost:8085/delivary/save/';
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
 }


 showAll() {
  let url = 'http://localhost:8085/delivary/getall';
  this.http.get<DeliveryManDetails[]>(url).subscribe({
    next: response => {
      this.delivary_man_details = response;
    },
    error: err => {
      console.log(err);        
    }
  });
}

 
edit(DelivaryManDetails: any){
  this.form.patchValue({
    id: DelivaryManDetails.id,
    heroName: DelivaryManDetails.heroName,
    heroCell: DelivaryManDetails.heroCell,
    heroEmail: DelivaryManDetails.heroEmail,
    heroPassword: DelivaryManDetails.heroPassword,
    heroAddress: DelivaryManDetails.heroAddress,
    heroLocation: DelivaryManDetails.heroCity,
    empId: DelivaryManDetails.empId,
  });
  this.isEdit = true;
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

deleteById(delivaryMan: DeliveryManDetails) {
  const url = `http://localhost:8085/delivary/delete/${delivaryMan.id}`;
  this.http.delete(url).subscribe({
    next: () => {
      alert("Record was deleted.");
      this.showAll();
    },
    error: (err) => {
      alert("Record deletion failed.");
    }
  });
}




relode(){
  window.location.reload();
}

}

