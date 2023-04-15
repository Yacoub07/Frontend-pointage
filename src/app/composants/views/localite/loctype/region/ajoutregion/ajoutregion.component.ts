import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { ServiceregionService } from '../serviceregion.service';

@Component({
  selector: 'app-ajoutregion',
  templateUrl: './ajoutregion.component.html',
  styleUrls: ['./ajoutregion.component.css']
})
export class AjoutregionComponent implements OnInit {
  public regionForm!: FormGroup;


  isSubmitted  =  false;


  constructor(private serviceregionService:ServiceregionService,
    private router: Router,
    private formBuilder: FormBuilder)
    {}
  ngOnInit(): void {
    this.regionForm=this.formBuilder.group({
      nom: ['',[Validators.required,Validators.minLength(4)]],



    })
  }


  get formControls() { return this.regionForm.controls; }



  regionFonction(){
    console.log(this.regionForm.value)
    this.serviceregionService.AjoutRegion(this.regionForm.value).subscribe({
      next:(data)=>{
console.log(data)
      },error:(erreur)=>{
        console.log(erreur)
      }
    })



    }

}

