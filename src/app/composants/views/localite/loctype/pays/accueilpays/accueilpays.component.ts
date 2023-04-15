import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { ServicepaysService } from '../servicepays.service';

@Component({
  selector: 'app-accueilpays',
  templateUrl: './accueilpays.component.html',
  styleUrls: ['./accueilpays.component.css']
})
export class AccueilpaysComponent implements OnInit {
  public listepays!: any;


  isSubmitted  =  false;


  constructor(private servicepaysService:ServicepaysService,
    private router: Router,
    private formBuilder: FormBuilder)
    {}
  ngOnInit(): void {
    this.listpays();
  }



  listpays(){

    this.servicepaysService.Affichpays().subscribe({
      next:(data)=>{
        this.listepays=data
      },error:(erreur)=>{
        console.log(erreur)
      }
    })



    }

}

