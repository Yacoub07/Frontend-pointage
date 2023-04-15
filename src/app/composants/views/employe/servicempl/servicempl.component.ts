import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-servicempl',
  templateUrl: './servicempl.component.html',
  styleUrls: ['./servicempl.component.css']
})
export class ServicemplComponent implements OnInit {
  public fonctionForm!: FormGroup;


  isSubmitted  =  false;




  constructor(private serviceservice: ServiceService,
    private router: Router,
    private formBuilder: FormBuilder)
    {}
  ngOnInit(): void {
    this.fonctionForm=this.formBuilder.group({
      code: ['',[Validators.required,Validators.minLength(4)]],
      nom_service: ['',[Validators.required,Validators.minLength(4)]],


    })
  }


  get formControls() { return this.fonctionForm.controls; }



  serviceFonction(){
    console.log(this.fonctionForm.value)
    this.serviceservice.AjoutService(this.fonctionForm.value).subscribe({
      next:(data)=>{
console.log(data)
      },error:(erreur)=>{
        console.log(erreur)
      }
    })



    }

}
