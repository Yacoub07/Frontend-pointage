import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, Route } from '@angular/router';
import { SiteService } from '../site.service';


@Component({
  selector: 'app-accueilsite',
  templateUrl: './accueilsite.component.html',
  styleUrls: ['./accueilsite.component.css']
})
export class AccueilsiteComponent implements OnInit {
  public listsites!:any;


  isSubmitted  =  false;


  constructor(private siteservice:SiteService,
    private router: Router,
    private formBuilder: FormBuilder)
    {}
  ngOnInit(): void {
    this.listsite();
  }



  listsite(){
    this.siteservice.Affichsite().subscribe({
      next:(data)=>{
        this.listsites=data
      },error:(erreur)=>{
        console.log(erreur)
      }
    })
    }
}
