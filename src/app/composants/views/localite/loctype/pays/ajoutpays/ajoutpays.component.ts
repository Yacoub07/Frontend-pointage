import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { ServicepaysService } from '../servicepays.service';

@Component({
  selector: 'app-ajoutpays',
  templateUrl: './ajoutpays.component.html',
  styleUrls: ['./ajoutpays.component.css']
})
export class AjoutpaysComponent implements OnInit {
  public paysForm!: FormGroup;


  isSubmitted  =  false;


  constructor(private servicepaysService:ServicepaysService,
    private router: Router,
    private formBuilder: FormBuilder)
    {}
  ngOnInit(): void {
    this.paysForm=this.formBuilder.group({
      nom: ['',[Validators.required,Validators.minLength(4)]],
      indicatif: ['',[Validators.required,Validators.minLength(4)]],



    })
  }


  get formControls() { return this.paysForm.controls; }



  paysFonction(){
    console.log(this.paysForm.value)
    this.servicepaysService.AjoutPays(this.paysForm.value).subscribe({
      next:(data)=>{
console.log(data)
      },error:(erreur)=>{
        console.log(erreur)
      }
    })



    }

}

