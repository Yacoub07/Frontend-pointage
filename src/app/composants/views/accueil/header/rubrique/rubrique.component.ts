import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { RubriqueserviceService } from './rubriqueservice.service';

@Component({
  selector: 'app-rubrique',
  templateUrl: './rubrique.component.html',
  styleUrls: ['./rubrique.component.css']
})
export class RubriqueComponent implements OnInit {
   public countempl!:any;
   public countservice!:any;
   public countsite!:any;
   public countliste!:any



  isSubmitted  =  false;



  constructor(private rubriqueserviceService: RubriqueserviceService,
    private router: Router,
    private formBuilder: FormBuilder,
    )
    {}


  ngOnInit(): void {
    this.countempls();
    // this.countserv();
    // this.countsit();
  }






  countempls(){

    this.rubriqueserviceService.Affichcountempl().subscribe({
      next:(data)=>{
        this.countliste=data
        this.countempl=this.countliste[0]

      },error:(erreur)=>{
        console.log(erreur)
      }
    })
    }

    // countserv(){

    //   this.rubriqueserviceService.Affichcountservice().subscribe({
    //     next:(data)=>{
    //       this.countservice=data
    //     },error:(erreur)=>{
    //       console.log(erreur)
    //     }
    //   })
    //   }

    //   countsit(){

    //     this.rubriqueserviceService.Affichcountsite().subscribe({
    //       next:(data)=>{
    //         this.countsite=data
    //       },error:(erreur)=>{
    //         console.log(erreur)
    //       }
    //     })
    //     }
}
