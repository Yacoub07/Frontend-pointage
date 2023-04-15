import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { ServicequartierService } from '../servicequartier.service';

@Component({
  selector: 'app-accueilquartier',
  templateUrl: './accueilquartier.component.html',
  styleUrls: ['./accueilquartier.component.css']
})
export class AccueilquartierComponent implements OnInit {
  public listquartiers!: any;


  isSubmitted  =  false;


  constructor(private servicequartierService:ServicequartierService,
    private router: Router,
    private formBuilder: FormBuilder)
    {}
  ngOnInit(): void {
    this.listquartier();
  }

  listquartier(){
    this.servicequartierService.Affichquartier().subscribe({
      next:(data)=>{
        this.listquartiers=data
      },error:(erreur)=>{
        console.log(erreur)
      }
    })



    }

}
