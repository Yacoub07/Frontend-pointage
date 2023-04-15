import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { ServiceregionService } from '../serviceregion.service';

@Component({
  selector: 'app-accueilregion',
  templateUrl: './accueilregion.component.html',
  styleUrls: ['./accueilregion.component.css']
})
export class AccueilregionComponent implements OnInit {
  public listregions!: any;


  isSubmitted  =  false;


  constructor(private serviceregionService:ServiceregionService,
    private router: Router,
    private formBuilder: FormBuilder)
    {}
  ngOnInit(): void {
    this.listregion();
  }


  listregion(){
    this.serviceregionService.Affichregion().subscribe({
      next:(data)=>{
        this.listregions=data
      },error:(erreur)=>{
        console.log(erreur)
      }
    })



    }

}

