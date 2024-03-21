import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-executive-office',
  templateUrl: './executive-office.component.html',
  styleUrls: ['./executive-office.component.css']
})
export class ExecutiveOfficeComponent implements OnInit{
  form: UntypedFormGroup;
  submitted = false;
  executiveoffice: any = [];
  isEdit = false;
  status: any = [];
  
  constructor(private fb: UntypedFormBuilder, private http: HttpClient){
    
    this.form = fb.group({
      id: [],
       exeName: ['', Validators.required],
       exeCell: ['', ],
       exeEmail: ['', ],
       exePassword: ['', ],
       exeAddress: ['', ],
       exeCity: ['Choose', ],
       empId: ['', ]
       
       
     });
  }

 ngOnInit(): void {
  this.showAll(); 
  this.showAllTown();
 }

 showAll(){
  let url = 'http://localhost:8085/executive/getall';
  this.http.get(url).subscribe({
    next: response =>{
      this.executiveoffice = response;
    },
    error: err =>{
      console.log(err);        
    }
  });
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
 

save(){
  this.submitted = true;
  if(this.form.valid){

    let url = 'http://localhost:8085/executive/saveexc/';
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

edit(ExecutiveOffice: any){
  this.form.setValue({
    
    id: ExecutiveOffice.id,
    exeName: ExecutiveOffice.exeName,
    exeCell: ExecutiveOffice.exeCell,
    exeEmail: ExecutiveOffice.exeEmail,
    exePassword: ExecutiveOffice.exePassword,
    exeAddress: ExecutiveOffice.exeAddress,
    exeCity: ExecutiveOffice.exeCity,
    empId: ExecutiveOffice.empId,
      

  });
  this.isEdit = true;
}
deleteById(id: number){
  let url = 'http://localhost:8085/executive/delete/'+id;
  this.http.get(url).subscribe({
    next: response =>{
      alert("Recored was deleted.");
      this.showAll();
    },
    error: err =>{
      alert("Recored deletation failed!.");
    }
  })
}

}
